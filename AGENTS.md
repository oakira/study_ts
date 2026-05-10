# Repository Guidelines

## Project Structure & Module Organization

This repository is a TypeScript study project. Keep application or exercise source
under `src/` and place reusable helpers close to the code that uses them. Put tests
under `tests/` or beside the implementation as `*.test.ts` when that keeps the
example easier to follow. Store static assets, fixtures, or sample input under
`assets/` or `fixtures/` rather than mixing them into source directories.

## Build, Test, and Development Commands

Use the package manager already established by the repository lockfile. Common
commands are:

- `npm install`: install dependencies from `package-lock.json`.
- `npm run build`: compile TypeScript and report type errors.
- `npm test`: run the configured test suite.
- `npm run dev`: start the local development or watch workflow, if defined.

If a script is missing, inspect `package.json` before adding a new tool or command.

## Coding Style & Naming Conventions

Write TypeScript with clear types at module boundaries and avoid `any` unless the
unknown shape is validated before use. Prefer small functions, direct control flow,
and readable names over clever compression. Use `camelCase` for variables and
functions, `PascalCase` for classes and types, and `UPPER_SNAKE_CASE` only for true
constants. Keep formatting consistent with the repository formatter; if no formatter
is configured, use two-space indentation and keep lines under 100 characters.

## Testing Guidelines

Add focused tests for behavior changes and bug fixes. Name test files after the unit
or workflow they cover, for example `parser.test.ts` or `user-service.test.ts`.
Prefer deterministic fixtures and avoid tests that depend on network access, local
machine state, or execution order. Run `npm test` before submitting changes, and run
`npm run build` when touching types or exported APIs.

## Commit & Pull Request Guidelines

Keep commits small and use imperative messages such as `Add parser tests` or
`Fix date formatting edge case`. Pull requests should explain the change, include
the verification performed, and link related issues when applicable. Include
screenshots or terminal output when the change affects visible UI or command output.

## Agent-Specific Instructions

Make minimal, scoped edits and preserve existing project conventions. Do not install
new tools, change lockfiles, or introduce broad refactors unless the task explicitly
requires it. If verification cannot be run locally, state the blocker clearly.
