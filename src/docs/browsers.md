# Browser Compatibility

The web is for everyone, but [support is not the same as optimization](http://bradfrostweb.com/blog/mobile/support-vs-optimization/).

Rather than trying to provide the same level of functionality for older browsers, Kraken uses progressive enhancement to serve a basic experience to all browsers (even Netscape and IE 5). Newer browsers that support modern APIs and techniques get a better layout, more visually attractive elements, and an enhanced experience.

Kraken works in all browsers, but it's optimized for modern browsers and IE 9+.

## Vendor Prefixing

Kraken uses [Autoprefixer](https://github.com/postcss/autoprefixer), and is configured to only add prefixes if required by the last two versions of a browser.

If a feature isn't working (for example, the grid does not work in Firefox 28 and lower), it may simply need a vendor prefix. You can add these manually, or adjust the Autoprefixer settings in `gulpfile.js` if you're working with the source code.

For more details on when support for specific features were added to different browsers, consult [Can I Use](http://caniuse.com/).