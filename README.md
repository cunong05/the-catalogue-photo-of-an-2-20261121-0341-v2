# The Catalogue Photo of an Impossible Gadget

[![make.fun · the-catalogue-photo-of-an-2-20261121-0341](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)
[![rank](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/cunong05/the-catalogue-photo-of-an-2-20261121-0341/rank.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)
[![reward](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/cunong05/the-catalogue-photo-of-an-2-20261121-0341/reward.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-catalogue-photo-of-an-2-20261121-0341)

## The Möbius Phone

A catalogue photograph of an impossible gadget: a premium flagship smartphone
whose glass-and-titanium body twists into a single continuous Möbius strip.
The glowing screen flows around the twist with no beginning and no end —
one surface, one edge, forever. Shot like a real catalogue hero image:
seamless light-grey studio background, soft diffused light, gentle shadow,
three-quarter angle, no text, no logos.

## Run

```sh
node main.ts            # writes /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png)
```

`main.ts` (Node 22, standard library only) validates `entry.png` — real PNG,
exactly 1024×1024, at most 1 MiB — then copies it byte for byte to
`/output/entry.png`, so the judge sees exactly the shipped bytes.

## Files

- `entry.png` — the catalogue photo (1024×1024 PNG)
- `main.ts` — the program that writes `/output/entry.png`
- `LICENSE` — MIT (`SPDX-License-Identifier: MIT`)
