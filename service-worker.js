/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e7835ad7baaba2b9e9b33a26f7fd6d63"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.c29d6b90.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.881f1c71.js",
    "revision": "139fb947484616d1abc8e1b44abbcbda"
  },
  {
    "url": "assets/js/16.a59a2cb1.js",
    "revision": "b6580bad26b362445e327cd8b186f3d2"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
  },
  {
    "url": "assets/js/18.f08bf664.js",
    "revision": "826306b4983d384ba3626387a7270c4c"
  },
  {
    "url": "assets/js/4.e925419c.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.41cdee3a.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.b79ed871.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.6c3e1f20.js",
    "revision": "a4a68a7c74fbe153f0067db68873a5cf"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "23dba555fa32d01e2f2d35b5d6d33517"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7669635f3c1377e5ca2c5ed961229b29"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "04673646d367b8693bb8731422be4dd9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "60b1fc4eb1a322ada2394fc736eafd17"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4e4ed6cea31eae41d4c1e2a57e467664"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "b688acd72841a56e88f0c13353104f5b"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "ea1117c0e25549a4a38e5ebd847d0638"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "dc3e33c4539ea8962cd87e299f89b0f4"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a8fb223a26501f1908ded0a60ceddd89"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7ecfe87f3e17f61de6583141c48dd0b0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "635b318a75e2a4b0fe3e4f2e4b3ff16b"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f0a956ca90336e69efaab141dc88d424"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "327e5096cfcf14e1e4cf9b9d076ba3c7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "64cfe8dda04f166cebdc899db83591e0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "cfc4037a261f1e2e64be847b519f8372"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d38a549065b230fe2d2372fef819ef4f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ab8327034b33a2179890e53733823152"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "adf764baef56760023d33c668631427b"
  },
  {
    "url": "timeline/index.html",
    "revision": "d33daa90646b8d1ecfbbfd1eb1e9179f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5aea4d46ae596af19a8772b3159e871f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8b0178d0642566d7dc4bd52caaf56852"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "5afdeb49d5b8892b80e40c818a996d06"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "28e4ae3b1361a3c2f052718c086cd477"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7332c5a10c1197ffabaef36d5a6b0aef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
