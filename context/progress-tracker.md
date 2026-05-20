# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Complete

## Current Goal

- Feature spec 03 (TBD — check `context/feature-specs/`)

## Completed

- **Feature spec 01: Design System**
  - Installed and configured shadcn/ui (v4.7.0) with Tailwind v4
  - Installed lucide-react
  - Added components: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea (all in `components/ui/`)
  - Created `lib/utils.ts` with `cn()` helper (clsx + tailwind-merge)
  - Added full dark theme CSS custom properties to `globals.css` (project tokens + shadcn semantic tokens)
  - `npm run build` passes — all components import without errors

- **Feature spec 02: Editor Chrome**
  - Created `components/editor/editor-navbar.tsx` — fixed-height top navbar (h-12, z-40) with sidebar toggle using `PanelLeftOpen`/`PanelLeftClose` icons; accepts `isSidebarOpen` + `onToggleSidebar` props
  - Created `components/editor/project-sidebar.tsx` — floating overlay sidebar (z-30, fixed, does not push content); slides in/out via `translate-x` transition; accepts `isOpen` + `onClose` props; has Projects header, My Projects / Shared tabs with empty placeholder states, and full-width New Project button at bottom
  - Created `components/editor/editor-dialog.tsx` — reusable dialog shell using project tokens (`bg-bg-elevated`, `text-text-primary`, `text-text-muted`, `rounded-3xl`); accepts `title`, `description`, `footer`, `children`, `open`, `onOpenChange`; ready for future dialog implementations
  - `npm run build` passes — no TypeScript or lint errors

## In Progress

- None.

## Next Up

- Feature spec 03 (TBD — check `context/feature-specs/`)

## Open Questions

- None at this stage.

## Architecture Decisions

- Using Tailwind CSS v4 (`@import "tailwindcss"`) — CSS variables defined in `globals.css` under `@theme inline`, no `tailwind.config.js`.
- Dark-only theme: all shadcn semantic tokens (`--background`, `--foreground`, etc.) are set directly in `:root` to dark values. No `.dark` class toggling needed.
- shadcn/ui components live in `components/ui/` and must not be modified after generation.
- `lib/utils.ts` is the canonical source for `cn()` — all components reference it via `@/lib/utils`.

## Session Notes

- Project stack: Next.js 16.2.6, React 19.2.4, Tailwind v4, TypeScript strict mode.
- Font variables: `--font-geist-sans` and `--font-geist-mono` (set in `app/layout.tsx`, referenced in `globals.css` `@theme inline`).
- `components.json` is the shadcn configuration file at project root.
