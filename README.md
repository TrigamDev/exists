# Exists

[![GitHub License](https://img.shields.io/github/license/TrigamDev/exists?style=for-the-badge)](./LICENSE.md)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://dsc.gg/trigam-den)

A very simple library for checking and asserting whether a value exists.

## Overview

Provides two utility methods for handling potentially non-existent values:
- `exists( value )`
- `orDefault( value, fallback )`

Each will assert whether the value exists, so Typescript's type checking will report the type accurately.

## Installation

> [!WARNING]
> I'm working on getting this published to npm, so these won't work for the time being.

### npm

```
npm install @trigam/exists
```

### Bun

```
bun add @trigam/exists
```

## Usage

### `exists`

```ts
import { exists } from "@trigam/exists"

const foo: string | null | undefined = /* Potentially non-existent value */

if ( exists( foo ) ) {
	// Here, `foo` is treated as type `string`
	console.log( foo.toUpperCase() ) // All good
} else {
	// Here, `foo` is treated as type `null | undefined`
	console.log( foo.toUpperCase() ) // ! 'foo' is possibly 'null' or 'undefined'.
}
```

### `orDefault`

```ts
import { orDefault } from "@trigam/exists"

const foo: string | null | undefined = /* Potentially non-existent value */

// If `foo` exists, this will print `foo.toUpperCase()`
// If not, this will print `HELLO, WORLD!`
console.log( orDefault( foo, "Hello, world!" ).toUpperCase() ) // All good
```

## Configuration

Both of these functions accept a configuration object to control their behavior.

```ts
{
	nonExistent?: {
		undefined?: boolean 	// default: true
		null?: boolean 			// default: true
		false?: boolean			// default: false
		nan?: boolean			// default: false
		emptyStrings?: boolean	// default: false
		emptyArrays?: boolean	// default: false
		emptyObjects?: boolean	// default: false
	}
}
```

### `nonExistent.undefined`

Returns `false` if the given value is `undefined`.

#### Example

```ts
import { orDefault } from "@trigam/exists"

console.log( exists(
	undefined,
	{ nonExistent: { undefined: true } }
) )
// false

console.log( exists(
	undefined,
	{ nonExistent: { undefined: false } }
) )
// true
```

### `nonExistent.null`

Returns `false` if the given value is `null`.

#### Example

```ts
import { orDefault } from "@trigam/exists"

console.log( exists(
	null,
	{ nonExistent: { null: true } }
) )
// false

console.log( exists(
	null,
	{ nonExistent: { null: false } }
) )
// true
```

### `nonExistent.false`

Returns `false` if the given value is a boolean with a value of `false`.

This only applies to booleans, falsy values that aren't booleans will still be considered to exist.

#### Example

```ts
import { orDefault } from "@trigam/exists"

console.log( exists(
	false,
	{ nonExistent: { false: true } }
) )
// false

console.log( exists(
	false,
	{ nonExistent: { false: false } }
) )
// true



// Falsy values

console.log( exists(
	null,
	{ nonExistent: { false: true, null: false } }
) )
// true

console.log( exists(
	undefined,
	{ nonExistent: { false: true, undefined: false } }
) )
// true

console.log( exists(
	NaN,
	{ nonExistent: { false: true, nan: false } }
) )
// true

console.log( exists(
	0,
	{ nonExistent: { false: true } }
) )
// true

console.log( exists(
	-0,
	{ nonExistent: { false: true } }
) )
// true

console.log( exists(
	0n,
	{ nonExistent: { false: true } }
) )
// true

console.log( exists(
	"",
	{ nonExistent: { false: true } }
) )
// true
```

### `nonExistent.nan`

Returns `false` if the given value is a number with the value of `NaN`.

#### Example

```ts
import { orDefault } from "@trigam/exists"

console.log( exists(
	NaN,
	{ nonExistent: { nan: true } }
) )
// false

console.log( exists(
	NaN,
	{ nonExistent: { nan: false } }
) )
// true
```

### `nonExistent.emptyStrings`

Returns `false` if the given value is an empty string.

#### Example

```ts
import { orDefault } from "@trigam/exists"

console.log( exists(
	"",
	{ nonExistent: { emptyStrings: true } }
) )
// false

console.log( exists(
	"",
	{ nonExistent: { emptyStrings: false } }
) )
// true
```

### `nonExistent.emptyArrays`

Returns `false` if the given value is an empty array.

#### Example

```ts
import { orDefault } from "@trigam/exists"

console.log( exists(
	[],
	{ nonExistent: { emptyArrays: true } }
) )
// false

console.log( exists(
	[],
	{ nonExistent: { emptyArrays: false } }
) )
// true
```

Tip: Use `exists()` to first filter the array of non-existent values first.

```ts
import { orDefault } from "@trigam/exists"

const array: any[] = [ undefined, null ]

// Correctly filters out non-existent values
console.log( exists(
	array.filter( ( element: any ) => {
		return exists( element )
	} ),
	{ nonExistent: { emptyArrays: false } }
) )
// false

// Incorrect, without filtering
console.log( exists(
	array,
	{ nonExistent: { emptyArrays: false } }
) )
// true
```

### `nonExistent.emptyObjects`

Returns `false` if the given value is an object with no keys.

#### Example

```ts
import { orDefault } from "@trigam/exists"

console.log( exists(
	{},
	{ nonExistent: { emptyObjects: true } }
) )
// false

console.log( exists(
	{},
	{ nonExistent: { emptyObjects: false } }
) )
// true
```

## Help
If you don't understand something, need help, or just have some questions, come ask me on my [Discord server](https://dsc.gg/trigam-den).
