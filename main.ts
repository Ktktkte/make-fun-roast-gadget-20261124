// Roast gadget v2 — one-line roast entry.
// Reads entry.txt sitting next to this script and writes it byte-for-byte
// to $MAKEFUN_OUTPUT_DIR/entry.txt. No deps, no network, deterministic.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_CHARS = 200;

// Gate check for the roast line: it must be non-empty, exactly one line,
// and within the competition's 200-character cap. Throws on any violation
// so a bad entry fails loudly instead of shipping a gate-rejected text.
function validateEntry(text) {
  if (text.trim().length === 0) {
    throw new Error("entry.txt is empty or only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry.txt must be a single line");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry.txt is ${text.length} characters, over the ${MAX_CHARS} cap`);
  }
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(scriptDir, "entry.txt"), "utf8");
validateEntry(text);

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
