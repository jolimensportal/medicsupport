"""Internal-link auditor for the built site.

Scans dist/**/*.html for href="..." that resolve to a page that does not exist.

IMPORTANT: strips <script> and <style> blocks before matching. Without that,
it reports false positives — a template literal inside a <script> block such as
href="/${r.slug}" looks like a broken link in raw file text, but it is JS
source, not a DOM anchor, and it interpolates correctly at runtime.
"""
import re
import sys
import pathlib
import collections

DIST = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "dist")

SCRIPT_STYLE = re.compile(
    r"<(script|style)\b[^>]*>.*?</\1>", re.IGNORECASE | re.DOTALL
)
HREF = re.compile(r'href="([^"]*)"', re.IGNORECASE)


def resolve(href: str):
    h = href.split("#")[0].split("?")[0].strip()
    if not h:
        return None
    if h.startswith(("http://", "https://", "mailto:", "tel:", "//")):
        return None
    if h.startswith("/"):
        p = DIST / h.lstrip("/")
    else:
        p = (DIST / h)
    if p.is_file():
        return p
    if (p / "index.html").is_file():
        return p / "index.html"
    return False


pages = sorted(DIST.rglob("*.html"))
broken = collections.defaultdict(set)
hrefs = 0

for page in pages:
    raw = page.read_text(errors="ignore")
    clean = SCRIPT_STYLE.sub(" ", raw)
    for m in HREF.finditer(clean):
        hrefs += 1
        if resolve(m.group(1)) is False:
            broken[str(page.relative_to(DIST))].add(m.group(1))

print(f"pages: {len(pages)}   internal hrefs scanned: {hrefs}")

if broken:
    print(f"\nBROKEN INTERNAL LINKS ({len(broken)} files):")
    for f, hs in sorted(broken.items()):
        print(f"  {f}")
        for h in sorted(hs):
            print(f"      -> {h}")
    sys.exit(1)

print("\nOK - no broken internal links.")