---
name: maintain-site-experience
description: Use when improving this personal knowledge site's frontend, information architecture, design system, navigation, landing page, article layout, responsive behavior, or reading experience.
---

# Maintain Site Experience

Use this skill for site-level changes in `DaranDeng.github.io`.

## Site Context

This is a Jekyll/GitHub Pages personal knowledge site. Important files include:

- `_config.yml`
- `index.html`
- `_layouts/default.html`
- `css/variables.css`
- `css/design-system.css`
- `DESIGN_SYSTEM.md`
- Subject folders such as `OS`, `Computer Architecture`, `OOAD`, and `data-structure-and-algorithm`

## Design Constraints

- Respect `DESIGN_SYSTEM.md`.
- Prioritize reading, scanning, and learning continuity.
- Keep the first screen useful, not purely decorative.
- Avoid marketing-page patterns unless the user explicitly asks for a portfolio landing page.
- Keep article pages calm, navigable, and code-friendly.
- Check mobile behavior for navigation and long headings.

## Workflow

1. Inspect the current layout, CSS, and affected pages.
2. Identify the smallest change that improves the requested experience.
3. Explain the intended edit before changing files.
4. Edit only site-level files needed for the request.
5. Run `review-site-release` checks after edits.

## Common Improvements

- Add or improve a course/topic index.
- Improve previous/next navigation labels.
- Fix unreadable spacing or code block overflow.
- Improve homepage path into notes.
- Make article headings and tables easier to scan.
- Repair mojibake in UI strings.

## Final Response

Report:

- Files changed.
- UX issue addressed.
- Verification performed.
- Remaining design risks.
