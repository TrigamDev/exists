# [Commit Convention](#commit-convention)

This is based on [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

A majority of this commit convention is enforced by [commitlint](https://commitlint.js.org/).

[Commit Message Editor](https://github.com/bendera/vscode-commit-message-editor) can also be used to help write compliant commit messages.

## [Contents](#contents)

- [Message Format](#message-format)
	- [Header](#header)
		- [Type](#type)
		- [Scopes](#scopes)
		- [Breaking Change](#breaking-change)
		- [Subject](#subject)
	- [Body](#body)
	- [Footer](#footer)
		- [Breaking Changes](#breaking-changes)
		- [Closed Issues](#closed-issues)
- [Examples](#examples)
- [Attribution](#attribution)

## [Message Format](#message-format)

Commit messages must be structured as follows:

<pre>
<b><a href="#type">&lt;type&gt;</a></b>(<b><a href="#scopes">&lt;scope(s)&gt;</a></b>): <b><a href="#subject">&lt;subject&gt;</a></b>
<sub>Blank line as separator</sub>
<b><a href="#body">&lt;body&gt;</a></b>
<sub>Blank line as separator</sub>
<b><a href="#footer">&lt;footer(s)&gt;</a></b>
</pre>

### [Header](#header)

The `header` is the first line of the commit message and is the primary section. It's what is immediately visible, and contains the essential information of the commit in a concise, at-a-glance format

- The header is **required**, though some parts are optional.
- The header must be in lower case.
- The header *should* be no shorter than 16 characters, but this is just a recommendation, not a requirement.
- The header must be no longer than 72 characters.

#### [Type](#type)

The `type` must indicate the type of change the commit makes.

- The type is **required**.
- The type must be in lower case.
- The type must be a one-word noun (singular or plural).
- The type must be shortened as long as it's still unambiguous.
- The type must be no shorter than 3 characters.
- The type must be no longer than 16 characters.

The type must be one of the following:

| Type           | Description                                                                                             |
|----------------|---------------------------------------------------------------------------------------------------------|
| `feat`         | Commits that add, change, or remove features.                                                           |
| `fix`          | Commits that fix a bug or an issue.                                                                     |
| `refactor`     | Commits that rewrite or restructure code without altering behavior.                                     |
| `perf`         | Commits that improve performance without altering behavior.                                             |
| `translations` | Commits that affect translations.                                                                       |
| `tests`        | Commits that affect tests.                                                                              |
| `build`        | Commits that affect build-related components, such as build tools, dependencies, etc.                   |
| `ops`          | Commits that affect operational aspects, such as infrastructure, deployment, CI/CD pipelines, etc.      |
| `chore`        | Commits that represent basic maintenance and tasks, such as initial commit, `.gitignore` changes, etc. |
| `merge`        | Commits that merge multiple branches.                                                                   |
| `revert`       | Commits that revert previous commits.                                                                   |
| `docs`         | Commits that affect documentation.                                                                      |

If the `type` is `revert`:
- The header should be that of the commit being reverted.
- The body should be `This reverts commit <hash>.`, where `hash` is the SHA hash of the commit being reverted.

#### [Scopes](#scopes)

The `scopes` provide additional context to the commit.

- The scopes are **optional**.
- The scopes must be in lower case.
- Scopes may include spaces and be multiple words.
- The scopes must be surrounded by parentheses.
- Do not use issue identifiers as the scopes.
- If using multiple scopes, they must be formatted in a comma and space-delimited list.
- The scopes section, collectively, must be no longer than 32 characters (not including the parentheses).

#### [Breaking Change](#breaking-change)

A commit that introduces a breaking change must be indicated by a `!` following the type and scopes. Breaking changes should be described in the [footer](#breaking-changes), if the [subject](#subject) isn't sufficiently informative.

#### [Subject](#subject)

The `subject` contains a concise description of the change being made.

- The subject is **required**.
- The subject must be in lower case.
- The subject should be longer than 5 characters, but this is just a recommendation, not a requirement.
- The subject must be no longer than 50 characters.
- The subject must use the imperative, present tense of verbs.
	- Think of "This commit will..." or "This commit should...".
	- ```
	  ✅ change this to that
	  ✅ replace instances of "foo" with "bar"

	  ❌ changed this to that
	  ❌ replaces instances of "foo" with "bar"
	  ```
- Don't end the subject with punctuation.
	- ```
	  ✅ change this to that

	  ❌ change this to that.
	  ❌ replace instances of "foo" with "bar"?
	  ❌ add test for baz...
	  ```

### [Body](#body)

The `body` is an optional, extended description of the changes being made, and should include the motivation for the change and contrast the new behavior with old behavior.

- The body is **optional**.
- The body should be in sentence case and end with a period.
- Lines in the body should be no longer than 72 characters. If a line exceeds this length, it should be split between multiple lines.

### [Footer](#footer)

The `footer` should contain any information about [breaking changes](#breaking-change) and references to issues that this commit closes.

#### [Breaking Changes](#breaking-changes)

[Breaking changes](#breaking-change) must be indicated with a `BREAKING:` indicator.

If the commit only makes one [breaking change](#breaking-change), it must be described on the same line as the indicator, with a space separating it from the indicator.

If multiple [breaking changes](#breaking-change) are made by the commit, they must be formatted as an unordered list, starting on the line beneath the indicator.

- Breaking changes must be in lower case.
- Breaking changes must not end with punctuation.
- Lines should be no longer than 72 characters.

#### [Closed Issues](#closed-issues)

Closed issues must be indicated with the `Closes:` indicator, followed by a space and the issue references formatted in a comma and space-delimited list.

- Aside from commas separating issue references, closed issues must not use punctuation.
- Lines should be no longer than 72 characters. If a line exceeds this length, it should be split between multiple lines. The subsequent lines should not be indented.

## [Examples](#examples)

```
feat: add really cool feature
```

```
fix(api): fix edge case where the server would explode

Fixing this because we've lost 3 servers just this week, this is kinda important.
Servers should no longer explode now.

Closes: #37, #42
```

```
feat!(api, security): remove execute sql endpoint

Having an open, unsecured endpoint for executing database queries maybe isn't the best idea for security.

BREAKING: execute sql endpoint no longer exists
```

```
fix: prevent process from running out of memory after several minutes

This error occurred due to a recursive function missing a base case.

BREAKING:
- the process running out of memory can no longer be used as a timer
- xkcd 1172
Closes: #84
```

```
refactor: improve types
```

```
perf: optimize search sql query

Searching should be much faster now due to a more simple, optimized SQL query.
```

```
translations(toki pona): add toki pona translations
```

```
tests(api): add test for edge case that would cause the server to explode
```

```
build(release): bump version to v1.0.0
```

```
ops(ci): fix typo in workflow name
```

## [Attribution](#attribution)

This commit convention is adapted from:
- [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
- [qoomon/conventional-commits-cheatsheet.md](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
- [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)
- [discord.js's commit convention](https://github.com/discordjs/discord.js/blob/main/.github/COMMIT_CONVENTION.md)