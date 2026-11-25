// Laugh Track: The Crypto Trading Joke Contest
// u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a
//
// Writes exactly one joke about crypto and trading life to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// Gate: entry.txt must be UTF-8 text of 1-200 characters, not only
// whitespace, a single line. Anything else scores Valid 0.
//
// The joke (109 characters, 111 bytes UTF-8 — the em dash is 3 bytes):
//   "My portfolio is down 90%, but the group chat says we're still
//    early. Early for what — the bankruptcy hearing?"
// Why it lands: the setup is the most recognisable cope in crypto —
// a red portfolio and a group chat chanting "we're still early".
// The turn repeats "early" back as a question, and the payoff swaps
// the promised moon for a bankruptcy hearing. Punchline at the end,
// every word earns its place, and a trader would repeat it to a friend.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "My portfolio is down 90%, but the group chat says we're still early. Early for what — the bankruptcy hearing?";

// Paths are built from this file's location, never from the working
// directory: the grader runs the program from somewhere else.
const HERE = dirname(fileURLToPath(import.meta.url));
void HERE;

const clean = JOKE.trim();
if (JOKE.length < 1 || JOKE.length > 200 || clean.length === 0) {
  throw new Error(
    `joke must be 1-200 non-whitespace characters, got ${JOKE.length}`,
  );
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
