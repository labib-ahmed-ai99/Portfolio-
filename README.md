# Labib Ahmed — Bilingual Personal Portfolio

A complete, bilingual (**English & বাংলা**) personal portfolio website for **Labib Ahmed**, an aspiring AI & Machine Learning Engineer and Grade 11 Science student from Bangladesh.

## Features

- **Full Bilingual Experience (`EN / বাংলা`)**: Every heading, navigation item, project card, modal, form validation message, and footer link translates dynamically and persists in `localStorage`.
- **9 Complete Sections**: Home, About Me, Education, Skills & Learning, Projects, Achievements, Interests & Languages, Goals & Future Vision, and Contact.
- **Interactive Projects Browser**: Filter projects by status or technology (`All`, `Completed`, `In Progress`, `Python`, `HTML`) and inspect each project in a keyboard-accessible modal.
- **Honest & Authentic Framing**: Beginner skills, unlinked projects, speaking/listening-only language skills, and future goals are labeled transparently without inflated claims or fake percentages.
- **Privacy-First Validated Contact Form**: Keeps private email addresses out of public markup, validates all inputs cleanly, and supports **Formspree** or **EmailJS** via environment variables.
- **Accessibility & Motion**: Semantic HTML, skip-to-content link, visible focus rings, WCAG AA dark-navy contrast, and `prefers-reduced-motion` support.

## Project Structure

- `index.html` — SEO metadata, OpenGraph/Twitter tags, Schema.org `Person` JSON-LD, and Google Fonts (`Plus Jakarta Sans`, `DM Sans`, `JetBrains Mono`, `Noto Sans Bengali`, `Hind Siliguri`).
- `src/types/portfolio.ts` — TypeScript definitions for bilingual content and project filters.
- `src/data/portfolioData.ts` — Central, easy-to-edit file holding all English/Bangla copy, profile photo path, projects, education, skills, achievements, learning goals, and social links.
- `src/context/LanguageContext.tsx` — Manages `en` / `bn` state, `<html lang>` synchronization, and `localStorage` persistence.
- `src/components/` — Modular UI sections (`Navbar`, `HeroSection`, `AboutSection`, `EducationSection`, `SkillsSection`, `ProjectsSection`, `ProjectModal`, `AchievementsSection`, `InterestsGoalsSection`, `ContactSection`, `Footer`).

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Customization Guide

### 1. Adding a New Project
Open `src/data/portfolioData.ts` and find the `PROJECTS` array. Add a new object following this template:

```ts
{
  id: 'my-new-project',
  title: { en: 'My New Project', bn: 'আমার নতুন প্রকল্প' },
  category: 'python', // 'python' | 'html'
  status: 'completed', // 'completed' | 'in-progress'
  technologies: ['Python', 'CLI'],
  summary: { en: 'Short English summary.', bn: 'সংক্ষিপ্ত বাংলা বিবরণ।' },
  details: { en: 'Longer modal description.', bn: 'বিস্তারিত বিবরণ।' },
  learningFocus: { en: 'What you practiced.', bn: 'যা অনুশীলন করা হয়েছে।' },
  githubUrl: 'https://github.com/labib-ahmed-ai99/your-repo', // optional
  liveUrl: 'https://your-demo-url.com', // optional
  imageUrl: '/images/project-preview.png', // optional
}
```

### 2. Updating Achievements
Open `src/data/portfolioData.ts` and edit or append an entry inside the `ACHIEVEMENTS` array with `year`, `title`, `context`, and `summary` in both `en` and `bn`.

### 3. Replacing the Profile Picture Placeholder
1. Place your photo inside `public/images/profile.jpg` (create `public/images/` if it does not exist yet).
2. Open `src/data/portfolioData.ts` and update:
   ```ts
   export const PROFILE_IMAGE_URL: string | null = '/images/profile.jpg';
   ```

### 4. Configuring the Contact Form (Formspree or EmailJS)
Copy `.env.example` to `.env` (for local development) or add the variables in your hosting provider's dashboard:

- **Option A — Formspree (Recommended)**:
  1. Sign in at [formspree.io](https://formspree.io) and create a new form linked to your private email address.
  2. Set `VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id"` in `.env`.
- **Option B — EmailJS**:
  1. Create an email service and template at [emailjs.com](https://www.emailjs.com).
  2. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in `.env`.

## Deploying to Vercel or Netlify

### Vercel
1. Push your repository to GitHub.
2. Import the project in [vercel.com](https://vercel.com).
3. Framework preset: **Vite** (`npm run build`, output directory `dist`).
4. Add your `VITE_FORMSPREE_ENDPOINT` (or `VITE_EMAILJS_*`) environment variables in Project Settings, then deploy.

### Netlify
1. Push your repository to GitHub.
2. Create a new site from Git in [netlify.com](https://www.netlify.com).
3. Build command: `npm run build` · Publish directory: `dist`.
4. Add your `VITE_FORMSPREE_ENDPOINT` (or `VITE_EMAILJS_*`) environment variables under Site Settings -> Environment Variables, then deploy.
