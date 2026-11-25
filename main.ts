import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "RingNoOne is a smart doorbell that alerts you the instant nobody is at your door, with live HD video of the empty porch, so you never miss a visitor who isn't there.";

if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-240 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
