---
name: review-site-release
description: Use when checking this personal GitHub Pages knowledge site before publishing or after edits, including Jekyll build risk, Markdown front matter, broken links, image paths, Chinese mojibake, CSS or layout regressions, and git status.
---

# Review Site Release

Use this skill as the local release gate for `DaranDeng.github.io`.

## Release Review Goals

Find problems before publishing without reverting user work.

## Checks

Run the checks that are available in the local environment:

1. `git status --short`
2. Search for mojibake symptoms in changed text: `锛`, `鈥`, `�`, `涓`, `绔`
3. Check Markdown front matter for new or edited notes.
4. Check local image references exist.
5. Check internal links that are easy to verify.
6. Run Jekyll build if dependencies are available: `bundle exec jekyll build`
7. If a browser/dev server is available and the change is visual, inspect the affected page.

If a check cannot run, say why and classify the remaining risk.

## PowerShell Snippets

Find suspicious encoding text:

```powershell
rg "锛|鈥|�|涓|绔" -n .
```

List changed files:

```powershell
git status --short
```

Try Jekyll build:

```powershell
bundle exec jekyll build
```

## Risk Classification

- `blocked`: build fails, missing critical file, broken template, severe encoding issue in touched page.
- `warning`: build not run, unchecked visual change, likely stale links, minor formatting issue.
- `pass`: relevant checks ran and no material issues were found.

## Report Format

```text
Status: pass | warning | blocked
Changed areas:
- ...

Blockers:
- ...

Warnings:
- ...

Suggested next actions:
- ...
```

Never hide skipped checks. Skipped verification is a warning unless the task is documentation-only and unaffected by runtime behavior.
