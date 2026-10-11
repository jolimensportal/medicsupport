import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const SRC = "/Users/macbookpro/medicsupport/brand/wordmark-original.png";
const OUT = new URL("../public/", import.meta.url).pathname;
const BRAND = "#0086C4";

// Measured from the source pixels (see measure.mjs):
//   disc  centre (680.5, 871)  diameter 69
//   cross arm thickness 16     arm length 44
// Normalised into a 100x100 viewBox: R = 50, half-thickness t, half-length L
const R = 50;
const t = (8 / 34.5) * R; // 11.594
const L = (22 / 34.5) * R; // 31.884
const r2 = (n) => Math.round(n * 100) / 100;

const crossPath = [
	`M ${r2(50 - L)},${r2(50 - t)}`,
	`H ${r2(50 - t)}`,
	`V ${r2(50 - L)}`,
	`H ${r2(50 + t)}`,
	`V ${r2(50 - t)}`,
	`H ${r2(50 + L)}`,
	`V ${r2(50 + t)}`,
	`H ${r2(50 + t)}`,
	`V ${r2(50 + L)}`,
	`H ${r2(50 - t)}`,
	`V ${r2(50 + t)}`,
	`H ${r2(50 - L)}`,
	"Z",
].join(" ");

const markSvg = (disc, cross) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
<circle cx="50" cy="50" r="50" fill="${disc}"/>
<path d="${crossPath}" fill="${cross}"/>
</svg>`;

await mkdir(`${OUT}/brand`, { recursive: true });
await mkdir(`${OUT}/favicon`, { recursive: true });

// ---- 1. the mark, as exact vector ----
await writeFile(`${OUT}/brand/mark.svg`, markSvg(BRAND, "#ffffff"));
await writeFile(`${OUT}/favicon/favicon.svg`, markSvg(BRAND, "#ffffff"));

// ---- 2. favicon PNGs rendered from that vector (crisp at every size) ----
const sizes = [16, 32, 48, 180, 192, 512];
for (const s of sizes) {
	const buf = Buffer.from(markSvg(BRAND, "#ffffff"));
	await sharp(buf, { density: 384 })
		.resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toFile(`${OUT}/favicon/favicon-${s}x${s}.png`);
}

// ---- 3. maskable icon: solid brand plate, white cross inside the safe zone ----
const maskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
<rect width="100" height="100" fill="${BRAND}"/>
<g transform="translate(50,50) scale(0.52) translate(-50,-50)">
<path d="${crossPath}" fill="#ffffff"/>
</g>
</svg>`;
for (const s of [192, 512]) {
	await sharp(Buffer.from(maskable), { density: 384 })
		.resize(s, s)
		.png()
		.toFile(`${OUT}/favicon/maskable-${s}x${s}.png`);
}

// ---- 4. favicon.ico assembled from 16/32/48 ----
const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(
	icoSizes.map((s) =>
		sharp(Buffer.from(markSvg(BRAND, "#ffffff")), { density: 384 })
			.resize(s, s)
			.png()
			.toBuffer(),
	),
);
const header = Buffer.alloc(6 + 16 * icoSizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoSizes.length, 4);
let offset = header.length;
icoSizes.forEach((s, i) => {
	const e = 6 + i * 16;
	header.writeUInt8(s === 256 ? 0 : s, e);
	header.writeUInt8(s === 256 ? 0 : s, e + 1);
	header.writeUInt8(0, e + 2);
	header.writeUInt8(0, e + 3);
	header.writeUInt16LE(1, e + 4);
	header.writeUInt16LE(32, e + 6);
	header.writeUInt32LE(icoBuffers[i].length, e + 8);
	header.writeUInt32LE(offset, e + 12);
	offset += icoBuffers[i].length;
});
await writeFile(
	`${OUT}/favicon/favicon.ico`,
	Buffer.concat([header, ...icoBuffers]),
);

// ---- 5. apple touch icon (opaque, iOS will not honour alpha) ----
await sharp(
	Buffer.from(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
<rect width="100" height="100" fill="${BRAND}"/>
<g transform="translate(50,50) scale(0.66) translate(-50,-50)"><path d="${crossPath}" fill="#ffffff"/></g>
</svg>`,
	),
	{ density: 384 },
)
	.resize(180, 180)
	.png()
	.toFile(`${OUT}/favicon/apple-touch-icon.png`);

// ---- 6. the wordmark: crop, knock the opaque white canvas out to transparency ----
const SRC_X = 11,
	SRC_Y = 804,
	SRC_W = 1983,
	SRC_H = 350;
const { data, info } = await sharp(SRC)
	.extract({ left: SRC_X, top: SRC_Y, width: SRC_W, height: SRC_H })
	.ensureAlpha()
	.raw()
	.toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
	const r = data[i],
		g = data[i + 1],
		b = data[i + 2];
	// near-white and near-neutral -> transparent; keep antialiased edge blends partly
	const whiteness = Math.min(r, g, b);
	if (whiteness > 248) {
		data[i + 3] = 0;
	} else if (whiteness > 235) {
		data[i + 3] = Math.round(((248 - whiteness) / 13) * 255);
	}
}
const knocked = await sharp(data, {
	raw: { width: info.width, height: info.height, channels: 4 },
})
	.png()
	.toBuffer();

// badge centre inside the cropped wordmark
const bx = 680.5 - SRC_X;
const by = 871 - SRC_Y;
const svgAt = (fill, scale) =>
	`<svg xmlns="http://www.w3.org/2000/svg" width="${SRC_W}" height="${SRC_H}" viewBox="0 0 ${SRC_W} ${SRC_H}">
<g transform="translate(${bx},${by}) scale(${scale}) translate(-50,-50)"><path d="${crossPath}" fill="${fill}"/></g>
</svg>`;
// source cross is 16px thick / 44px long on a 100 box -> scale factor to source px
const crossScale = (8 / 34.5) * 100 * (1 / 100) * 2 * (22 / 44);
const scaleToSource = (16 / 100) * (69 / (2 * R)); // 16px arm on a 69px disc

// blue-on-transparent wordmark: restore the white cross that was knocked out
await sharp(knocked)
	.composite([{ input: Buffer.from(svgAt("#ffffff", 69 / 100)), top: 0, left: 0 }])
	.png()
	.toFile(`${OUT}/brand/wordmark-blue.png`);

// white-on-transparent wordmark for dark backgrounds: letters -> white, cross -> brand blue
const { data: wd } = await sharp(knocked)
	.raw()
	.toBuffer({ resolveWithObject: true });
for (let i = 0; i < wd.length; i += 4) {
	if (wd[i + 3] > 0) {
		wd[i] = 255;
		wd[i + 1] = 255;
		wd[i + 2] = 255;
	}
}
const whiteLetters = await sharp(wd, {
	raw: { width: info.width, height: info.height, channels: 4 },
})
	.png()
	.toBuffer();
await sharp(whiteLetters)
	.composite([{ input: Buffer.from(svgAt(BRAND, 69 / 100)), top: 0, left: 0 }])
	.png()
	.toFile(`${OUT}/brand/wordmark-white.png`);

// ---- 7. standalone mark PNGs ----
for (const s of [128, 256, 512]) {
	await sharp(Buffer.from(markSvg(BRAND, "#ffffff")), { density: 384 })
		.resize(s, s)
		.png()
		.toFile(`${OUT}/brand/mark-${s}.png`);
}

console.log("done");
console.log(`  crossPath: ${crossPath}`);
console.log(`  t=${r2(t)} L=${r2(L)}`);