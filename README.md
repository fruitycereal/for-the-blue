# For The Blue 🌊

A youth-led nonprofit initiative dedicated to protecting oceans and the Arctic through education, creativity, technology, and community action.

**Live site:** https://for-the-blue.vercel.app

## What this is

For The Blue's website, built with Next.js, showcasing the nonprofit's mission, campaigns, and ways to get involved — plus **Your Blue Action**, an interactive feature that takes visitors from learning to real-world action:

**Learn → Act → Record → Recognize → Inspire others**

### Your Blue Action features

- **EcoQuest: Save the Coast** — an interactive decision game where players manage a coastal conservation area, balancing Ecosystem Health, Community Wellbeing, and Economy across six real environmental scenarios
- **Real-world action picker** — a list of actions people can take locally, from sharing a resource to organizing a beach cleanup
- **Action submission with photo evidence** — signed-in users log what they did, with photo uploads for actions that need visual proof
- **Manual verification workflow** — submissions are reviewed and marked verified or denied (with a reason) before counting toward the public impact numbers
- **Blue Action credits & recognition tiers** — verified actions earn credits toward digital badges and physical FTB merchandise
- **Live community impact dashboard** — actions, participants, countries represented, and more, pulled directly from verified submissions
- **Evidence collage** — a gallery of real photos from verified actions, shown as social proof

## Tech stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Styling:** Tailwind CSS
- **Backend:** [Supabase](https://supabase.com) — Auth, Postgres database, and Storage (for evidence photos)
- **Hosting:** [Vercel](https://vercel.com)

## Getting started

1. Clone the repo and install dependencies:

   ```bash
   npm install
   ```

2. Create a Supabase project, then run the SQL setup scripts (in order) from the project's setup files against your Supabase SQL Editor to create the `profiles` and `submissions` tables, storage bucket policies, and triggers.

3. Create a `.env.local` file in the project root:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
   ```

4. In your Supabase dashboard, create a public storage bucket named `evidence-photos` (images only, with a reasonable file size limit).

5. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see it running.

## Project structure

```
app/
  page.tsx              — homepage
  blue-action/          — the EcoQuest + action + recognition experience
  login/, signup/        — Supabase auth pages
  forgot-password/, reset-password/  — password recovery flow
  auth/callback/          — Supabase auth redirect handler
components/
  Navbar.tsx             — site navigation, auth-aware
lib/
  supabase/              — Supabase client setup (browser, server, middleware)
  blueActionData.ts       — real-world action list & recognition tiers
  ecoQuestData.ts          — EcoQuest scenarios and scoring
  countries.ts            — country list for signup
```

## About For The Blue

For The Blue was founded by Nunnaphat to empower young people through environmental education and inspire real-world action to protect our oceans and the Arctic. Through education, advocacy, and collective action, For The Blue strives to make protecting our planet something everyone can be part of.

Follow along: [@fortheblue.eco](https://www.instagram.com/fortheblue.eco)
