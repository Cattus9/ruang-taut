# Ruang Taut

Public-facing link curation website built with Next.js App Router, TypeScript, Tailwind CSS v4, and shadcn/ui (Base UI).

## Run

```bash
npm install
npm run dev
```

- `/`: visitor-oriented landing page.
- `/catalog`: searchable public catalog with URL-based category and featured filters, grid/list views, and mobile category sheet.
- `npm run lint`: application ESLint checks; installed skill sources are excluded.
- `npm run build`: production build and TypeScript checks.

## Architecture

```text
src/domain/          Entities and repository interface, no framework dependencies
src/application/     Catalog query and filtering use cases
src/infrastructure/  Sample repository; replace with database adapter later
src/components/      Presentation, composed from shadcn/ui primitives
src/app/             Next.js routes and composition root
src/config/          Site identity and navigation
```

Colors, surfaces, spacing roles, typography, radii, and motion tokens live in `src/app/globals.css`. Standard shadcn semantic tokens (`background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `accent`, `border`, `input`, `ring`, and `sidebar-*`) map into Tailwind via `@theme inline`. Raw palette values belong only in the token definitions, not JSX. Tailwind's preflight provides normalization.

Categories and saved links live in `src/infrastructure/catalog/seed-repository.ts`; counts derive from these records. The sample repository is intentionally static. Runtime category editing, link CRUD, authentication, metadata fetching, imports, and database persistence are not implemented in this landing-page phase. Do not deploy management features without authorization checks.

The working name, six categories, eight sample resources, descriptions, and original typographic link covers should be confirmed before launch. Covers are editorial artwork, not screenshots or official assets of the linked websites. No stock photos or third-party media are used.

## Design workflow

The requested `design-taste-frontend` skill is installed in `.agents/skills/design-taste-frontend`. Use it for every UI iteration. Design sheets and browser inspection artifacts are in `.taste-skill/`.

Direction: **The page is the object**, seed `2122114774`; catalog: **True-black flat**, seed `1894119857`. The page interprets scattered bookmarks as an orange index sheet over a discovery wall. No direction redraws. Search is the primary live interaction.

Production build and ESLint pass. Browser inspection ran at 1440, 768, and 390px. The automated taste gate is **not fully passing**: it flags the overlapping decorative cover wall, imagery minimum, card heuristics, and shared-font mapping. These are tracked design debt, not passing checks. A full interaction test suite and final visual approval are still required.
