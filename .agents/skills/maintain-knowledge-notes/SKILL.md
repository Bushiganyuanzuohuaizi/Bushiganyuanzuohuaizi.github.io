---
name: maintain-knowledge-notes
description: Use when formatting user-written Markdown notes for this personal knowledge site, including front matter, headings, code fences, formulas, links, tables, and file naming after the user has drafted a note locally.
---

# Maintain Knowledge Notes

Use this skill after the user has written a local note and wants it prepared for the site.

## Non-Negotiable Content Rule

Preserve the user's thinking. Do not add long explanations, summaries, or new factual content to the note body unless the user explicitly asks for drafting. Prefer comments or a separate suggestion list for content ideas.

## Formatting Checklist

Inspect the target Markdown file and adjust only requested structure:

- YAML front matter: `layout`, `title`, optional `description`, optional `tags`.
- Heading order: one `#` page title only if the local style calls for it; otherwise start sections at `##`.
- Code fences: include language labels such as `cpp`, `java`, `python`, `c`, `bash`, `text`.
- Math: keep inline math as `$...$` and display math as `$$...$$`.
- Links: prefer relative site paths or correct local Markdown links.
- Images: keep existing images; verify referenced paths exist.
- Tables: normalize alignment only when it improves readability.
- Chinese text: watch for mojibake symptoms such as `锛`, `鈥`, `�`, `涓`, `绔`.

## Front Matter Defaults

Use this pattern when a Markdown note lacks front matter:

```yaml
---
layout: default
title: "<human readable title>"
description: "<one sentence based on the user's existing note, or omit>"
---
```

Do not invent a detailed description if the file does not contain enough context.

## Suggested Workflow

1. Read the target file.
2. Identify structural issues.
3. If editing, make minimal structural changes.
4. Put non-structural content ideas in the final response, not in the note.
5. Run a lightweight check such as searching for mojibake and malformed links.

## Final Response

Include:

- Files changed.
- Structural changes made.
- Content suggestions not applied.
- Checks run or checks skipped.
