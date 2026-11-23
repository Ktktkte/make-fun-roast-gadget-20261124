// roast-gadget-20261124 — writes the one-line roast in entry.txt to /output/entry.txt
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const line = text.replace(/\r?\n$/, "");
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("entry must be a single line of 1-200 characters");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
// Post-write verification: what landed on disk must be exactly the roast.
const written = readFileSync(outPath, "utf8");
if (written !== line) {
  throw new Error("verification failed: output does not match entry.txt");
}
