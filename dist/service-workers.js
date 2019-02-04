/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["dist/font/OpenSans-Bold-webfont.eot","1d9c7945c7bc7dd0909105119bfbc191"],["dist/font/OpenSans-Bold-webfont.svg","93349923b5274a36ac93cb3168d09123"],["dist/font/OpenSans-Bold-webfont.ttf","76cc6be5d8a231dc012fef4bdb86f79c"],["dist/font/OpenSans-Bold-webfont.woff","2e90d5152ce92858b62ba053c7b9d2cb"],["dist/font/OpenSans-BoldItalic-webfont.eot","6218c213bb8cf22b25710da6f3a90e48"],["dist/font/OpenSans-BoldItalic-webfont.svg","2b4eeeaef53b3496a5cdf82803666ed7"],["dist/font/OpenSans-BoldItalic-webfont.ttf","b6690626036a7d6824632769305b1978"],["dist/font/OpenSans-BoldItalic-webfont.woff","7657144ec477cd61ac4a5d1af3fa2d28"],["dist/font/OpenSans-ExtraBold-webfont.eot","56d9d42e23863ce0ee8e8c2e2f22843f"],["dist/font/OpenSans-ExtraBold-webfont.svg","ea3c4697897bd7f1505facb7084c6ac3"],["dist/font/OpenSans-ExtraBold-webfont.ttf","12be067a6270759b4f861d64cc267166"],["dist/font/OpenSans-ExtraBold-webfont.woff","6ad396399f4022ccd1616cf11d0985be"],["dist/font/OpenSans-ExtraBoldItalic-webfont.eot","ff3bedaecdec71c34b0ca85c3c495c2d"],["dist/font/OpenSans-ExtraBoldItalic-webfont.svg","6512fca9ff4dc029307018c17e4a2a9d"],["dist/font/OpenSans-ExtraBoldItalic-webfont.ttf","5517d73acdc17143c21b0cffab4cfaa9"],["dist/font/OpenSans-ExtraBoldItalic-webfont.woff","042468300dab6f308592e15e02549c79"],["dist/font/OpenSans-Italic-webfont.eot","43d5342998f3607bd61a8239e98b1160"],["dist/font/OpenSans-Italic-webfont.svg","5b774c25787e0a52c013463c9e3c4219"],["dist/font/OpenSans-Italic-webfont.ttf","de7ef31e6295902347c5c3643b2d82da"],["dist/font/OpenSans-Italic-webfont.woff","f42641eed834f7b97a9499362c6c8855"],["dist/font/OpenSans-Light-webfont.eot","09e00aa7622ece30a0f1e06b55f66c2a"],["dist/font/OpenSans-Light-webfont.svg","8f04ed9aeb2185499068d84842b95aa1"],["dist/font/OpenSans-Light-webfont.ttf","2e98fc3ce85f31f63010b706259cb604"],["dist/font/OpenSans-Light-webfont.woff","45b47f3e9c7d74b80f5c6e0a3c513b23"],["dist/font/OpenSans-LightItalic-webfont.eot","550b5fda4a27cfedb7131b1a6e85e748"],["dist/font/OpenSans-LightItalic-webfont.svg","fd6dd5fa10c5a74f0a767eeb695342f1"],["dist/font/OpenSans-LightItalic-webfont.ttf","1d22953c479914c2f801e08de666b0e8"],["dist/font/OpenSans-LightItalic-webfont.woff","b553da506077488bc65289e10841d527"],["dist/font/OpenSans-Regular-webfont.eot","c4d82460ef260eb1589e73528cbfb257"],["dist/font/OpenSans-Regular-webfont.svg","8185eb3059c46e4169ce107dfcf85950"],["dist/font/OpenSans-Regular-webfont.ttf","488d5cc145299ba07b75495100419ee6"],["dist/font/OpenSans-Regular-webfont.woff","79515ad0788973c533405f7012dfeccd"],["dist/font/OpenSans-Semibold-webfont.eot","f28eb362fb6afe946d822ee5451c2146"],["dist/font/OpenSans-Semibold-webfont.svg","3f6b1eed8a0832d6f316fc26526348a8"],["dist/font/OpenSans-Semibold-webfont.ttf","b32acea6fd3c228b5059042c7ad21c55"],["dist/font/OpenSans-Semibold-webfont.woff","697574b47bcfdd2c45e3e63c7380dd67"],["dist/font/OpenSans-SemiboldItalic-webfont.eot","70bafcaaadad9e17b9c7784abbc6b1c2"],["dist/font/OpenSans-SemiboldItalic-webfont.svg","70eb93d7ba2ad241180085a9a74b0b95"],["dist/font/OpenSans-SemiboldItalic-webfont.ttf","64f886b232962979e2eaf29d93108286"],["dist/font/OpenSans-SemiboldItalic-webfont.woff","719f7321a8366f4ee609737026432113"],["dist/font/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["dist/font/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["dist/font/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["dist/font/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["dist/font/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["dist/font/fontcustom_cb066050d5b786186aa0e7f121427d8b.eot","68fa2f98cb6b8468a485677e3900bde8"],["dist/font/fontcustom_cb066050d5b786186aa0e7f121427d8b.svg","51d427b0e7cbf100d30148ae17549a7d"],["dist/font/fontcustom_cb066050d5b786186aa0e7f121427d8b.ttf","4f9680fbf01f4aa9cd11eb77f1c714dd"],["dist/font/fontcustom_cb066050d5b786186aa0e7f121427d8b.woff","e54ee2d6849bd36262104266eb8a80a9"],["dist/font/fontello.eot","ce25cd5bdc97f3162b5ed8d9facb3005"],["dist/font/fontello.svg","931bc5e57d402b88137500d8af868cff"],["dist/font/fontello.ttf","3cd7423df7d808f922898f5be0edcdd8"],["dist/font/fontello.woff","b54500d9503d30109f1a6acdb9fe81d8"],["dist/font/librebaskerville-bold-webfont.eot","c49b3981651dfe7f281418762ba6ead9"],["dist/font/librebaskerville-bold-webfont.svg","6be4bfc9a081cb82910a1ac43eaee4c7"],["dist/font/librebaskerville-bold-webfont.ttf","e2a49a303079f1d0ef576591d806b1b4"],["dist/font/librebaskerville-bold-webfont.woff","d1e41b59c942f200e2af5cd00a1c413c"],["dist/font/librebaskerville-italic-webfont.eot","98770575e43bc5883a62f232c2fc5475"],["dist/font/librebaskerville-italic-webfont.svg","8825a887e1d72aad739281fcc3eb83a6"],["dist/font/librebaskerville-italic-webfont.ttf","e145c25e7611072d1d1991eb12d61bda"],["dist/font/librebaskerville-italic-webfont.woff","bfa5b7beba080b0c6af53ca5a255b37d"],["dist/font/librebaskerville-regular-webfont.eot","84aa9cfe8f8c7a9a0ed814c1d54e6f87"],["dist/font/librebaskerville-regular-webfont.svg","0417aa96d0b9b04ba4b3a5c3a2378ea7"],["dist/font/librebaskerville-regular-webfont.ttf","eaf077e2e9d8c00e3348b03a7cac92fe"],["dist/font/librebaskerville-regular-webfont.woff","d67a803b3388b5b73200e6eec553f6fe"],["dist/image/background.jpg","cf11084313b8d07391505b029c17b0b6"],["dist/image/loader.gif","b41bfcf37a8a365d2c101c9931bc0e75"],["dist/image/overlay-bg.png","9176109b8b53b0cd9be8b698b720be5e"],["dist/image/stackshare-logo.png","cbafeb39e312482ccbdff2eb915eb03f"],["dist/styles.c0731a2e2432aebb97d4.css","fe26fe6e10dbecebee490dedf5ce1c23"],["dist/vendors~styles.c0731a2e2432aebb97d4.css","438fbc9304d8bf4419209cd1e996d8b7"]];
var cacheName = 'sw-precache-v3-nimjetushar-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







