"use strict";
(() => {
var exports = {};
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3716:
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

// NAMESPACE OBJECT: ./app/api/profile/route.ts
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
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(2037);
var external_os_default = /*#__PURE__*/__webpack_require__.n(external_os_);
;// CONCATENATED MODULE: ./app/api/profile/route.ts




// Get the user's home directory for reliable local storage
const getLocalStoragePath = ()=>{
    const homeDir = external_os_default().homedir();
    return external_path_default().join(homeDir, "project_hero_data");
};
// Ensure all necessary directories exist
const ensureDirectories = async ()=>{
    const directories = [
        external_path_default().join(process.cwd(), "data"),
        getLocalStoragePath()
    ];
    for (const dir of directories){
        try {
            await external_fs_namespaceObject.promises.access(dir);
        } catch  {
            await external_fs_namespaceObject.promises.mkdir(dir, {
                recursive: true
            });
        }
    }
};
// Get profiles from both storage locations
const getStoredProfiles = async (type)=>{
    await ensureDirectories();
    const fileName = `${type}_profiles.json`;
    const serverPath = external_path_default().join(process.cwd(), "data", fileName);
    const localPath = external_path_default().join(getLocalStoragePath(), fileName);
    let profiles = [];
    // Try reading from both locations and merge
    try {
        const [serverData, localData] = await Promise.all([
            external_fs_namespaceObject.promises.readFile(serverPath, "utf8").catch(()=>"[]"),
            external_fs_namespaceObject.promises.readFile(localPath, "utf8").catch(()=>"[]")
        ]);
        const serverProfiles = JSON.parse(serverData);
        const localProfiles = JSON.parse(localData);
        // Merge profiles, preferring local copies if duplicates exist
        const merged = new Map();
        localProfiles.forEach((profile)=>{
            merged.set(profile.id, profile);
        });
        serverProfiles.forEach((profile)=>{
            if (!merged.has(profile.id)) {
                merged.set(profile.id, profile);
            }
        });
        profiles = Array.from(merged.values());
    } catch (error) {
        console.error("Error reading profiles:", error);
        profiles = [];
    }
    return profiles;
};
// Store profile in both locations
const storeProfile = async (profile)=>{
    await ensureDirectories();
    const fileName = `${profile.type}_profiles.json`;
    const serverPath = external_path_default().join(process.cwd(), "data", fileName);
    const localPath = external_path_default().join(getLocalStoragePath(), fileName);
    // Add ID and timestamp if not present
    const profileToStore = {
        ...profile,
        id: profile.id || Date.now().toString(),
        timestamp: profile.timestamp || new Date().toISOString()
    };
    // Get existing profiles from both locations
    const existingProfiles = await getStoredProfiles(profile.type);
    // Add new profile
    existingProfiles.push(profileToStore);
    // Save to both locations
    const saveOperations = [
        serverPath,
        localPath
    ].map(async (filePath)=>{
        try {
            await external_fs_namespaceObject.promises.writeFile(filePath, JSON.stringify(existingProfiles, null, 2));
        } catch (error) {
            console.error(`Error saving to ${filePath}:`, error);
        }
    });
    await Promise.all(saveOperations);
};
// Calculate match score between profiles
const calculateMatchScore = (profile1, profile2)=>{
    let score = 0;
    const factors = [];
    // Check if profiles are of opposite types
    if (profile1.type === profile2.type) {
        return {
            score: 0,
            factors: []
        }; // No match if same type
    }
    // 1. Support Needs Match (40% of score)
    const sharedNeeds = profile1.supportNeeds.filter((need)=>profile2.supportNeeds.includes(need));
    if (sharedNeeds.length > 0) {
        const needsScore = sharedNeeds.length / Math.max(profile1.supportNeeds.length, profile2.supportNeeds.length) * 40;
        score += needsScore;
        factors.push(`Matching support needs: ${sharedNeeds.join(", ")}`);
    }
    // 2. Agency Match (20% of score)
    if (profile1.agency === profile2.agency) {
        score += 20;
        factors.push("Same agency connection");
    }
    // 3. Interest Match (40% of score)
    // Simple keyword matching for now
    const interests1 = profile1.interests.toLowerCase().split(/\s+/);
    const interests2 = profile2.interests.toLowerCase().split(/\s+/);
    const matchingInterests = interests1.filter((interest)=>interests2.includes(interest));
    if (matchingInterests.length > 0) {
        const interestScore = matchingInterests.length / Math.max(interests1.length, interests2.length) * 40;
        score += interestScore;
        factors.push(`Interest compatibility: ${Math.round(interestScore)}%`);
    }
    return {
        score: Math.round(score),
        factors
    };
};
async function POST(request) {
    try {
        const profile = await request.json();
        // Store the profile in both locations
        await storeProfile(profile);
        // Get opposite type profiles for matching
        const oppositeType = profile.type === "student" ? "individual" : "student";
        const oppositeProfiles = await getStoredProfiles(oppositeType);
        // Calculate matches
        const matches = oppositeProfiles.map((otherProfile)=>{
            const { score, factors } = calculateMatchScore(profile, otherProfile);
            return {
                score,
                compatibility: factors,
                profile: otherProfile
            };
        }).filter((match)=>match.score >= 50).sort((a, b)=>b.score - a.score).slice(0, 3);
        return next_response/* default */.Z.json({
            success: true,
            matches,
            storagePath: getLocalStoragePath() // Return the local storage path for reference
        });
    } catch (error) {
        console.error("Profile storage error:", error);
        return next_response/* default */.Z.json({
            success: false,
            error: "Failed to store profile"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fprofile%2Froute&name=app%2Fapi%2Fprofile%2Froute&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=%2FUsers%2Fkeshu%2FDesktop%2FCIDD_REPO%2Fapp&appPaths=%2Fapi%2Fprofile%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/profile/route",
        pathname: "/api/profile",
        filename: "route",
        bundlePath: "app/api/profile/route"
    },
    resolvedPagePath: "/Users/keshu/Desktop/CIDD_REPO/app/api/profile/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/profile/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778], () => (__webpack_exec__(3716)));
module.exports = __webpack_exports__;

})();