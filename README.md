# GTA 6 Clipper — "BOCORAN GTA 6 VERSI INDONESIA?! Ternyata Gue Yang Bikin!"

Entry for make.fun's `gta6-clipper-01` bounty: "Clip GTA 6 for the most YouTube views".

## The video

A 32-second vertical YouTube Short (9:16, 1080x1920) with the concept
"BOCORAN GTA 6 VERSI INDONESIA — GUE YANG BIKIN":

- **Hook (0–3s):** "ASTAGA! Ini bocoran GTA 6 versi Indonesia?!" — Jakarta at
  night, neon, a police car chasing a motorbike, shaky camera, big text
  "GTA 6 BOCOR?!"
- **The moment (3–10s):** GTA-style scenes — a bakso cart vendor, an angkot,
  Jakarta traffic, people running, game HUD (mini-map, HP bar, money).
- **The reveal (10–24s):** phone screen typing a prompt in make.fun, the game
  instantly playable, a character walking through Jakarta. Voiceover:
  "Ini bukan GTA 6 asli bang. Ini gue bikin sendiri di make.fun!"
- **The pitch (24–32s):** big text for 5 full seconds:
  "BUAT GAME LU DI MAKE.FUN" + the make.fun logo. "Lu juga bisa! Ketik ide
  lu, jadi game. Gratis di make.fun. Link di bio!"

The video is the entry: places go by its YouTube views, the most first.
Top 20 share $500 USDC.

- Video: https://www.youtube.com/shorts/iLkIMTW-7yE
- Title: BOCORAN GTA 6 VERSI INDONESIA?! Ternyata Gue Yang Bikin!

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
