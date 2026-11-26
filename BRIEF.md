# Roast Gadget v2 — Brief

## The v2 line (133 characters, single line)

> My robot vacuum has mapped my entire apartment, yet every day it wedges itself under the same chair like it is surprised to be there.

## Why it beats v1

V1 roasted a smartwatch congratulating the wearer for standing up ("like I just
climbed Everest"). That is a solid gag, but the Everest comparison is a
well-worn shape — praise for a trivial act — and the smartwatch-standing joke
is one of the most common smartwatch complaints in the field.

V2 switches gadget entirely (robot vacuum, not smartwatch) and builds the joke
on a sharper contradiction that is specific to how the thing actually behaves:
the vacuum is smart enough to map the whole apartment, yet dumb enough to get
stuck under the *same* chair *every day*. The punchline lands on the final
words — "like it is surprised to be there" — giving the machine a personality
(amnesia + indignation) instead of just restating the complaint. It is one
person's concrete daily gripe, not a generic "my gadget is annoying" line.

## Judge fit (per kit RULES.txt / competition.yaml)

- **Gate:** 133 characters, 1–200, single line, non-whitespace — passes.
- **Criterion 1 (daily gadget):** names the robot vacuum outright, an
  everyday household gadget.
- **Criterion 2 (funny on first read):** the map-vs-stuck contradiction plus
  the "surprised" punchline lands immediately; recognition sting for anyone
  who owns one.
- **Criterion 3 (fresh):** the angle is competence-in-one-axis,
  incompetence-in-another — not the obvious "it bumps into things" complaint.
- **Criterion 4 (neatly worded):** one sentence, tight, no wasted words,
  comfortably inside the cap.
- **Criterion 5 (specific gripe):** "mapped my entire apartment" / "the same
  chair" / "every day" are concrete details of actual behaviour.

## Program

`main.ts` (Node, no deps, no network) reads `entry.txt` next to the script
(`fileURLToPath` + `dirname`, never `process.cwd()`), validates it
(non-empty, single line, ≤ 200 chars) via `validateEntry()`, and writes it
byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`mkdirSync` recursive only,
never `rmSync` on the output dir; throws if the env var is unset).
Deterministic.
