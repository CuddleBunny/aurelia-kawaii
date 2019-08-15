# Aurelia Kawaii

[Aurelia Kawaii](https://cuddlebunny.github.io/aurelia-kawaii/) is a fork of [React Kawaii](https://github.com/miukimiu/react-kawaii): cute SVG illustrations as custom elements. Ideal if you want to give some cuteness and personality to your Aurelia application.

# Install

With npm:

```
npm install --save aurelia-kawaii
```

With yarn:

```
yarn add aurelia-kawaii
```

How to use:

```js
aurelia.use.plugin('aurelia-kawaii');
```

```html
<kawaii-planet size={200} mood="blissful" color="#FDA7DC"></kawaii-planet>
```

# Development

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

This Aurelia plugin project has a built-in dev app (with CLI built-in bundler and RequireJS) to simplify development.

1. The local `src/` folder, is the source code for the plugin.
2. The local `dev-app/` folder, is the code for the dev app, just like a normal app bootstrapped by aurelia-cli.
3. You can use normal `au run` and `au test` in development just like developing an app.
4. You can use aurelia-testing to test your plugin, just like developing an app.
5. To ensure compatibility to other apps, always use `PLATFORM.moduleName()` wrapper in files inside `src/`. You don't need to use the wrapper in `dev-app/` folder as CLI built-in bundler supports module name without the wrapper.

## Build Plugin

Run `au build-plugin`. This will transpile all files from `src/` folder to `dist/native-modules/` and `dist/commonjs/`.

For example, `src/index.ts` will become `dist/native-modules/index.js` and `dist/commonjs/index.js`.

Note all other files in `dev-app/` folder are for the dev app, they would not appear in the published npm package.

## Run dev app

Run `au run`, then open `http://localhost:9000`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.


