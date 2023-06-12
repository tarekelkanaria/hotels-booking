# Hotels Booking

### A Front End web app for hotels reservations using Vue.js Framework and Vite as a build tool.

## Demo Preview

[Link to the demo](https://elkanaria-hotels-booking.netlify.app/)

## project setup

- You can run `npm install` to setup the project
- `npm start` to open the project in _the development server on your default browser automatically_ **just if you prefer**
- `npm run build` to build the project for production
- `npm run preview` to view the project in the production environment after build script.

## Requirements

- [x] The web page displays a list of hotels and each one has a _name_, _an address_, _a rating_, and _a button_ to book it.
- [x] when the user clicks the `Book` button, a form will display so the user can enter his _name_, _email_, and _phone number_.
- [x] when the user submits the form, a **thanks message** will display for the user
      saying
  > Thank you for booking with us.
- [x] if the user wants to book another hotel a **welcome message** will display to confirm the booking and then a **thanks message** will display again.
- [x] the web provides **cart functionality** so the user can **_see_** all his bookings and **_cancel_** the booking he wants.

## Used languages and tools

- Vue.js Framework with Vite as build tool
- Typescript
- Pinia
- Vue Router
- Sass
- Vue Material Design Icons
- Autoprefixer

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
