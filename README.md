# crypto-dash-ui
[Vite](https://vitejs.dev/) + [Vue 3](https://vuejs.org/guide/introduction.html) + TypeScript

## Create template
``npm create vite@latest crypto-dash-ui -- --template vue-ts``

``cd crypto-dash-ui``

``npm i && npm run dev``

The template uses [Vue 3](https://vuejs.org/guide/introduction.html) `<script setup>` [SFCs (script setup docs)](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup). More info on the recommended Project Setup and IDE Support can be found in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Recommended Approach
- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur
- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.
- [Multi-Page App](https://vitejs.dev/guide/build#multi-page-app)

## Run UI
You can specify additional CLI options, such as ``--port`` or ``--open``. For a full list of CLI options, run ``npx vite --help`` in your project.

### Run app with Dev env config
``npm run dev`` or ``npx run dev`` 

The site will launch at: ``http://localhost:5173/``

### Run app with Build env config
``npm run build`` or ``npx run build`` 

By default, it uses ``<root>/index.html`` as the build entry point, and produces an application bundle that is suitable to be served over a static hosting service. Check out the [Deploying a Static Site](https://vitejs.dev/guide/static-deploy.html) for guides about popular services.

### Run app as preview
After you've built the app, you may test it locally by running npm run preview command: ``npm run preview`` or ``npx run preview``. This will boot up a local static web server that serves the files from ``dist`` at ``http://localhost:4173``.

## Deployment
- [Use Vite to deploy to GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Cloudflare Pages](https://vitejs.dev/guide/static-deploy.html#cloudflare-pages)