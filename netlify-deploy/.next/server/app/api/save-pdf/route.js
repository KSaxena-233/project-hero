"use strict";
(() => {
var exports = {};
exports.id = 399;
exports.ids = [399];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 824:
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

// NAMESPACE OBJECT: ./app/api/save-pdf/route.ts
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
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
;// CONCATENATED MODULE: ./app/api/save-pdf/route.ts



async function POST(request) {
    try {
        const { folderPath, fileName, pdfData } = await request.json();
        // Create directory if it doesn't exist
        try {
            await (0,promises_namespaceObject.mkdir)(folderPath, {
                recursive: true
            });
        } catch (error) {
            console.error("Error creating directory:", error);
        }
        // Convert base64 PDF data to Buffer
        const buffer = Buffer.from(pdfData, "base64");
        // Save file
        const filePath = (0,external_path_.join)(process.cwd(), folderPath, fileName);
        await (0,promises_namespaceObject.writeFile)(filePath, buffer);
        return next_response/* default */.Z.json({
            success: true,
            filePath
        });
    } catch (error) {
        console.error("Error saving PDF:", error);
        return next_response/* default */.Z.json({
            success: false,
            error: "Failed to save PDF"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsave-pdf%2Froute&name=app%2Fapi%2Fsave-pdf%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsave-pdf%2Froute.ts&appDir=%2FUsers%2Fkeshu%2FDesktop%2FCIDD_REPO%2Fapp&appPaths=%2Fapi%2Fsave-pdf%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/save-pdf/route",
        pathname: "/api/save-pdf",
        filename: "route",
        bundlePath: "app/api/save-pdf/route"
    },
    resolvedPagePath: "/Users/keshu/Desktop/CIDD_REPO/app/api/save-pdf/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/save-pdf/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778], () => (__webpack_exec__(824)));
module.exports = __webpack_exports__;

})();