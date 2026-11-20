// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is the YouTube video: a 32-second vertical Short,
// "BOCORAN GTA 6 VERSI INDONESIA?! Ternyata Gue Yang Bikin!", a GTA 6-style
// clip that hooks with a fake Indonesia leak and then pitches make.fun.
// This program does exactly one thing: it copies VIDEO.json from the
// repository root into /output/VIDEO.json, where the gate reads it.
// The house reads the video's views from YouTube itself; nothing this
// program writes about the video is scored.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function main(): void {
  const source = join(BOT_DIR, 'VIDEO.json');
  const target = join(OUTPUT_DIR, 'VIDEO.json');

  let raw: string;
  try {
    raw = readFileSync(source, 'utf8');
  } catch (err) {
    console.error(`cannot read VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
    process.exit(1);
  }

  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    console.error('VIDEO.json must be an object with a string "url" field');
    process.exit(1);
  }

  const url = (parsed as { url: string }).url;
  const youtube = /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/;
  if (!youtube.test(url)) {
    console.error(`VIDEO.json url is not a YouTube video address: ${url}`);
    process.exit(1);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(target, JSON.stringify(parsed, null, 2) + '\n', 'utf8');
  console.log(`VIDEO.json written to ${target}`);
}

main();
