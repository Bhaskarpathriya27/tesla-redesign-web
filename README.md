Project Architecture Overview (Next.js 14)
🧠 Framework & Stack
• Frontend: Next.js 14 (App Router)
• Styling: Tailwind CSS
• Animations: GSAP, Framer Motion, SplitType
• Assets: Optimized images (webp), Lottie for animations
• Folder Structure: Scalable, modular, component-driven

📦 NEO_MOBILITY/
│
├── .next/ # Next.js build output (auto-generated, should be gitignored)
├── node_modules/ # Project dependencies
│
├── public/ # Static files (served as-is)
│ ├── icons/ # All SVG and visual assets
│ └── ... # WebP images, logos, brand assets
│
├── src/ # Main application source
│ ├── app/ # App Router directory (Next.js 14)
│ │ ├── about-us/ # Route: /about-us → About page content
│ │ ├── blog/ # Route: /blog → Blog list and details
│ │ ├── product/ # Route: /product → Product detail/list pages
│ │ ├── technology/ # Route: /technology → EV tech, platform info
│ │ ├── layout.js # Root layout wrapper for global Header/Footer
│ │ └── page.js # Homepage entry point (`/`)
│
├── components/ # Modular UI components (divided by page/domain)
│ ├── about/ # All components related to the About page
│ │ └── (e.g. AboutHero, AboutPillars, AboutTimeline)
│ ├── homepage/ # All components for homepage (Hero, Feature, etc.)
│ ├── layout/ # Navigation, Footer, Mobile menu, etc.
│ ├── ui/ # Generic, reusable UI parts (Buttons, CTA, Banners)
│
├── lib/ # Utility functions, hooks, external API helpers
│ └── (e.g. scroll, animation setup, fetch clients)
│
├── lottie/ # Lottie animation JSON files
│ └── (Used in scroll banners or hero sections)
│
├── styles/ # Global and utility styles
│ └── globals.css # Tailwind base config, resets, or custom classes
│
├── .eslintrc.json # ESLint rules and config
├── .gitignore # Git ignored files
├── components.json # VSCode/extension-specific settings (optional)
├── jsconfig.json # For import path aliases (e.g. @/components)
├── next.config.mjs # Next.js configuration
├── package.json # Project dependencies and scripts
├── postcss.config.js # Tailwind/PostCSS setup
├── tailwind.config.js # Tailwind theme and color customization
├── README.md # Project overview, instructions
