"use strict";
(() => {
var exports = {};
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 6786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 7252:
/***/ ((module) => {

module.exports = require("prettier/plugins/html");

/***/ }),

/***/ 7413:
/***/ ((module) => {

module.exports = require("prettier/standalone");

/***/ }),

/***/ 852:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 4492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 5803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/send-email/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./node_modules/resend/dist/index.mjs
var dist = __webpack_require__(3506);
;// CONCATENATED MODULE: ./app/api/send-email/route.ts


const resend = new dist/* Resend */.R(process.env.RESEND_API_KEY);
// Rate limiting setup
let lastEmailSent = 0;
const RATE_LIMIT_DELAY = 1000 // 1 second between emails
;
async function POST(request) {
    try {
        const { to, subject, text, html } = await request.json();
        // Check rate limit
        const now = Date.now();
        if (now - lastEmailSent < RATE_LIMIT_DELAY) {
            await new Promise((resolve)=>setTimeout(resolve, RATE_LIMIT_DELAY));
        }
        console.log("API: Attempting to send email with Resend:", {
            to,
            subject
        });
        const data = await resend.emails.send({
            from: "saxena.keshav.05@gmail.com",
            to: to,
            subject: subject,
            text: text,
            html: html,
            replyTo: "saxena.keshav.05@gmail.com"
        });
        console.log("API: Resend response:", data);
        lastEmailSent = Date.now();
        if (data.error) {
            throw new Error(data.error.message);
        }
        return next_response/* default */.Z.json({
            success: true
        });
    } catch (error) {
        console.error("API: Failed to send email:", error);
        return next_response/* default */.Z.json({
            success: false,
            error: error?.message || "Unknown error occurred"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsend-email%2Froute&name=app%2Fapi%2Fsend-email%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fkeshu%2FDesktop%2FCIDD_REPO%2Fapp&appPaths=%2Fapi%2Fsend-email%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/send-email/route",
        pathname: "/api/send-email",
        filename: "route",
        bundlePath: "app/api/send-email/route"
    },
    resolvedPagePath: "/Users/keshu/Desktop/CIDD_REPO/app/api/send-email/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/send-email/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778,506], () => (__webpack_exec__(5803)));
module.exports = __webpack_exports__;

})();