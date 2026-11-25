// One-Line Roast: The Gadget You Use Every Day
// Bounty slug: u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// Prize: $5, top 3 paid. The program writes a single roast line (1-200 chars,
// one line) to /output/entry.txt. An AI judge compares entries pairwise:
// funniest, freshest angle, tightest wording.
//
// Three candidate roast lines considered:
//   VARIANT A (earbuds): "My earbuds cancel every noise except the sound of my own bad decisions."
//   VARIANT B (smartwatch): "My smartwatch congratulates me for standing up, like sitting was the hardest job I've ever had."
//   VARIANT C (charger cable): "My charger cable only works at one exact angle, like it's negotiating a peace treaty with my phone."
//
// Selection (explicit criteria — most on-theme, most original, most striking at first glance):
//   - Variant A wins: it is the most on-theme (earbuds are a daily gadget everyone
//     recognises), the most original (noise cancelling turned inward on the owner's
//     own bad decisions, a fresh twist nobody else will use), and the most striking
//     at first glance (the punchline lands on the last three words).
//   - Variant B is good but "smartwatch praises standing" is a well-worn joke shape.
//   - Variant C is relatable but the "cable only works at one angle" observation is
//     common; the peace-treaty image is fun yet less surprising than A's twist.
// Chosen line: Variant A.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My earbuds cancel every noise except the sound of my own bad decisions.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Validate: exactly one line, 1-200 UTF-8 characters, not only whitespace,
// and no stray leading/trailing whitespace that would pad the entry.
const length = [...ROAST].length;
if (length < 1 || length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${length}.`);
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("Roast must be a single line.");
}
if (ROAST.trim().length === 0) {
  throw new Error("Roast must not be only whitespace.");
}
if (ROAST !== ROAST.trim()) {
  throw new Error("Roast must not have leading or trailing whitespace.");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
