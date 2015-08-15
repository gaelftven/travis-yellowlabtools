/*jslint node: true */

'use strict';

module.exports = function(grunt) {

    // Load all grunt modules
    require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        

        // Configuration you can adapt to your needs
        yellowlabtools: {

            twitterOnDesktop: {
                urls: [
                    'http://pluzz.francetv.fr/',
                    'http://pluzz.francetv.fr/france2'
                ],
                failConditions: [
                    // These are examples, adapt to your needs
                    'fail if at least one url has a global score < 80/100',
                    'fail if at least one url has an imageOptimization score < 30/100',
                    'fail if at least one url has a fileMinification score < 30/100',
                    'fail if at least one url has a jsErrors > 0',
                    'fail if at least one url has a notFound > 0',
                    'fail if at least one url has a multipleRequests > 0',
                    'fail if at least one url has a DOMaccessesOnScroll > 0',
                    'fail if at least one url has a documentWriteCalls > 0',
                    'fail if at least one url has a consoleMessages > 0',
                    'fail if at least one url has a cssRules > 3000',
                    'fail if at least one url has a cssImports > 0',
                    'fail if at least one url has a cssDuplicatedSelectors > 50'
                ],
                options: {
                    device: 'desktop' // 'desktop', 'tablet' or 'phone'
                }
            },

            // Same as above, but simulating a mobile
            twitterOnMobile: {
                urls: [
                    'http://m.pluzz.francetv.fr/',
                    'http://m.pluzz.francetv.fr/france2'
                ],
                failConditions: [
                    // These are examples, adapt to your needs
                    'fail if at least one url has a global score < 80/100',
                    'fail if at least one url has an imageOptimization score < 30/100',
                    'fail if at least one url has a fileMinification score < 30/100',
                    'fail if at least one url has a jsErrors > 0',
                    'fail if at least one url has a notFound > 0',
                    'fail if at least one url has a multipleRequests > 0',
                    'fail if at least one url has a DOMaccessesOnScroll > 0',
                    'fail if at least one url has a documentWriteCalls > 0',
                    'fail if at least one url has a consoleMessages > 0',
                    'fail if at least one url has a cssRules > 3000',
                    'fail if at least one url has a cssImports > 0',
                    'fail if at least one url has a cssDuplicatedSelectors > 50'
                ],
                options: {
                    device: 'phone' // 'desktop', 'tablet' or 'phone'
                }
            },


            // Global options, for all runs
            options: {
                key: 'API_KEY', // Set this in Travis-CI settings, otherwise everyone will be able to read it on GitHub (more details in README)
                locally: false // Do not change!
            }
        }


    });
};
