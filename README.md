<div align="center">

![Contra UI](/logo.png)
## Contra UI
</div>

Contra UI is a component library created by [Vijay Verma](https://vijayverma.co/), all of the design and asset in this project is referenced by it.

- [Storybook](https://contra-ui-core.vercel.app/)
- [Example](https://contra-ui-example.vercel.app/)
- [Figma](https://www.figma.com/community/file/833515051385038928)

## Notes
This project is only experimental, I start this project to learn how to implement UI component using `React` and `Typescript`, there will likely be an article that what I've to learn from this project 🤞.

## Install

```bash
# npm
$ npm install @contra-ui/core styled-components

# yarn
$ yarn add @contra-ui/core styled-components
```

## Setup

Import theme provider, and wrap you app inside `Provider` component

```javascript
import { Provider } from '@contra-ui/core'

function App ({children}) {
	return <Provider>{children}</Provider>
}

```

Now you can start using components like so:

```javascript
import { Button } from '@contra-ui/core'

function Example () {
    return <Button>Hello World!</Button>
}
```

For others component, please check the available component in the [storybook.](https://contra-ui-core.vercel.app/)

## Development

This is a monorepo

- [Core](https://github.com/akbarnafisa/contra-ui/tree/main/packages/contra-ui-core)
- [Example](https://github.com/akbarnafisa/contra-ui/tree/main/packages/example)

### Core

This package is the main UI component, this repo based on `React`, `Typescript`, `Styled-Components`, and `Styled-System` for development, and `Rollup` for the bundler. We also use a Storybook to document the component, you can check it [here.](https://contra-ui-example.vercel.app/)

### Example

This package is the implementation of the UI component, this repo based on Next.js, you can check it [here.](https://contra-ui-example.vercel.app/)
