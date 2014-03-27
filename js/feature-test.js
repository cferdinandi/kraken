/* =============================================================

	Feature Test v1.0
	Feature tests for browser support.
	Includes @font-face and pseudo-selector support.

	Licensed under MIT License.
	http://www.opensource.org/licenses/mit-license.php/

 * ============================================================= */

// Function to test for @font-face support
// https://github.com/filamentgroup/face-off
var isFontFaceSupported = (function( win, undefined ) {

	"use strict";

	var doc = document,
		head = doc.head || doc.getElementsByTagName( "head" )[ 0 ] || doc.documentElement,
		style = doc.createElement( "style" ),
		rule = "@font-face { font-family: 'webfont'; src: 'https://'; }",
		supportFontFace = false,
		blacklist = (function() {
			var ua = win.navigator.userAgent.toLowerCase(),
				wkvers = ua.match( /applewebkit\/([0-9]+)/gi ) && parseFloat( RegExp.$1 ),
				webos = ua.match( /w(eb)?osbrowser/gi ),
				wppre8 = ua.indexOf( "windows phone" ) > -1 && win.navigator.userAgent.match( /IEMobile\/([0-9])+/ ) && parseFloat( RegExp.$1 ) >= 9,
				oldandroid = wkvers < 533 && ua.indexOf( "Android 2.1" ) > -1;

			return webos || oldandroid || wppre8;
		}()),
		sheet;

	style.type = "text/css";
	head.insertBefore( style, head.firstChild );
	sheet = style.sheet || style.styleSheet;

	if ( !!sheet && !blacklist ) {
		try {
			sheet.insertRule( rule, 0 );
			supportFontFace = sheet.cssRules[ 0 ].cssText && ( /webfont/i ).test( sheet.cssRules[ 0 ].cssText );
			sheet.deleteRule( sheet.cssRules.length - 1 );
		} catch( e ) { }
	}

	return supportFontFace;
}( this ));

// Function to test for pseudo selector support
// https://gist.github.com/paulirish/441842
var selectorSupported = function (selector) {

	'use strict';

	var support, link, sheet, doc = document,
		root = doc.documentElement,
		head = root.getElementsByTagName('head')[0],

		impl = doc.implementation || {
			hasFeature: function() {
				return false;
			}
		},

	link = doc.createElement("style");
	link.type = 'text/css';

	(head || root).insertBefore(link, (head || root).firstChild);

	sheet = link.sheet || link.styleSheet;

	if (!(sheet && selector)) return false;

	support = impl.hasFeature('CSS2', '') ?

	function(selector) {
		try {
			sheet.insertRule(selector + '{ }', 0);
			sheet.deleteRule(sheet.cssRules.length - 1);
		} catch (e) {
			return false;
		}
		return true;
	} : function(selector) {
		sheet.cssText = selector + ' { }';
		return sheet.cssText.length !== 0 && !(/unknown/i).test(sheet.cssText) && sheet.cssText.indexOf(selector) === 0;
	};

	return support(selector);

};

// If @font-face and pseudo selectors are supported, add '.font-face' class to <html> element
if (isFontFaceSupported && selectorSupported(':before')) {
	document.documentElement.className += (document.documentElement.className ? ' ' : '') + 'font-face';
}