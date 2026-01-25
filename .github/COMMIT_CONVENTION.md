# Commit Convention

This is based on [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

A majority of this commit convention is enforced by [commitlint](https://commitlint.js.org/).

## Message Format

Commit messages should be structured as follows:

<pre>
<b><a href="#type">&lt;type&gt;</a></b>(<b><a href="#scope">&lt;scope&gt;</a></b>): <b><a href="#subject">&lt;subject&gt;</a></b>
<sub>Blank line as separator</sub>
<b><a href="#body">&lt;body&gt;</a></b>
<sub>Blank line as separator</sub>
<b><a href="#footer">&lt;footer(s)&gt;</a></b>
</pre>

### Type

The `type` should indicate the type of change the commit makes.
- The type is **required**.
- Should be a lowercase, single-word noun.

#### Types

- `feat`: Commits that add, change, or remove features.
- `fix`: Commits that fix a bug or an issue.
- `refactor`: Commits that rewrite or restructure code without altering behavior.
- `perf`: Type of `refactor` that specifically improves performance.
- `translations`: Commits that affect translations.
- `tests`: Commits that affect tests.
- `build`: Commits that affect build-related components, such as build tools, dependencies, etc.
- `ops`: Commits that affect operational aspects, such as infrastructure, deployment, CI/CD pipelines, etc.
- `chore`: Commits that represent basic maintainance and tasks, such as initial commit, `.gitignore` changes, etc.
- `merge`: Commits that merge multiple branches.
- `revert`: Commits that revert previous commits.
	- The header should be that of the commit being reverted.
	- The body should be `This reverts commit <hash>.`, where `hash` is the SHA hash of the commit being reverted.
- `docs`: Commits that affect documentation.

### Scope

The `scope` provides additional context to the commit.

- The scope is **optional**.
- Should be lower case and surrounded by parentheses.
- If using multiple scopes, they should be in a comma-delimited list.
- Do not use issue identifiers as the scope.

### Breaking Change

A commit that introduces a breaking change must be indicated by a `!` following the type and scope. Breaking changes should be described in the [footer](#footer), if the [subject](#subject) isn't sufficiently informative.

### Subject

The `subject` contains a concise description of the change being made.

- The subject is **required**.
- Should be lower case.
- Don't capitalize the first letter.
- Use the imperative, present tense of verbs.
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

### Body

The `body` should include the motivation for the change and contrast the new behavior with old behavior.

- The body is **optional**.
- Should be in sentence case and end with a period.
- Similar to the [subject](#subject), use the imperative, present tense of verbs.

### Footer

The `footer` should contain any information about [breaking changes](#breaking-change) and references to issues that this commit closes.

- [Breaking changes](#breaking-change) should indicated with the `BREAKING:` indicator, followed by either a space or a newline.
- Closed issues should be indicated with the `closes:`, followed by a space and a comma-delimited list of issue references.

## Examples

```
feat: add really cool feature
```

```
fix(api): fix edge case where the server would explode

Fixing this because we've lost 3 servers just this week, this is kinda important.
Servers should no longer explode now.

closes: #37, #42
```

```
feat!(api): remove execute sql endpoint

Having an open, unsecured endpoint for executing database queries maybe isn't the best idea for security.

BREAKING: execute sql endpoint no longer exists
```

```
fix: prevent process from running out of memory after several minutes

This error occurred due to a recursive function missing a base case.

closes: #84
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

## Attribution

This commit convention is adapted from:
- [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
- [qoomon/conventional-commits-cheatsheet.md](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
- [discord.js's commit convention](https://github.com/discordjs/discord.js/blob/main/.github/COMMIT_CONVENTION.md) (and, by extension, [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))