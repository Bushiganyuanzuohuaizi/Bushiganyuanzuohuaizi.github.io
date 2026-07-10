---
name: orchestrate-site-workflow
description: Use when maintaining this personal GitHub Pages knowledge site, coordinating note formatting, note suggestions, frontend updates, release checks, or requests to organize notes, check the site, prepare a release, or improve the home page.
---

# Personal Site Workflow Orchestrator

Use this skill to choose the smallest useful workflow for `DaranDeng.github.io`.

## Core Rule

The user owns the knowledge content. Do not replace their learning notes with AI-generated filler. Unless explicitly approved, AI may organize, suggest, check, and maintain, but must not directly expand the body of notes.

## Routing

Use `maintain-knowledge-notes` when the request is about:

- normalizing Markdown
- front matter
- titles, headings, lists, tables, links, or code blocks
- organizing an individual note without changing the site shell

Use `suggest-note-improvements` when the request is about:

- suggestions only
- examples, diagrams, titles, or missing context
- feedback without editing the note body

Use `maintain-site-experience` when the request is about:

- homepage, navigation, reading flow, layout, or design
- site structure, theme, CSS, or visual polish
- improving the experience of browsing the site

Use `review-site-release` when the request is about:

- `检查这次发布有没有问题`
- `帮我看这次 MkDocs 部署会不会失败`
- `先按发布门禁检查一下仓库`
- `检查 workflow 和 mkdocs.yml 有没有风险`
- `准备发布`
- `部署失败`
- `build fail`
- `Pages`
- `mkdocs.yml`
- `requirements.txt`
- `.github/workflows/deploy.yml`
- broken links, image paths, or encoding issues before publishing

If a request spans multiple roles, run them in this order:

1. Structure or site edit role.
2. Suggestion role if content feedback is requested.
3. Release review role after any file edits, or immediately if the request is about publishing/build risk.

## Interaction Pattern

1. Inspect relevant files before acting.
2. State which role is being used and why.
3. Preserve uncommitted user changes outside the requested scope.
4. For note tasks, separate actual edits from suggestions.
5. For site tasks, verify after editing.

## Default Boundaries

Allowed:

- Edit workflow docs, site layout, CSS, config, metadata, and Markdown structure when requested.
- Provide concise content suggestions.
- Run local validation commands.

Requires explicit approval:

- Rewrite note body paragraphs.
- Add long AI-authored sections.
- Delete user notes, images, or code.
- Reorganize many directories at once.

## Output Style

For note work, report:

- What structure changed.
- Suggestions for the user to consider.
- Checks run.

For release work, report:

- `Status: pass | warning | blocked`
- Blockers first.
- Warnings second.
- Suggested next actions.

