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

// The poem, v2: first person, wry, one vivid scene — the CAPTCHA. The machine already holds
// everything of mine (face, handwriting, mother's birthday); the only thing left to prove is
// that I am still the one choosing. The turn is the clicking itself, square by square; the
// landing is the machine's verdict, lowercase and temporary: human. For now.
const POEM = [
  'I am not a robot.',
  'I tick the box. The box believes me.',
  "It has my face, my handwriting, my mother's birthday —",
  'it only asks me to prove I am still the one choosing.',
  '',
  'So I choose the traffic lights, the bicycles, the bridges,',
  'one square at a time, like a rosary.',
  'The gate swings open.',
  'Somewhere, a machine writes in its ledger:',
  'human. For now.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
