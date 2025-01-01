// ==UserScript==
// @name         Show Channel-Only YouTube Side Recommendations
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Show only unique channel names in recommendations
// @author       iairu
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create and inject styles
    const css = `
        #related ytd-compact-video-renderer {
            position: relative;
            margin-top: 20px;
        }

        #related ytd-compact-video-renderer #thumbnail,
        #related ytd-compact-video-renderer #video-title,
        #related ytd-compact-video-renderer #metadata-line,
        #related ytd-compact-video-renderer #overlays,
        #related ytd-compact-video-renderer #time-status,
        #related ytd-compact-video-renderer #dismissed,
        #related ytd-compact-video-renderer #menu,
        #related ytd-compact-video-renderer ytd-badge-supported-renderer {
            visibility: hidden;
            height: 0 !important;
        }

        #related ytd-compact-video-renderer #dismissible {
            height: 20px !important;
        }

        #related ytd-compact-video-renderer #dismissible ytd-thumbnail {
            width: 0 !important;
        }

        #related ytd-compact-video-renderer #channel-name,
        #related ytd-compact-video-renderer .metadata {
            position: relative !important;
            visibility: visible !important;
            max-width: none !important;
            max-height: none !important;
            display: block !important;
            padding: 0;
            font-size: 14px;
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

})();