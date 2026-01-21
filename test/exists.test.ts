import { expect, test, describe } from "bun:test"
import { exists } from "@exists/exists"

describe( "exists( undefined )", () => {
	test( "undefined doesn't exist by default", () => {
		expect(
			exists( undefined )
		).toBe( false )
	})

	test( "undefined doesn't exist when nonExistent.undefined = true", () => {
		expect(
			exists(
				undefined,
				{ nonExistent: { undefined: true } }
			)
		).toBe( false )
	})

	test( "undefined exists when nonExistent.undefined = false", () => {
		expect(
			exists(
				undefined,
				{ nonExistent: { undefined: false } }
			)
		).toBe( true )
	})

})

describe( "exists( null )", () => {
	test( "null doesn't exist by default", () => {
		expect(
			exists( null )
		).toBe( false )
	})

	test( "null doesn't exist when nonExistent.null = true", () => {
		expect(
			exists(
				null,
				{ nonExistent: { null: true } }
			)
		).toBe( false )
	})

	test( "null exists when nonExistent.null = false", () => {
		expect(
			exists(
				null,
				{ nonExistent: { null: false } }
			)
		).toBe( true )
	})
})

describe( "exists( false )", () => {
	test( "false exists by default", () => {
		expect(
			exists( false )
		).toBe( true )
	})

	test( "false doesn't exist when nonExistent.false = true", () => {
		expect(
			exists(
				false,
				{ nonExistent: { false: true } }
			)
		).toBe( false )
	})

	test( "false exists when nonExistent.false = false", () => {
		expect(
			exists(
				false,
				{ nonExistent: { false: false } }
			)
		).toBe( true )
	})

	// Ensure falsy values aren't caught by nonExistent.false = true
	test( "null exists when nonExistent.false = true", () => {
		expect(
			exists(
				null,
				{ nonExistent: { false: true, null: false } }
			)
		).toBe( true )
	})

	test( "undefined exists when nonExistent.false = true", () => {
		expect(
			exists(
				undefined,
				{ nonExistent: { false: true, undefined: false } }
			)
		).toBe( true )
	})

	test( "NaN exists when nonExistent.false = true", () => {
		expect(
			exists(
				NaN,
				{ nonExistent: { false: true, nan: false } }
			)
		).toBe( true )
	})

	test( "0 exists when nonExistent.false = true", () => {
		expect(
			exists(
				0,
				{ nonExistent: { false: true } }
			)
		).toBe( true )
	})

	test( "-0 exists when nonExistent.false = true", () => {
		expect(
			exists(
				-0,
				{ nonExistent: { false: true } }
			)
		).toBe( true )
	})

	test( "0n exists when nonExistent.false = true", () => {
		expect(
			exists(
				0n,
				{ nonExistent: { false: true } }
			)
		).toBe( true )
	})

	test( `"" exists when nonExistent.false = true`, () => {
		expect(
			exists(
				"",
				{ nonExistent: { false: true, emptyStrings: false } }
			)
		).toBe( true )
	})
})

describe( "exists( nan )", () => {
	test( "NaN exists by default", () => {
		expect(
			exists( NaN )
		).toBe( true )
	})

	test( "NaN doesn't exist when nonExistent.nan = true", () => {
		expect(
			exists(
				NaN,
				{ nonExistent: { nan: true } }
			)
		).toBe( false )
	})

	test( "NaN exists when nonExistent.nan = false", () => {
		expect(
			exists(
				NaN,
				{ nonExistent: { nan: false } }
			)
		).toBe( true )
	})
})

describe( "exists( empty string )", () => {
	test( `"" exists by default`, () => {
		expect(
			exists( "" )
		).toBe( true )
	})

	test( `"" doesn't exist when nonExistent.emptyStrings = true`, () => {
		expect(
			exists(
				"",
				{ nonExistent: { emptyStrings: true } }
			)
		).toBe( false )
	})

	test( `"" exists when nonExistent.emptyStrings = false`, () => {
		expect(
			exists(
				"",
				{ nonExistent: { emptyStrings: false } }
			)
		).toBe( true )
	})
})

describe( "exists( empty array )", () => {
	test( "[] exists by default", () => {
		expect(
			exists( [] )
		).toBe( true )
	})

	test( "[] doesn't exist when nonExistent.emptyArrays = true", () => {
		expect(
			exists(
				[],
				{ nonExistent: { emptyArrays: true } }
			)
		).toBe( false )
	})

	test( "[] exists when nonExistent.emptyArrays = false", () => {
		expect(
			exists(
				[],
				{ nonExistent: { emptyArrays: false } }
			)
		).toBe( true )
	})
})

describe( "exists( empty object )", () => {
	test( "{} exists by default", () => {
		expect(
			exists( {} )
		).toBe( true )
	})

	test( "{} doesn't exist when nonExistent.emptyObjects = true", () => {
		expect(
			exists(
				{},
				{ nonExistent: { emptyObjects: true } }
			)
		).toBe( false )
	})

	test( "{} exists when nonExistent.emptyObjects = false", () => {
		expect(
			exists(
				{},
				{ nonExistent: { emptyObjects: false } }
			)
		).toBe( true )
	})
})
