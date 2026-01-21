import {
	type DeepRequired, type ExistsOptions,
	resolveOptions
} from "@exists/config"

export type RuleKey = keyof DeepRequired<ExistsOptions>[ "nonExistent" ]

/**
 * A rule for determining whether a value exists.
 */
export interface Rule {
	/**
	 * Determines whether a value exists.
	 * @param value A potentially non-existent value.
	 * @returns Whether the value exists.
	 */
	exists: ( value: unknown ) => boolean
}

export const Rules: Record<RuleKey, Rule> = {
	undefined: {
		exists: ( value: unknown ) => typeof value !== "undefined"
	},
	null: {
		exists: ( value: unknown ) => value !== null
	},
	false: {
		exists: ( value: unknown ) => !(
			typeof value === "boolean"
			&& value === false
		)
	},
	nan: {
		exists: ( value: unknown ) => !Number.isNaN( value )
	},
	emptyStrings: {
		exists: ( value: unknown ) => !(
			typeof value === "string"
			&& value.length === 0
		)
	},
	emptyArrays: {
		exists: ( value: unknown ) => !(
			Array.isArray( value )
			&& value.length === 0
		)
	},
	emptyObjects: {
		exists: ( value: unknown ) => !(
			typeof value === "object"
			&& value !== null
			&& !Array.isArray( value )
			&& Object.keys( value ).length === 0
		)
	}
}

/**
 * Checks and asserts whether a given value exists.
 * @param value The value to check
 * @returns Whether the value exists
 */

export function exists<T> (
	value: T | null | undefined,
	options?: ExistsOptions
): value is NonNullable<T> {
	const config = resolveOptions( options )
	for ( const [ key, rule ] of Object.entries( Rules ) ) {
		const enabled: boolean = config.nonExistent[ key as RuleKey ]
		if ( !enabled ) continue

		if ( !rule.exists( value ) ) return false
	}

	return true
}
