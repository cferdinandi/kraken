# File Structure

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code. Compiled documentation is in the `docs` directory. Unit tests are located in the `test` directory.

```
kraken
|—— dist/
|   |—— css/
|   |   |—— main.css
|   |   |—— main.min.css
|   |—— fonts/
|   |   |—— # Your icon font files
|   |—— img/
|   |   |—— # Your image files
|   |—— js/
|   |   |—— detects.js
|   |   |—— detects.min.js
|   |   |—— main.js
|   |   |—— main.min.js
|   |—— svg/
|   |   |—— icons.svg
|—— docs/
|   |—— assets/
|   |   |—— # Your documentation assets
|   |—— dist/
|   |   |—— # Your distribution files
|   |—— img/
|   |   |—— # Your image files
|   |—— index.html
|   |—— # Your documentation files
|—— src/
|   |—— docs/
|   |   |—— _templates
|   |   |   |—— _header.html
|   |   |   |—— _footer.html
|   |   |   |—— # Your template files
|   |   |—— assets
|   |   |   |—— # Your documentation assets
|   |   |—— index.html
|   |   |—— # Your documentation files
|   |—— js/
|   |   |—— detects
|   |   |   |—— font-face.js
|   |   |   |—— svg.js
|   |   |   |—— # Your feature detection scripts
|   |   |—— main
|   |   |   |—— kraken.js
|   |   |   |—— # Your JavaScript plugins
|   |—— sass/
|   |   |—— components/
|   |   |   |—— _buttons.scss
|   |   |   |—— _code.scss
|   |   |   |—— _forms.scss
|   |   |   |—— _grid.scss
|   |   |   |—— _iconfonts.scss
|   |   |   |—— _overrides.scss
|   |   |   |—— _print.scss
|   |   |   |—— _reset.scss
|   |   |   |—— _svg.scss
|   |   |   |—— _typography.scss
|   |   |—— _config.scss
|   |   |—— _mixins.scss
|   |   |—— main.scss
|   |—— static/
|   |   |—— fonts/
|   |   |   |—— # Your font files
|   |   |—— img/
|   |   |   |—— # Your images
|   |   |—— # Your non-compiling files
|—— test/
|   |—— coverage/
|   |   |—— # various files
|   |—— results/
|   |   |—— unit-tests.html
|   |—— spec/
|   |   |—— spec-myplugin.js
|   |   |—— # Your Jasmine JS unit tests
|—— .travis.yml
|—— README.md
|—— gulpfile.js
|—— package.json
```