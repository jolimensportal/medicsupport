#!/usr/bin/env python3
"""
Regression check for the Astro newline-collapse bug.

Astro silently eats the whitespace between a text node and an adjacent element
or {expression} when the two are separated by a newline in the template, so
"18\nacross" renders as "18across". It has bitten this project six times.

It never appears in the build log and never appears in the source - only in the
rendered output. And it only shows in a screenshot, which is too late.

This strips tags, scripts, styles and SVG, keeps only the visible text, then
looks for the tell-tale patterns.
"""
import glob
import html as htmllib
import re
import sys

PATTERNS = [
    (re.compile(r"[a-z]\.[A-Z]"), "word.word - probably a missing space before a period"),
    # A number running straight into a word: "18across". Must NOT match
    # legitimate "3rd", "500kg", "12ml" etc, so short unit-ish tails are
    # excluded rather than relying on a length threshold alone.
    # A number running straight into a word: "18across".
    # No \b here - a word boundary can never sit between a digit and a
    # letter, which is exactly the case being detected. Short unit-ish tails
    # are excluded via lookahead so "3rd" and "500kg" do not false-positive.
    (re.compile(r"\d+(?!rd|st|nd|th|kg|mg|ml|km|cm|mm|m2|m3|lb|oz|in|ft)[a-z]{3,}"),
     "number running into a word, e.g. '18across'"),
    (re.compile(r">[a-z]+[A-Z][a-z]+"), "lowerCamel in a text node, e.g. 'check.This'"),
]

bad = []
for path in sorted(glob.glob("dist/**/*.html", recursive=True)):
    raw = open(path, encoding="utf-8", errors="replace").read()
    # drop everything that is not visible prose
    raw = re.sub(r"<script\b.*?</script>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<style\b.*?</style>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<svg\b.*?</svg>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<[^>]+>", "\x00", raw)          # tag boundaries -> sentinel
    text = raw.replace("\x00", " ").replace("\n", " ")
    text = htmllib.unescape(text)
    for rx, why in PATTERNS:
        for m in rx.finditer(text):
            ctx = text[max(0, m.start() - 45) : m.end() + 25]
            bad.append((path, m.group(0), why, re.sub(r"\s+", " ", ctx).strip()))

if not bad:
    print("OK - no whitespace-collapse patterns in the visible text of dist/")
    sys.exit(0)

print(f"WHITESPACE COLLAPSE - {len(bad)} finding(s)\n")
seen = set()
for path, match, why, ctx in bad:
    key = (match, ctx[:40])
    if key in seen:
        continue
    seen.add(key)
    print(f"  {path}")
    print(f"    matched {match!r}  ({why})")
    print(f"    ...{ctx}...\n")
sys.exit(1)
