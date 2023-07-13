# Lodgify-FE Technical Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

It's recommended that you have a recent version of Node: v18.16 (LTS) or higher installed. To check your Node version run `node -v` in terminal.

In case you don't have Node installed, or if you need to upgrade, consider using [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm).

## Getting Started

Requirements for starting the project

`Node`

`yarn`

`Typescript`

First, install dependencies

```bash
yarn install
```

## Libraries

- Styled Components (https://styled-components.com/)
- Axios (https://yarnpkg.com/package/axios)
- Iconify (https://iconify.design/docs/icon-components/react/) (http://icon-sets.iconify.design/fluent/)
- TanstackQuery (https://tanstack.com/query/latest)

## Extensions

- ESLint
- Prettier-Code formater
- vscode-styled-components

`Then`

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Styling the project

The project uses `Styled Components` and has `Theme` under theme.ts.
Anything that will be used cross whole project needs to be implemented inside the `Theme`, example: colors, fonts, sizes, forms, buttons variants, etc..

## Creating files/folders

`Generic components` should be created under `/src/components`. Example: Progress.tsx, Checkbox.tsx, etc.

`Features` should be created under `src/features`. Any components dedicated only for a single feature should be created under `src/features/{name of the feature}/components`. Every feature should be its own `page`

`Hooks` any custom hooks that are gonna be used cross whole project should be created under `src/hooks`

`Services` any API call should be created under `src/service`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
