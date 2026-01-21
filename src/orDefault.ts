import { ExistsOptions } from "@exists/config"
import { exists } from "@exists/exists"

/**
 * Returns the input if it exists, otherwise returns a fallback value.
 * @param value The input value to (potentially) return back
 * @param fallback A fallback value to return if `input` doesn't exist.
 * @returns The input if it exists, otherwise the fallback value
 */
export function orDefault<T> (
	value: T | null | undefined,
	fallback: NonNullable<T>,
	options?: ExistsOptions
): NonNullable<T> {
	return exists( value, options ) ? value : fallback
}
