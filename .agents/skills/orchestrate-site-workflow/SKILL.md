---
name: orchestrate-site-workflow
description: Use when maintaining this personal GitHub Pages knowledge site, coordinating note formatting, note suggestions, frontend updates, release checks, or requests to organize notes, check the site, prepare a release, or improve the home page.
---

# Personal Site Workflow Orchestrator

Use this skill to choose the smallest useful workflow for `DaranDeng.github.io`.

## Core Rule

The user owns the knowledge content. Do not replace their learning notes with AI-generated filler. Unless explicitly approved, AI may organize, suggest, check, and maintain, but must not directly expand the body of notes.

## Routing

| User request | Use |
| --- | --- |
| "整理这篇笔记", "统一 Markdown", "补 front matter" | `maintain-knowledge-notes` |
| "只提建议", "这篇还缺什么", "图示/例子建议" | `suggest-note-improvements` |
| "优化首页", "导航", "文章页", "阅读体验", "设计系统" | `maintain-site-experience` |
| "检查网站", "准备发布", "这次更新有没有问题" | `review-site-release` |

If a request spans multiple roles, run them in this order:

1. Structure or site edit role.
2. Suggestion role if content feedback is requested.
3. Release review role after any file edits.

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
