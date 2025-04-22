"use strict";
(() => {
var exports = {};
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 6662:
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

// NAMESPACE OBJECT: ./app/api/chat/route.ts
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
;// CONCATENATED MODULE: ./app/api/chat/route.ts

// Knowledge base for developmental disabilities
const knowledgeBase = {
    general: [
        "Developmental disabilities are a group of conditions due to an impairment in physical, learning, language, or behavior areas.",
        "These conditions begin during the developmental period, may impact day-to-day functioning, and usually last throughout a person's lifetime.",
        "Common developmental disabilities include intellectual disabilities, autism spectrum disorder, cerebral palsy, and Down syndrome."
    ],
    communication: [
        "Effective communication with individuals with developmental disabilities often requires patience, clarity, and respect.",
        "Use simple language, avoid jargon, and give the person time to process and respond.",
        "Non-verbal communication, such as gestures and facial expressions, can be very helpful.",
        "Always treat the person with dignity and respect, regardless of their communication abilities."
    ],
    support: [
        "Support needs vary widely among individuals with developmental disabilities.",
        "Some may need assistance with daily living skills, while others may need support with social interactions.",
        "It's important to ask the individual and their family about their specific needs and preferences.",
        "Consistency and routine can be very helpful for many individuals with developmental disabilities."
    ],
    resources: [
        "The Arc of the Triangle provides support and resources for individuals with developmental disabilities.",
        "ASNC (Autism Society of North Carolina) offers programs and services for individuals with autism.",
        "Alliance Health provides services for individuals with intellectual and developmental disabilities.",
        "Trillium Health Resources offers behavioral health and intellectual/developmental disability services."
    ]
};
async function POST(request) {
    try {
        const { message, userType, matchScore, compatibilityFactors } = await request.json();
        if (!message) {
            return next_response/* default */.Z.json({
                error: "Message is required"
            }, {
                status: 400
            });
        }
        const lowerMessage = message.toLowerCase();
        let response = "";
        // Check for keywords and provide relevant information
        if (lowerMessage.includes("what") && lowerMessage.includes("developmental disability")) {
            response = knowledgeBase.general.join("\n\n");
        } else if (lowerMessage.includes("communicat") || lowerMessage.includes("talk") || lowerMessage.includes("speak")) {
            response = knowledgeBase.communication.join("\n\n");
        } else if (lowerMessage.includes("support") || lowerMessage.includes("help") || lowerMessage.includes("assist")) {
            response = knowledgeBase.support.join("\n\n");
        } else if (lowerMessage.includes("resource") || lowerMessage.includes("organization") || lowerMessage.includes("agency")) {
            response = knowledgeBase.resources.join("\n\n");
        } else if (lowerMessage.includes("match") || lowerMessage.includes("compatibility")) {
            response = `Your match has a compatibility score of ${matchScore}% based on the following factors:\n${compatibilityFactors?.join("\n")}\n\nWould you like to know more about how to build a successful relationship with your match?`;
        } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
            response = `Hello! I'm here to help you with your match. You can ask me about developmental disabilities, communication strategies, support needs, or resources in your area.`;
        } else {
            response = `I'm here to help you with your match and provide information about developmental disabilities. You can ask me about communication strategies, support needs, or resources in your area.`;
        }
        return next_response/* default */.Z.json({
            response
        });
    } catch (error) {
        console.error("Chat API Error:", error);
        return next_response/* default */.Z.json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fchat%2Froute&name=app%2Fapi%2Fchat%2Froute&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fkeshu%2FDesktop%2FCIDD_REPO%2Fapp&appPaths=%2Fapi%2Fchat%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/chat/route",
        pathname: "/api/chat",
        filename: "route",
        bundlePath: "app/api/chat/route"
    },
    resolvedPagePath: "/Users/keshu/Desktop/CIDD_REPO/app/api/chat/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/chat/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778], () => (__webpack_exec__(6662)));
module.exports = __webpack_exports__;

})();