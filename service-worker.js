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

var precacheConfig = [["face.css","f1b32e64edbc0eeed485089d97ab30fb"],["images/BlackPanther-2018-aventure.jpg","09dc54cd4ccbe6f7dbcda4b5c588b325"],["images/Chappie-2015-scifi.jpg","57d54e30371b768e2c5a2f2c112bd866"],["images/DernierTrainPourBusan-2016-thriller.jpg","41041201c0be56592927c84b437e59d4"],["images/Dobermann-1997-thriller.jpg","1471679001fa82edd958812f0611c1a0"],["images/La_Classe_americaine-1993-comedie.png","3d92316be5da5d763801a6221ee06680"],["images/LesbianVampireKillers-2009-comedie.jpg","e12d5785fae732582293b6fcaa226de9"],["images/OldBoy-2003-thriller.jpg","fa0fa63ce8b9eec977de701bc3e399b5"],["images/PremierContact-2016-scifi.jpg","299386b1b42a4eb9e560dcee06ac649a"],["images/Prometheus-2012-scifi.jpg","7f65b931f47a639cebd243371272fa48"],["images/Realite-2015-comedie.jpg","58d968256eaddf63765ef92bd31b1f1a"],["images/Survivestyle5-2004-comedie.jpg","0577b93654886419df9ca9aa3e5eb5f3"],["images/TheLastGirl-2017-thriller.jpg","53150795d5fb0a677ed3cbbeccc9ea93"],["images/The_Witch-2016-Thriller.jpg","b279dd76e9db2d914fdb7bf47c280c00"],["images/WhatWeDoInTheShadows-2014-comedie.jpg","1bd64d0f8c424193a9d5dbc687d2dea4"],["images/WrongCops-2013-comedie.jpg","123d773e7d0a57c2963a64c39624e276"],["images/akira-1988.jpg","9238bc126f6d32bc98d0dd060e20a6b0"],["images/arrow-top.png","8f1126fc893ae8394fc23df7461ab099"],["images/automata-2014.jpg","b2b8c306efcbfb9bc3dbcbf40a32884b"],["images/batmanmovie-2017-comedie.jpg","f500614ad3574ea531c9e8a20f5523e2"],["images/blade-1998.jpg","14cf9247a323322adb27ec88214232b3"],["images/favicon-256.png","19abe65a788840526beaf26d64f30530"],["images/favicon.ico","b4d7574b18c58499f0f1260c1c5e3a48"],["images/ghost-1995.jpg","6bfe93730af87a2309ebad93962dbadc"],["images/hostel-2005-thriller.jpg","fe2d26fd855a3fc64352ce5c4d35bf06"],["images/icon192.png","6ecb11dd1e6256f18300ffed20a8c043"],["images/icon512.png","746505e44c434514737054ec95e982e6"],["images/img_avatar2.png","5522155776f935b968ee033b378c7dce"],["images/inception-2010-scifi.jpg","2f367b15507f6938a57765991bc33949"],["images/intouchables-2011-comedie.jpg","82b2c1397930f1d97419711f6ba06396"],["images/lepatientanglais-1996-dramatique.jpg","388096519d756894eeff4853ee36d5a4"],["images/lesdeuxtours-2002-aventure.jpg","70a93fadd64024cc19823202186dc3b1"],["images/oldboy-2003.jpg","248a9661e6a64f2ffad4333930d577c4"],["images/rocknrolla-2008.jpg","d292dd58531cd70e5e81ad5320b8820d"],["images/rubber-poster.jpg","8eceec1b7b682b6abf75d72d87ce7081"],["images/serie/AlteredCarbon-2018-scifi.jpg","79c9b0302346de848b39bca708cd0a4c"],["images/serie/AmericanHorrorStory-2011-thriller.jpg","4871c16ea85598d3c3c58c3f4492aceb"],["images/serie/BlackBooks-2000-comedie.jpg","961ab59e13d536867a539325f320a558"],["images/serie/Dark-2017-scifi.jpg","74c1f69010d41d7b1293eaf8343e1ee8"],["images/serie/DontHugMeImScared-2011-comedie.jpg","0ad0368d1aa7304bba1d8bb6cfb2762a"],["images/serie/HeroCorp-2008-comedie.jpg","abdfe8212b40a81487e76baa33332c56"],["images/serie/Humans-2015-scifi.jpg","33216a070fb44c10e2be018e791c519d"],["images/serie/IntoTheBadlands-2015-aventure.jpg","09565fb0c68179fea18840fa85932bf0"],["images/serie/Jordskott-2015-thriller.jpg","da2f78ef59cf296da92117ba22b71083"],["images/serie/Killjoys-2015-scifi.jpg","0a41b067b5c6f94ec22aa2ece4ab184b"],["images/serie/MasterofNone-2015-comedie.jpg","2c6c8060d6eed8437dfebf7dba350df9"],["images/serie/Misfits-2009-comedie.jpg","f2087d8696d5fa6281ca21548ca84c2d"],["images/serie/Plebs-2013-comedie.jpg","6262239898105f61871c0685093e0875"],["images/serie/The100-2014-scifi.jpg","7f8736bd66e574afca44a0bf6c123f7d"],["images/serie/TheAliens-2016-comedie.jpg","2eac485e95db88f747e8a1e27a8084fa"],["images/serie/TheCode-2014-drama.jpg","b475f6de927559e6793d4372bbee427a"],["images/serie/TheExpanse-2015-scifi.jpg","4e96dbbdef6f1d9d2c7bd449d5dd52c2"],["images/serie/TheHandmaidsTale-2017-drama.jpg","27fbce8c355737e7f2b75c33f4375f80"],["images/serie/TheLivingandtheDead-2016-drama.jpg","23a0ee4c5ce379a6e2260b57c94d0885"],["images/serie/TheNightManager-2016-drama.jpg","0e692d63d18b97d96e6620bc36614905"],["images/serie/TheTerror-2018-thriller.jpg","a31e6ef313c9df8ecd0244d23c328b2f"],["images/serie/TrueDetective-2014-drama.jpg","d2da0682bfce062e6bef5c2e6d2b92f8"],["images/serie/Vikings-2013-aventure.jpg","d262aea953916ed3f30a540065cb9c86"],["images/serie/WynonnaEarp-2016-aventure.jpg","1ca59e7e8747e27e9dc63c04c6e0fe57"],["images/seven-1995-thriller.jpg","c327ade356c3dda4bca1eb653b84d682"],["images/shutterisland-2010-thriller.jpg","0cf8822af62289cc261e2d37fa4ac857"],["images/snatch-2000-comedie.jpg","a9b00af78a4a7461c26b9142c72d7fda"],["images/starwarsempire-1980-scifi.jpg","6a6c65cfdf4d6b42258840e7fbd7b211"],["images/swissarmyman-2016-comedie.jpg","5f8224d8d43b36a66c197eeb4bd4864f"],["images/theLittleHours-2017-comedie.jpg","fdf0f7a49e41c2eac85d11f5620b8a1a"],["images/thefall-2006-dramatique.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["images/thewitch-2015.jpg","34231f360e78a7c349235909b1ca9655"],["images/zoolander-2001-comedie.jpg","14fdef0e95ee53aeaad0d8d38b0f99c4"],["index.html","09811c555d72ffc1df322432cb608366"],["js/acceptation.cookie.js","20a1b2ecfeb7b3a325dcccd61f807645"],["js/age.js","28b712d74fc095d55a929e1e4b0862fa"],["js/app.js","de964c44e0aea68f806cbeda3dae3811"],["js/bouton.js","d60ed726e07456411918815cda025fe2"],["js/filters.js","3471df4a4830f3e599c6d87515df530d"],["js/filtersBis.js","1870749f8978ca576386d597a9dc0273"],["js/jquery.cookie.js","d5528dde0006c78be04817327c2f9b6f"],["js/shop.js","12953f4c77aa0079c6d8a8473c670e1a"],["js/videoStop.js","c4f5fca76ba4b95d23adec3e8916e48b"],["letters.html","0640d3da2f9cdc3576a7f2392ff58b09"],["manifest.json","8599efde8f6943dd78660e607b7c9ea1"],["mediaq.css","d6ffe58b43f60d5e753d633934d7f16d"],["style.css","184b54b60ef60718be0f05d00214b5eb"],["ultimate/index.html","7f061a8bf0c4373368b68de818dfc720"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







