// What the Elevator Would Say — make.fun entry.
// Writes the funniest one line a talking elevator could say to
// /output/entry.txt. Deterministic: the same bytes on every run.
// Node 22, standard library only. No network, no secrets, no file
// reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Going down? I have carried 14 people, 3 dogs and one very loud argument today. Please hold the doors — and the drama.";

// Gate guard: the entry must be 1-120 characters and not only whitespace.
// Fail loudly instead of writing an entry the sealed scorer would reject.
const length = [...ENTRY].length;
if (length < 1 || length > 120) {
  throw new Error(
    `entry length ${length} is outside the 1-120 character gate; refusing to write`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace; refusing to write");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
