---
name: review-site-release
description: Use when checking this personal GitHub Pages knowledge site before publishing or after edits, including MkDocs build risk, GitHub Pages workflow risk, Markdown front matter, broken links, image paths, Chinese mojibake, CSS or layout regressions, and git status.
---

# Review Site Release

Use this skill as the local release gate for `DaranDeng.github.io`.

## Release Review Goals

Find problems before publishing without reverting user work.

## Checks

Run the checks that are available in the local environment:

1. `git status --short`
2. Search for mojibake symptoms in changed text: `閿沗, `閳, `锟絗, `娑揱, `缁擿
3. Check Markdown front matter for new or edited notes.
4. Check local image references exist.
5. Check internal links that are easy to verify.
6. Check `mkdocs.yml` syntax and whether `nav` targets exist.
7. Run `mkdocs build --strict` if the dependencies are available.
8. Check `requirements.txt` for pinned MkDocs dependencies and plugins.
9. Inspect `.github/workflows/deploy.yml` for Pages permissions, artifact upload, and single-path deployment.
10. If a browser/dev server is available and the change is visual, inspect the affected page.

If a check cannot run, say why and classify the remaining risk.

## PowerShell Snippets

Find suspicious encoding text:

```powershell
rg "閿泑閳锟絴娑搢缁? -n .
```

List changed files:

```powershell
git status --short
```

Try MkDocs build:

```powershell
mkdocs build --strict
```

Inspect workflow:

```powershell
Get-Content -Raw .github/workflows/deploy.yml
```

## Risk Classification

- `blocked`: build fails, missing critical file, broken template, workflow permission issue, or severe encoding issue in a touched page.
- `warning`: build not run, unchecked visual change, likely stale links, dependency drift, or minor formatting issue.
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

## Trigger Phrases

Use this skill when the user says:

- `检查这次发布有没有问题`
- `帮我看这次 MkDocs 部署会不会失败`
- `先按发布门禁检查一下仓库`
- `检查 workflow 和 mkdocs.yml 有没有风险`
- `只检查，不改正文`
- `只看部署风险`
- `只看 mkdocs.yml、链接和 workflow`
