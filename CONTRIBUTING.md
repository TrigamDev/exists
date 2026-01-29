# Contributing

First off, thank you for showing interest in contributing! It means a lot to us and we really appreciate it. Thank you, we mean it. \<3

This manual outlines how to contribute in a way that meets the project’s quality standards.

Contributions of any skill level are welcome, and we’re happy to help with issues, pull requests, and feature ideas.

This project and everyone participating in it are governed by the [Code of Conduct](https://github.com/TrigamDev/exists/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

> [!Tip]
>
> Contributing doesn't exclusively mean writing code and submitting pull requests. There are other ways you can help contribute, such as:
> - Starring the project.
> - Upvoting [issues](https://github.com/TrigamDev/exists/issues) and [discussions](https://github.com/TrigamDev/exists/discussions) you'd like to see more attention on.
> - [Submitting a bug report](#i-want-to-report-a-bug).
> - [Requesting a feature or change](#i-want-to-request-a-feature-or-change).
> - Simply using or sharing the project. The more eyes on the project, the better.

> [!WARNING]
>
> Do **not** "bump" or otherwise interact with issues, discussions, or pull requests solely to get attention on them. This isn't productive and just gets in the way. Instead, upvote them to show that there is a desire for them. These will be used to help prioritize what to work on next.

## Contents

- [Quick Start](#quick-start)
- [I Have a Question](#i-have-a-question)
- [I Want to Report a Bug](#i-want-to-report-a-bug)
	- [Before Submitting a Bug Report](#before-submitting-a-bug-report)
	- [Submitting a Bug Report](#submitting-a-bug-report)
	- [After Submitting a Bug Report](#after-submitting-a-bug-report)
- [I Want to Request a Feature or Change](#i-want-to-request-a-feature-or-change)
	- [Before Requesting a Feature or Change](#before-requesting-a-feature-or-change)
	- [Requesting a Feature or Change](#requesting-a-feature-or-change)
	- [After Requesting a Feature or Change](#after-requesting-a-feature-or-change)
- [I Want to Contribute](#i-want-to-contribute)
	- [Creating a Development Environment](#creating-a-development-environment)
	- [Workflow Checks](#workflow-checks)
		- [ESLint](#eslint)
		- [Test Runner](#test-runner)
	- [Commit Convention](#commit-convention)
	- [Before Making a Pull Request](#before-making-a-pull-request)
	- [Making a Pull Request](#making-a-pull-request)
	- [After Making a Pull Request](#after-making-a-pull-request)
- [Attribution](#attribution)

## Quick Start

New here? Here’s the fastest way to contribute:

1. Check existing [issues](https://github.com/TrigamDev/exists/issues) or [discussions](https://github.com/TrigamDev/exists/discussions).
2. For non-trivial changes, open an issue or discussion first.
3. Fork the repo and create a branch from `main`.
4. Commit your changes and address any [workflow check](#workflow-checks) failures.
5. Open a pull request against `main`.

## I Have a Question

Before asking a question, search for existing [discussions](https://github.com/TrigamDev/exists/discussions) for an answer. This helps keep information centralized and avoids repeating answers. If you find a relevant discussion, but it doesn't entirely answer your question, you can write your question there.

If you can't find a relevant discussion, please start a new one:

- Create a [discussion](https://github.com/TrigamDev/exists/discussions) detailing your question.
- Provide as much relevant context as you can to make it easier to answer your question.
- A contributor will answer your question as soon as possible.

## I Want to Report a Bug

### Before Submitting a Bug Report

A good bug report includes enough detail to be understood and reproduced without follow-up.

- Make sure that you're using the latest version.
- Try searching for existing [issues](https://github.com/TrigamDev/exists/issues) to make sure the bug hasn't already been reported.
- Try to reproduce the bug, and ideally find the minimum steps needed to reproduce the bug.

### Submitting a Bug Report

When submitting a bug report, assume the reader has not encountered the issue before. Make sure to use clear descriptions and concrete examples to ensure the bug can be understood and reproduced.

- Open an [issue](https://github.com/TrigamDev/exists/issues).
- Use a clear and descriptive title for the issue.
- Explain the behavior you're experiencing and compare it to the behavior you expect to occur.
- Provide as much relevant context as possible, including logs and error messages.
- Ideally, provide steps to reproduce the bug and/or a snippet of code that triggers or demonstrates the bug. This isn't required, but helps immensely.

### After Submitting a Bug Report

After submission, bug reports go through triage to determine reproducibility, validity, and priority.

1. We label the issue accordingly.
2. We investigate the bug.
	- If we are unable to reproduce the bug, the issue will be labeled as https://github.com/TrigamDev/exists/labels/status%3A%20needs%20reproduction. We may ask for more context or better reproduction steps if needed. Bugs labeled as https://github.com/TrigamDev/exists/labels/status%3A%20needs%20reproduction won't be addressed until they can be reproduced.
	- If the issue doesn't report an actual bug, it will be relabeled accordingly.
	- If we don't plan on fixing the bug, the issue will be labeled as https://github.com/TrigamDev/exists/labels/status%3A%20not%20planned%2Fwon%27t%20fix.
3. Once the bug is able to be reproduced, we label the issue as https://github.com/TrigamDev/exists/labels/status%3A%20ready%20for%20development. The issue is then open to be implemented by a contributor (which could be you).

## I Want to Request a Feature or Change

If you're not yet ready to request a feature or change, and simply want to discuss or brainstorm it, feel free to instead open a [discussion](https://github.com/TrigamDev/exists/discussions)! There, we can work on it together and make your suggestion the best it can be before it's requested.

### Before Requesting a Feature or Change

Suggestions are evaluated based on their usefulness, scope, and alignment with the project’s goals. Checking beforehand helps keep discussion and work focused.

- Make sure that you're using the latest version.
- Make sure your suggestion isn't already implemented.
- Try searching for existing [issues](https://github.com/TrigamDev/exists/issues) to make sure the suggestion hasn't already been made.

### Requesting a Feature or Change

A good feature request explains the problem being solved, why it matters, and how the proposed change improves the current behavior.

- Open an [issue](https://github.com/TrigamDev/exists/issues).
- Use a clear and descriptive title for the issue.
- Describe the problem being addressed by your suggestion.
- Describe your proposed solution (eg. what your suggestion is).
- Consider and list any current alternatives or workarounds to the problem, and if they are undesirable, explain why.
- Concepts and/or an example implementation can help immensely!

### After Requesting a Feature or Change

After submission, feature requests are reviewed for alignment with the project’s direction.

1. We review the request and label it accordingly.
2. We may ask clarifying questions or suggest adjustments to better align with the project’s goals.
3. We will determine if your suggestion aligns with the project's goals.
	- If the suggestion irrevocably clashes with the project's goals, it may be rejected and we will label the issue as https://github.com/TrigamDev/exists/labels/status%3A%20not%20planned%2Fwon%27t%20fix.
		- If a request is rejected, we will do our best to explain why.
	- If the suggestion is accepted, we will label the issue as https://github.com/TrigamDev/exists/labels/status%3A%20ready%20for%20development. The issue is then open to be implemented by a contributor (which could be you).

## I Want to Contribute

> [!Tip]
>
> **For new contributors**: Take a look at [https://github.com/firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions) for helpful information on contributing. We may also have some issues labeled with https://github.com/TrigamDev/exists/labels/good%20first%20issue that we think are suitable for new contributors.

> [!WARNING]
>
> Unless your contribution is small and self-explanatory (for example, fixing a typo), make a [bug report](#submitting-a-bug-report) or [suggestion](#i-want-to-request-a-feature-or-change) for it first! We don't want you to spend your time working on something that may not be accepted.

> [!CAUTION]
>
> If any of the following are true, your contribution will **not** be accepted:
> - You do not own or have rights to the contribution and it does not have a license compatible with [ours](https://github.com/TrigamDev/exists/blob/main/LICENSE.md).
> - You do not understand and/or cannot explain your contribution.
> - The contribution is primarily or entirely generated by AI tools, AI agents, or other generative AI.

### Creating a Development Environment

To work on the project locally, you’ll need to set up a development environment using the steps below.

1. Install [Bun](https://bun.sh/) if not already installed.
2. Clone the repository:
   ```
   git clone https://github.com/TrigamDev/exists.git
   ```
3. Install the required dependencies:
   ```
   bun install
   ```

### Workflow Checks

To maintain code quality and consistency, this project uses automated checks that run when you commit changes. [Husky](https://github.com/typicode/husky) runs these checks automatically and prevents commits if they fail.

> [!CAUTION]
>
> It is not recommended, but if for whatever reason you need to make a commit with failing checks, you can run:
> ```
> git commit --no-verify
> ```
> Do **not** do this unless you have a good reason to.

#### [ESLint](https://eslint.org/)

This project uses ESLint to help enforce consistent code style and catch common issues early. ESLint uses the [eslint.config.ts](https://github.com/TrigamDev/exists/blob/main/eslint.config.ts) file for its configuration, and has several plugins to add extra linting/formatting rules. If you'd like more info about what rules ESLint uses and how they're configured, make sure to check the config file.

If you'd like to run ESLint manually, run inside the repository's root directory:
```
bun run lint
```
- Some suggestions and errors can automatically be fixed by instead running:
  ```
  bun run lint --fix
  ```

#### [Test Runner](https://bun.com/docs/test)

Automated tests are used to verify that changes behave as expected and don’t introduce regressions.

If you'd like to run the tests manually, run inside the repository's root directory:
```
bun test
```

### Commit Convention

Commit messages should follow the [Commit Convention](https://github.com/TrigamDev/exists/blob/main/COMMIT_CONVENTION.md). TL;DR: stick to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), as that's what our Commit Convention is adapted from. There are some minor differences, however, so we recommend taking a quick look.

> [!TIP]
>
> The majority of the Commit Convention is automatically enforced by [commitlint](https://commitlint.js.org/). commitlint uses the [commitlint.config.ts](https://github.com/TrigamDev/exists/blob/main/commitlint.config.ts) for its configuration, so check it if you'd like more info about its rules and how they're configured.
>
> [Commit Message Editor](https://github.com/bendera/vscode-commit-message-editor) can also be used to help write compliant commit messages, providing a simple form to fill out the commit message.

A commit should have one central "idea" or change it makes. If it can't be summed up with one guiding "idea", that's a good indication the commit is doing too much, and you should consider splitting it into several, smaller, more focused commits.

### Before Making a Pull Request

Before opening a pull request, it’s important to ensure your changes are reviewable, scoped appropriately, and ready for feedback.

1. Fork the repository and create a new branch from `main`.
2. If you’ve fixed a bug or added testable code, adding tests is greatly appreciated. This isn't a requirement, though.
3. Make sure your changes pass all [workflow checks](#workflow-checks).
4. Commit your changes using the [Commit Convention](#commit-convention).
5. Push your branch to your fork.

### Making a Pull Request

> [!NOTE]
>
> Try to keep pull requests focused on a single change or goal. Large or unrelated changes may be requested to be split into multiple pull requests.

- Open a [pull request](https://github.com/TrigamDev/exists/pulls) against the `main` branch.
- Use a clear and descriptive title, ideally following the [Commit Convention](#commit-convention).
- Explain what your pull request does and why.
- Link any relevant [issues](https://github.com/TrigamDev/exists/issues) or [discussions](https://github.com/TrigamDev/exists/discussions).
- If your pull request is still a work in progress and not ready to be pulled, mark it as a draft.

### After Making a Pull Request

After a pull request is opened, it enters the review phase, where maintainers evaluate correctness, scope, and alignment with the project.

1. A maintainer will review your pull request as soon as possible.
2. We may ask questions or request changes to your pull request.
3. If approved, a maintainer will merge the pull request.

## Attribution

This contribution manual is adapted from:
- [CONTRIBUTING.MD Example](https://contributing.md/example/)
- [TagStudioDev/TagStudio/docs/contributing.md](https://github.com/TagStudioDev/TagStudio/blob/main/docs/contributing.md)
- [withastro/astro/CONTRIBUTING.md](https://github.com/withastro/astro/blob/main/CONTRIBUTING.md)
- [slint-ui/slint/CONTRIBUTING.md](https://github.com/slint-ui/slint/blob/master/CONTRIBUTING.md)
- [React How to Contribute](https://legacy.reactjs.org/docs/how-to-contribute.html)