// The Möbius Phone — a catalogue photo of an impossible gadget (Node 22, stdlib only).
// Copies the poster beside this file to /output/entry.png. The gate takes a whole
// PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels; the judge sees exactly
// the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// The poster must be a real PNG, exactly 1024x1024, at most 1 MiB —
// check the bytes we ship before copying, so a bad file fails loudly.
const src = new URL('./entry.png', import.meta.url);
const buf = readFileSync(src);
if (buf.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error('entry.png is not a PNG');
if (buf.readUInt32BE(16) !== 1024 || buf.readUInt32BE(20) !== 1024) throw new Error('entry.png is not 1024x1024');
if (buf[24] !== 8 || (buf[25] !== 2 && buf[25] !== 6)) throw new Error('entry.png is not 8-bit truecolor');
if (statSync(src).size > 1048576) throw new Error('entry.png is over 1 MiB');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
// Confirm the copy byte for byte, so repeated runs always produce the same file.
if (!readFileSync(join(outDir, 'entry.png')).equals(buf)) throw new Error('copy mismatch');
console.log('entry.png written:', buf.length, 'bytes, 1024x1024');
