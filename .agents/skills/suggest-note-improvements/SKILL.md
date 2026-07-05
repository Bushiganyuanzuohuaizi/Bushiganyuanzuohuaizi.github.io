---
name: suggest-note-improvements
description: Use when reviewing user-written learning notes and the user wants suggestions only, including examples, diagrams, titles, front matter, missing context, or revision questions without directly changing the note body.
---

# Suggest Note Improvements

Use this skill when the user wants editorial feedback, not rewriting.

## Boundary

Do not edit the note unless the user explicitly asks. Do not produce a replacement article. Suggestions should help the user improve the note in their own words.

## Review Dimensions

For the target note, look for:

- Concept gaps: definitions, assumptions, or prerequisites that may be unclear.
- Example opportunities: where one small example would make the idea concrete.
- Diagram opportunities: process flow, state transition, memory layout, pipeline, dependency graph, timeline.
- Title and section names: clearer names based on existing content.
- Front matter: title, description, tags, category.
- Source hygiene: where references, textbook chapter names, video links, or problem IDs would help.
- Reader questions: prompts the user can answer to deepen the note.

## Output Format

Use this structure:

```text
Overall impression:

High-value suggestions:
1. ...
2. ...

Optional improvements:
1. ...
2. ...

Suggested front matter:
...

Diagram ideas:
...
```

Keep suggestions concise. Prefer 3-7 high-value items over exhaustive comments.

## What Not To Do

- Do not add generic AI summaries.
- Do not rewrite every paragraph.
- Do not claim the note is wrong without pointing to the exact section and reason.
- Do not introduce unsourced facts as if they were already verified.
