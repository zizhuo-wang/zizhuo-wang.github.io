## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# Project Overview

Build a polished personal academic homepage for Zizhuo Wang, a robotics and AI researcher.

The website should combine:

- the information efficiency of an academic homepage;
- the visual quality of a premium editorial portfolio;
- strong presentation of robotics research videos and project media;
- a clean, restrained, and technically credible visual identity.

The site should not look like a generic academic template, SaaS landing page, or cyberpunk portfolio.

# Technology Stack

- Astro
- TypeScript
- Tailwind CSS 4
- Static site generation
- GitHub Pages deployment

Avoid adding React, Vue, Svelte, or other client-side frameworks unless a feature genuinely requires them.

Avoid unnecessary dependencies.

# Information Architecture

Main navigation:

- Home
- Research
- Publications
- About
- CV

Homepage sections:

1. Header
2. Hero
3. Selected Research
4. Research Vision
5. Selected Publications
6. Recent News
7. Short Biography
8. Footer

# Visual Direction

Use an editorial robotics minimalism style.

The visual identity should feel:

- rigorous;
- modern;
- elegant;
- research-oriented;
- spacious;
- technically sophisticated;
- understated rather than flashy.

Use:

- warm off-white page background;
- near-black primary text;
- restrained secondary gray text;
- one blue accent color;
- large and clear typography;
- generous whitespace;
- strong alignment;
- high-quality project images and videos;
- minimal borders;
- very subtle or no shadows.

Avoid:

- generic grids of small cards;
- gradient text;
- glassmorphism;
- excessive rounded pills;
- cyberpunk styling;
- neon colors;
- decorative particle effects;
- large background gradients;
- excessive animations;
- typewriter animations;
- emojis in academic content;
- generic stock illustrations.

# Design Tokens

Use approximately:

- maximum page width: 1180px;
- long-form text width: 720px;
- body font size: 17px;
- project media border radius: 14px;
- desktop section spacing: 120px to 144px;
- mobile section spacing: 72px to 88px.

Use a consistent spacing scale throughout the site.

# Typography

Use a modern sans-serif font stack.

Typography should have a clear hierarchy:

- prominent hero title;
- strong section headings;
- readable body text;
- restrained metadata;
- consistent publication and project typography.

Do not use too many font sizes or font weights.

# Responsive Design

The site must be deliberately designed for:

- 375px mobile;
- 768px tablet;
- 1440px desktop.

Do not merely shrink the desktop layout.

On mobile:

- stack multi-column sections;
- preserve comfortable spacing;
- keep navigation usable;
- avoid horizontal overflow;
- ensure project media remains prominent;
- maintain readable text sizes.

# Accessibility

- Use semantic HTML.
- Add meaningful alt text to all informative images.
- Maintain sufficient color contrast.
- Preserve visible keyboard focus states.
- Support keyboard navigation.
- Respect prefers-reduced-motion.
- Do not rely on color alone to communicate meaning.
- Use descriptive link text.

# Content and Data Architecture

Keep repeated content separate from layout components.

Store project, publication, and news data in typed TypeScript data files.

Suggested files:

- src/data/projects.ts
- src/data/publications.ts
- src/data/news.ts

Do not hard-code the same publication or project information in multiple pages.

Use reusable Astro components for repeated layouts.

# Project Media

The website should support:

- WebP or AVIF images;
- muted looping WebM or MP4 project videos;
- poster images for videos;
- external links for full-length videos;
- local PDF files for papers and CV.

Avoid embedding very large raw MOV files.

Videos should:

- be muted;
- use playsinline;
- have poster images;
- avoid aggressive autoplay behavior;
- respect reduced-motion preferences.

# Engineering Rules

- Keep components focused and reusable.
- Prefer Astro components over client-side JavaScript.
- Use TypeScript types for structured data.
- Do not edit generated files inside dist/.
- Do not commit node_modules/.
- Do not introduce dependencies without a clear justification.
- Use descriptive file, component, variable, and class names.
- Avoid duplicated CSS and duplicated content.
- Keep global styles limited to design tokens, typography, resets, and shared utilities.
- Preserve the existing working build.

# Workflow

Before making changes:

1. inspect the existing repository;
2. understand the current component and page structure;
3. read this AGENTS.md file;
4. avoid overwriting useful existing work without reason.

After meaningful changes:

1. run npm run build;
2. inspect build errors and warnings;
3. check for broken imports and links;
4. review mobile responsiveness;
5. summarize the files changed;
6. mention any placeholders that still need real content.

Do not claim completion if the production build fails.