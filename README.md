<div align="center">

# Exists

<!-- NPM info -->
[![NPM Version][npm-version-badge]][npm]
[![NPM Downloads][npm-downloads-badge]][npm-downloads]
[![Install Size][install-size-badge]][install-size]

[![GitHub License][github-license-badge]][github-license]
[![Discord][discord-badge]][discord]

</div>

## About

A very simple library for checking and asserting whether a value exists.

## Overview

Provides two utility methods for handling potentially non-existent values:
- [`exists( value )`](#exists-1)
- [`orDefault( value, fallback )`](#ordefault)

Each will assert whether the value exists, so Typescript's type checking will report the type accurately.

## Contents

- [Installation](#installation)
- [Features](#features)
- [Configuration](#configuration)
- [FAQ](#faq)
- [Help](#help)

## Installation

### Package Manager

Using [npm](https://nodejs.org/en):

```
npm install @trigam/exists
```

Using [Yarn](https://yarnpkg.com/):

```
yarn add @trigam/exists
```

Using [pnpm](https://pnpm.io/):

```
pnpm add @trigam/exists
```

Using [Deno](https://deno.com/):

```
deno add npm:@trigam/exists
```

Using [Bun](https://bun.sh/):

```
bun add @trigam/exists
```

## Features

### `exists()`

Returns a boolean of whether the given value exists or not, and if it does, asserts that the value exists.

<details>
<summary><strong>Example</strong></summary>

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
</details>

### `orDefault()`

Returns the given value if it exists. If it doesn't exist, it instead returns the provided fallback value.

<details>
<summary><strong>Example</strong></summary>

```ts
import { orDefault } from "@trigam/exists"

const foo: string | null | undefined = /* Potentially non-existent value */

// If `foo` exists, this will print `foo.toUpperCase()`
// If not, this will print `HELLO, WORLD!`
console.log( orDefault( foo, "Hello, world!" ).toUpperCase() ) // All good
```
</details>

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

<details>
<summary><strong>Example</strong></summary>

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
</details>

### `nonExistent.null`

Returns `false` if the given value is `null`.

<details>
<summary><strong>Example</strong></summary>

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
</details>

### `nonExistent.false`

Returns `false` if the given value is a boolean with a value of `false`.

This only applies to booleans, falsy values that aren't booleans will still be considered to exist.

<details>
<summary><strong>Example</strong></summary>

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
</details>

### `nonExistent.nan`

Returns `false` if the given value is a number with the value of `NaN`.

<details>
<summary><strong>Example</strong></summary>

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
</details>

### `nonExistent.emptyStrings`

Returns `false` if the given value is an empty string.

<details>
<summary><strong>Example</strong></summary>

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
</details>

### `nonExistent.emptyArrays`

Returns `false` if the given value is an empty array.

<details>
<summary><strong>Example</strong></summary>

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
</details>

> [!TIP]
>
> Tip: Use `exists()` to first filter the array of non-existent values first.
>
> <details>
> <summary><strong>Example</strong></summary>
>
> ```ts
> import { orDefault } from "@trigam/exists"
>
> const array: any[] = [ undefined, null ]
>
> // Correctly filters out non-existent values
> console.log( exists(
> 	array.filter( ( element: any ) => {
> 		return exists( element )
> 	} ),
> 	{ nonExistent: { emptyArrays: false } }
> ) )
> // false
>
> // Incorrect, without filtering
> console.log( exists(
> 	array,
> 	{ nonExistent: { emptyArrays: false } }
> ) )
> // true
> ```
> </details>

### `nonExistent.emptyObjects`

Returns `false` if the given value is an object with no keys.

<details>
<summary><strong>Example</strong></summary>

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
</details>

## FAQ

### ... why does this exist? Couldn't you just easily do this yourself?

In complete honesty, I mostly just published this cause I'm tired of copy+pasting the same utility script into all my projects. Hopefully this also proves helpful to others, though.

## Help
If you don't understand something, need help, or just have some questions, come ask me on my [Discord server](https://dsc.gg/trigam-den).

<!-- Definitions -->

[npm-version-badge]: https://img.shields.io/npm/v/%40trigam%2Fexists?style=for-the-badge

[npm]: https://www.npmjs.com/package/@trigam/exists

[npm-downloads-badge]: https://img.shields.io/npm/dy/%40trigam%2Fexists?style=for-the-badge

[npm-downloads]: https://npm-stat.com/charts.html?package=@trigam/exists

[install-size-badge]: https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@trigam/exists&query=$.install.pretty&label=install%20size&style=for-the-badge

[install-size]: https://packagephobia.now.sh/result?p=@trigam/exists

[github-license-badge]: https://img.shields.io/github/license/TrigamDev/exists?style=for-the-badge

[github-license]: https://github.com/TrigamDev/exists/blob/main/LICENSE.md

[discord-badge]: https://img.shields.io/discord/1050241893088366612?style=for-the-badge&logo=discord&logoColor=e0e3ff&label=Discord&color=5865F2

[discord]: https://dsc.gg/trigam-den
