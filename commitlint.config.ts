import { UserConfig, RuleConfigSeverity as Level } from "@commitlint/types"

const Config: UserConfig = {
	extends: [ "@commitlint/config-conventional" ],
	parserPreset: "conventional-changelog-atom",
	formatter: "@commitlint/format",

	defaultIgnores: false,

	rules: {
		// Header
		"header-case": [ Level.Error, "always", "lower-case" ],
		"header-full-stop": [ Level.Error, "never", "." ],
		"header-min-length": [ Level.Warning, "always", 16 ],
		"header-max-length": [ Level.Error, "always", 72 ],
		"header-trim": [ Level.Error, "always" ],

		"breaking-change-exclamation-mark": [ Level.Disabled ],

		// Type
		"type-case": [ Level.Error, "always", "lower-case" ],
		"type-empty": [ Level.Error, "never" ],
		"type-enum": [ Level.Error, "always", [
			"feat",
			"fix",
			"refactor",
			"perf",
			"translations",
			"tests",
			"build",
			"ops",
			"chore",
			"merge",
			"revert",
			"docs",
		] ],
		"type-min-length": [ Level.Error, "always", 3 ],
		"type-max-length": [ Level.Error, "always", 16 ],

		// Scope
		"scope-case": [ Level.Error, "always", "lower-case" ],
		"scope-delimiter-style": [ Level.Error, "always", [
			", ",
			" "
		] ],
		"scope-empty": [ Level.Disabled ],
		"scope-enum": [ Level.Disabled ],
		"scope-min-length": [ Level.Disabled ],
		"scope-max-length": [ Level.Error, "always", 32 ],

		// Subject
		"subject-case": [ Level.Error, "always", "lower-case" ],
		"subject-empty": [ Level.Error, "never" ],
		"subject-full-stop": [ Level.Error, "never", "." ],
		"subject-min-length": [ Level.Warning, "always", 5 ],
		"subject-max-length": [ Level.Disabled, "always", 50 ],

		// Body
		"body-case": [ Level.Error, "always", "sentence-case" ],
		"body-empty": [ Level.Disabled ],
		"body-full-stop": [ Level.Error, "always", "." ],
		"body-leading-blank": [ Level.Error, "always" ],
		"body-max-line-length": [ Level.Error, "always", 72 ],
		"body-min-length": [ Level.Disabled ],
		"body-max-length": [ Level.Disabled ],

		// Footer
		"footer-empty": [ Level.Disabled ],
		"footer-leading-blank": [ Level.Error, "always" ],
		"footer-max-line-length": [ Level.Error, "always", 72 ],
		"footer-min-length": [ Level.Disabled ],
		"footer-max-length": [ Level.Disabled ],

		"references-empty": [ Level.Disabled ],
		"signed-off-by": [ Level.Disabled ],
		"trailer-exists": [ Level.Disabled ]
	}
}

export default Config