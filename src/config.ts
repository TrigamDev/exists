export type DeepRequired<T> = Required<{
	[K in keyof T]: T[ K ] extends Required<T[ K ]>
		? T[ K ]
		: DeepRequired<T[ K ]>
}>

//

export interface ExistsOptions {
	/**
	 * Defines what is considered to be non-existent
	 */
	nonExistent?: {
		undefined?: boolean
		null?: boolean
		false?: boolean
		nan?: boolean
		emptyStrings?: boolean
		emptyArrays?: boolean
		emptyObjects?: boolean
	}
}

//

export type NonExistentPreset = DeepRequired<ExistsOptions>[ "nonExistent" ]

export const presets: Record<"lenient" | "strict", NonExistentPreset> = {
	lenient: {
		undefined: true,
		null: true,
		false: false,
		nan: false,
		emptyStrings: false,
		emptyArrays: false,
		emptyObjects: false
	},
	strict: {
		undefined: true,
		null: true,
		false: true,
		nan: true,
		emptyStrings: true,
		emptyArrays: true,
		emptyObjects: true
	}
}

export const defaultPreset: DeepRequired<ExistsOptions>[ "nonExistent" ] = presets.lenient

export function resolveOptions (
	options?: ExistsOptions
): DeepRequired<ExistsOptions> {
	const nonExistent: NonExistentPreset = {
		... defaultPreset,
		... options?.nonExistent
	}

	return {
		nonExistent
	}
}
