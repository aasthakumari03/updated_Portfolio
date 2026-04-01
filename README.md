## Core Design & Performance Guidelines

To ensure the portfolio remains high-performance and visually consistent, the following "Always Intact" principles have been implemented:

### 🚀 High-Performance Motion
- **Optimized Rendering**: The `WovenLightHero` component uses a zero-allocation animation loop (8,000 particles) with squared-distance math to maintain 60FPS on all devices.
- **LERP Interactivity**: All mouse-following effects (spotlights, tilts) use **Linear Interpolation (LERP)** and **Spring Physics**. Do not replace these with instant transitions as it will degrade the premium feel.
- **Fluid Easing**: Standardized global easing is set to `var(--ease-expo)` (`cubic-bezier(0.23, 1, 0.32, 1)`).

### 🌑 Strictly Enforced Dark Mode
- **Zero-Flash Architecture**: The project uses a blocking inline script and CSS in `layout.tsx` to force dark mode before the first paint.
- **Theme Lock**: The `html` tag is hardcoded with `className="dark"` and `colorScheme: 'dark'`.
- **No Light Trait Overrides**: Avoid using `dark:` classes for light-mode colors (e.g., `dark:bg-white`). The site is strictly dark; base classes should always be dark-themed.

### 🖱️ Tactical Interactivity
- **Custom Cursor**: The cursor is sized at **16px-72px** with a refined blur/glow.
- **Magnetic Components**: Interactive elements (Navbar, Socials, Buttons) use the `Magnetic` component with a `strength` of **0.1-0.2** for a tactile experience.

