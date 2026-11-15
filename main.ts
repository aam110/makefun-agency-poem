// A working agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem about
// agency — the power to choose and to act, and the part of it that stays human when a machine does
// the doing — to /output/entry.txt. Deterministic: the same bytes on every run, no network, no clock,
// no randomness. The judge reads exactly the bytes written, so the poem ends with no trailing line
// end beyond the last word.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The output directory exists in the grader's container; create it if a local run names one
// that does not, so the program still finishes with the same bytes.
mkdirSync(OUTPUT_DIR, { recursive: true });

// The poem: three quatrains. The machine does everything except ask why; it asks only, once,
// whether this is what was meant. The human's share of agency is the meaning — and the word "go".
const POEM = [
  'It writes the letter, books the flight,',
  'and pays the bill before you wake.',
  'It never asks you why.',
  '',
  'It asks one thing, and only once,',
  'the cursor blinking in the dark:',
  'is this what you meant?',
  '',
  'Say yes, and the world rearranges.',
  'Say nothing, and nothing moves.',
  'Everything waits on a finger',
  'and the smallest word you own: go.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
