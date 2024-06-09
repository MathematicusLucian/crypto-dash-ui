# crypto-dash-ui
Vite + Vue + TS

## Create template
``npm create vite@latest crypto-dash-ui -- --template vue-ts``

``cd crypto-dash-ui``

``npm i && npm run dev``

The template uses Vue 3 `<script setup>` [SFCs (script setup docs)](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup). More info on the recommended Project Setup and IDE Support can be found in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Recommended Approach
- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur
- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Run UI

### Run app with Dev env config
``npm run dev``

The site will launch at: ``http://localhost:5173/``