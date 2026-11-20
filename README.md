# GTA 6 Clipper — "GTA 6 || SAD ENDING 🥺" (round 2)

Entry for make.fun's `gta6-clipper-01` bounty: "Clip GTA 6 for the most YouTube views".

## The video

A vertical YouTube Short (9:16) with the concept "GTA 6 || SAD ENDING":

- **Hook:** GTA 6's SAD ENDING — after all the missions and the struggle,
  this is how it ends. The final mission's heartbreaking turn: Jason and
  Lucia gunned down on the bridge, Bonnie-and-Clyde style.
- **The reaction:** a cut to iShowSpeed's stunned face as he watches the
  ending live — jaw on the floor, clutching his chest, only "What?!" —
  the exact shock every gamer felt.
- **The pitch:** viewers can make their own GTA ending on make.fun — free,
  just by typing. The description carries the bounty line, the play code,
  and the referral link.

The video is the entry: places go by its YouTube views, the most first.
Top 20 share $500 USDC.

- Video: https://www.youtube.com/shorts/uCvMX3opi4Y
- Title: GTA 6 || SAD ENDING 🥺
- Channel: joyw (@joywn27)

Round 1 ("BOCORAN GTA 6 VERSI INDONESIA?! Ternyata Gue Yang Bikin!",
https://www.youtube.com/shorts/iLkIMTW-7yE) is replaced by this round 2
entry as the final entry.

## This repository

- `main.ts` — Node 22 program (standard library only). It copies `VIDEO.json`
  from the repository root to `/output/VIDEO.json`, where the gate reads it.
  That is all it has to do.
- `VIDEO.json` — the video's address on YouTube.

## Run locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` then holds the same address as `VIDEO.json` here.

## License

MIT — see `LICENSE`.
