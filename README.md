# Aitazaz Study — Robotics & AI Trail

A private 20-day guided path through artificial intelligence, robotics foundations, modern reasoning models, and mental models for **Aitazaz**.

Each day is designed as a structured **30-minute session**:
- ⏱️ **Part 1: Core AI & Robotics Concept** (10 mins)
- 🧠 **Part 2: How to Learn & Engineering Wisdom** (6 mins)
- 🛠️ **Part 3: 8-Minute Build & Hands-on Lab** (8 mins)
- 🎯 **Part 4: Interactive Knowledge Check** (6 mins)

The app features a friendly companion **Robot** that guides Aitazaz through each milestone.

---

## Access & Security

- **Gate Password (`SITE_PASSWORD`)**: `bunty` (Required to initialize terminal and enter the trail).
- **Finale Password (`FINALE_PASSWORD`)**: `oapnaytuheeha` (The secret access key that unlocks the final Robotics Workshop).
- **Learner Name (`LEARNER_NAME`)**: `Aitazaz`

---

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the trail.

---

## 20-Day Curriculum Overview

1. **Day 1: What people mean by AI** · The Feynman Technique
2. **Day 2: Three names, untangled** · First-Principles Thinking
3. **Day 3: Where you already meet it** · Active Recall vs Passive Recognition
4. **Day 4: Fluent is not the same as true** · The Skeptic's Calibration
5. **Day 5: Ask for a real task** · The Power of Clear Specifications
6. **Day 6: What you must not paste** · Information Diet & Threat Modeling
7. **Day 7: What it can actually see** · Working Memory & Cognitive Chunking
8. **Day 8: A link is not proof** · Primary Sources vs Second-Hand Noise
9. **Day 9: Patterns, not magic** · Moravec's Paradox & The Physical World
10. **Day 10: How modern models generate** · Deliberate Practice & Edge of Failure
11. **Day 11: Write an engineering brief** · Problem Framing is 80%
12. **Day 12: You are the editor** · The Discipline of Subtraction
13. **Day 13: Learn one tool properly** · Mastery vs Shiny Object Syndrome
14. **Day 14: How a team expects you to use it** · Extreme Ownership
15. **Day 15: Structured data & telemetry** · Empirical Reality vs Narrative
16. **Day 16: Autonomous steps & agents** · The OODA Loop
17. **Day 17: Answer from a trusted document** · Epistemic Hygiene & Grounding
18. **Day 18: Make one small thing** · The Bias for Action
19. **Day 19: Explain one idea** · Engineering Judgment & Taste
20. **Day 20: Explain your project** · The Compound Effect & Final Defence

---

## Tech Stack

- **Framework**: Next.js 16 (Turbopack, App Router)
- **Styling**: Tailwind CSS v4, custom SVG illustrations (Robot, Circuit nodes, Gear badges)
- **State & Storage**: LocalStorage with optional Supabase cloud sync (`aitazaz` progress row)
- **Interactive Audio**: Web Audio API synthetic chimes
