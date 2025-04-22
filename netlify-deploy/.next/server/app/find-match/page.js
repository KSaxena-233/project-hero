(() => {
var exports = {};
exports.id = 191;
exports.ids = [191];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 5759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'find-match',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1517)), "/Users/keshu/Desktop/CIDD_REPO/app/find-match/page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "/Users/keshu/Desktop/CIDD_REPO/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/Users/keshu/Desktop/CIDD_REPO/app/find-match/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/find-match/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/find-match/page",
        pathname: "/find-match",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 297:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7940))

/***/ }),

/***/ 7940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FindMatch)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/components/MatchAssistant.tsx


function MatchAssistant({ matchScore, compatibilityFactors, userType }) {
    const [messages, setMessages] = (0,react_.useState)([
        {
            role: "assistant",
            content: `Hello! I'm your Project H.E.R.O. Match Assistant. I see you have a match with a compatibility score of ${matchScore}%. I'm here to help you navigate this connection and provide information about developmental disabilities. How can I assist you today?`
        }
    ]);
    const [input, setInput] = (0,react_.useState)("");
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!input.trim()) return;
        // Add user message
        const userMessage = {
            role: "user",
            content: input
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        setIsLoading(true);
        try {
            // Send message to chat API
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: input,
                    userType,
                    matchScore,
                    compatibilityFactors
                })
            });
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // Add assistant response
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: data.response
                    }
                ]);
        } catch (error) {
            console.error("Failed to get chat response:", error);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "I apologize, but I encountered an error. Please try asking your question again."
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white rounded-lg shadow p-6 mt-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Match Assistant"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg",
                children: [
                    messages.map((msg, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `inline-block p-3 rounded-lg ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`,
                                children: msg.content
                            })
                        }, idx)),
                    isLoading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "inline-block p-3 rounded-lg bg-gray-200",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "animate-pulse",
                                children: "Thinking..."
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        placeholder: "Ask about developmental disabilities or your match...",
                        className: "flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                        disabled: isLoading
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        disabled: isLoading || !input.trim(),
                        className: "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "Send"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/find-match/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ADMIN_CONFIG = {
    primaryAdmin: {
        email: "kesaxena@unc.edu",
        role: "Technical Admin"
    },
    projectLead: {
        email: "shruti.madhav@unc.edu",
        role: "Project Lead"
    }
};
// Enhanced AI-based matching algorithm
const findMatches = (userData, existingProfiles)=>{
    const matches = [];
    // Filter profiles of opposite type
    const potentialMatches = existingProfiles.filter((profile)=>profile.type !== userData.type && profile.consent);
    for (const profile of potentialMatches){
        let score = 0;
        const compatibility = [];
        // 1. Support Needs Match (40% of score)
        const sharedNeeds = userData.supportNeeds.filter((need)=>profile.supportNeeds.includes(need));
        if (sharedNeeds.length > 0) {
            const needsScore = sharedNeeds.length / Math.max(userData.supportNeeds.length, profile.supportNeeds.length) * 40;
            score += needsScore;
            compatibility.push(`Matching support needs: ${sharedNeeds.join(", ")}`);
        }
        // 2. Agency Match (20% of score)
        if (userData.agency === profile.agency) {
            score += 20;
            compatibility.push("Same agency connection");
        }
        // 3. Enhanced Interest Match (40% of score)
        const userInterests = processInterests(userData.interests);
        const profileInterests = processInterests(profile.interests);
        const interestScore = calculateInterestScore(userInterests, profileInterests);
        score += interestScore;
        if (interestScore > 0) {
            compatibility.push(`Interest compatibility: ${Math.round(interestScore)}%`);
        }
        // Only include matches with 50% or higher compatibility
        if (score >= 50) {
            matches.push({
                score: Math.round(score),
                compatibility,
                contactInfo: {
                    email: profile.email,
                    phone: profile.phone
                }
            });
        }
    }
    // Sort by score and return top 3 matches
    return matches.sort((a, b)=>b.score - a.score).slice(0, 3);
};
// Natural language processing for interests
const processInterests = (interests)=>{
    // Convert to lowercase and split into words
    const words = interests.toLowerCase().replace(/[^\w\s]/g, " ") // Replace punctuation with spaces
    .split(/\s+/) // Split on whitespace
    .filter((word)=>word.length > 2) // Remove short words
    .filter((word)=>!stopWords.includes(word)) // Remove common stop words
    ;
    // Extract key phrases (2-3 word combinations)
    const phrases = [];
    for(let i = 0; i < words.length - 1; i++){
        phrases.push(words[i] + " " + words[i + 1]);
        if (i < words.length - 2) {
            phrases.push(words[i] + " " + words[i + 1] + " " + words[i + 2]);
        }
    }
    return Array.from(new Set([
        ...words,
        ...phrases
    ])) // Remove duplicates
    ;
};
// Common English stop words to filter out
const stopWords = (/* unused pure expression or super */ null && ([
    "the",
    "and",
    "but",
    "for",
    "nor",
    "yet",
    "with",
    "are",
    "was",
    "were",
    "been",
    "have",
    "has",
    "had"
]));
// Calculate semantic similarity between interests
const calculateInterestScore = (interests1, interests2)=>{
    let matchCount = 0;
    let totalComparisons = 0;
    for (const interest1 of interests1){
        for (const interest2 of interests2){
            totalComparisons++;
            // Exact match
            if (interest1 === interest2) {
                matchCount += 1;
                continue;
            }
            // Partial match (one is substring of other)
            if (interest1.includes(interest2) || interest2.includes(interest1)) {
                matchCount += 0.7;
                continue;
            }
            // Word overlap
            const words1 = Array.from(new Set(interest1.split(" ")));
            const words2 = Array.from(new Set(interest2.split(" ")));
            const overlap = words1.filter((word)=>words2.includes(word)).length;
            if (overlap > 0) {
                matchCount += 0.5 * (overlap / Math.max(words1.length, words2.length));
            }
        }
    }
    // Calculate final score (0-40 range)
    return Math.min(40, matchCount / Math.max(1, totalComparisons) * 40);
};
// Store profile and find matches
const storeProfile = async (profile)=>{
    try {
        console.log("Storing profile:", profile);
        // Add timestamp and unique ID
        const newProfile = {
            ...profile,
            id: Date.now().toString(),
            timestamp: new Date().toISOString()
        };
        // Store profile via API
        const response = await fetch("/api/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProfile)
        });
        if (!response.ok) {
            throw new Error("Failed to store profile");
        }
        const data = await response.json();
        console.log("Profile stored successfully");
        return data.matches || [];
    } catch (error) {
        console.error("Failed to store profile:", error);
        throw error;
    }
};
// Notify about new potential matches
const notifyNewMatch = async (profile, match)=>{
    const htmlContent = `
    <h2>New Potential Match Found!</h2>
    <p>A new profile has been added that matches with your preferences:</p>
    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 5px;">
      <h3>Match Score: ${match.score}%</h3>
      <ul>
        ${match.compatibility.map((factor)=>`<li>${factor}</li>`).join("")}
      </ul>
    </div>
    <p>The admin will review this match and contact you if approved.</p>
  `;
    const textContent = `
New Potential Match Found!

A new profile has been added that matches with your preferences:

Match Score: ${match.score}%
${match.compatibility.join("\n")}

The admin will review this match and contact you if approved.
  `;
    // Notify admin about the new match
    await sendEmail(ADMIN_CONFIG.primaryAdmin.email, `New Match Found - Project H.E.R.O`, textContent, htmlContent);
};
const getExistingProfiles = (type)=>{
    try {
        const storageKey = type === "student" ? "individual_profiles" : "dsp_profiles";
        return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch (error) {
        console.error("Failed to fetch profiles:", error);
        return [];
    }
};
const sendEmail = async (to, subject, text, html)=>{
    try {
        console.log("Attempting to send email to:", to);
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                to,
                subject,
                text,
                html
            })
        });
        const data = await response.json();
        if (!response.ok || !data.success) {
            console.error("Email API error:", data.error);
            throw new Error(data.error || "Failed to send email");
        }
        console.log("Email sent successfully to:", to, data);
        return true;
    } catch (error) {
        console.error("Failed to send email to:", to, error);
        return false;
    }
};
const notifyAdmins = async (profile, matches)=>{
    const matchSummary = matches.map((match)=>`
    <div style="margin-bottom: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
      <h3>Match Score: ${match.score}%</h3>
      <ul>
        ${match.compatibility.map((factor)=>`<li>${factor}</li>`).join("")}
      </ul>
      <p>Contact: ${match.contactInfo?.email}</p>
      <p>Phone: ${match.contactInfo?.phone}</p>
    </div>
  `).join("");
    const htmlContent = `
    <h2>New Match Alert</h2>
    <h3>New ${profile.type.toUpperCase()} Profile</h3>
    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 5px;">
      <p><strong>Name:</strong> ${profile.name}</p>
      <p><strong>Email:</strong> ${profile.email}</p>
      <p><strong>Agency:</strong> ${profile.agency}</p>
      <p><strong>Support Needs:</strong> ${profile.supportNeeds.join(", ")}</p>
    </div>
    
    <h3>Matches Found:</h3>
    ${matchSummary}
  `;
    const textContent = `
New Match Alert
==============

New ${profile.type.toUpperCase()} Profile:
Name: ${profile.name}
Email: ${profile.email}
Agency: ${profile.agency}
Support Needs: ${profile.supportNeeds.join(", ")}

Matches Found:
${matches.map((match)=>`
Score: ${match.score}%
${match.compatibility.join("\n")}
Contact: ${match.contactInfo?.email}
Phone: ${match.contactInfo?.phone}
`).join("\n---\n")}
  `;
    try {
        // Only send to primary admin
        await sendEmail(ADMIN_CONFIG.primaryAdmin.email, `New ${profile.type} Match Alert - Project H.E.R.O`, textContent, htmlContent);
    } catch (error) {
        console.error("Error sending notifications:", error);
        throw error;
    }
};
const supportNeeds = [
    "Social/Emotional",
    "Personal Care",
    "Job Coaching",
    "Communication",
    "Physical Fitness",
    "Educational Support",
    "Independent Living Skills",
    "Transportation"
];
function FindMatch() {
    const [userType, setUserType] = (0,react_.useState)("student");
    const [formData, setFormData] = (0,react_.useState)({
        name: "",
        email: "",
        phone: "",
        guardianContact: "",
        interests: "",
        supportNeeds: [],
        agency: "",
        otherAgency: "",
        consent: false,
        type: "student",
        communityMemberQuestions: [],
        dspQuestions: [],
        strengths: "",
        dailyActivities: [],
        mobilityAssistance: [],
        medicationAssistance: "",
        supportTimes: "",
        dspQualities: [],
        anythingElse: "",
        professionalGoals: "",
        experience: "",
        supportProvided: [],
        agencyMatch: "",
        availability: ""
    });
    const [matches, setMatches] = (0,react_.useState)([]);
    const [loading, setLoading] = (0,react_.useState)(false);
    const [error, setError] = (0,react_.useState)(null);
    const [status, setStatus] = (0,react_.useState)(null);
    const agencyOptions = [
        "ASNC",
        "Arc of the Triangle",
        "Alliance",
        "Trillium",
        "Other",
        "EOR (private family)"
    ];
    const calculateMatch = async ()=>{
        setError(null);
        setStatus(null);
        setLoading(true);
        try {
            // 1. Validate form data
            if (!validateFormData(formData)) {
                setLoading(false);
                return;
            }
            // 2. Store profile and get matches
            const storedMatches = await storeProfile(formData);
            // 3. Set matches in state
            setMatches(storedMatches);
            // 4. Notify admin
            await notifyAdmins(formData, storedMatches);
            // 5. Set success status
            setStatus(storedMatches.length > 0 ? "Matches found! An email has been sent to the admin for review." : "Your profile has been saved. The admin will review and contact you about potential matches.");
        } catch (error) {
            console.error("Error in matching process:", error);
            setError("We encountered an issue. Please try again or contact support.");
        }
        setLoading(false);
    };
    const validateFormData = (data)=>{
        if (!data.name.trim() || !data.email.trim() || !data.phone.trim()) {
            setError("Please fill in all required fields");
            return false;
        }
        if (!data.consent) {
            setError("Please provide consent to share your information");
            return false;
        }
        if (data.supportNeeds.length === 0) {
            setError("Please select at least one support need");
            return false;
        }
        if (!data.agency) {
            setError("Please select an agency");
            return false;
        }
        return true;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "min-h-screen bg-gray-50 py-12",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-4xl mx-auto px-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-8",
                    children: "Find Your Match"
                }),
                error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-red-50 border-l-4 border-red-400 p-4 mb-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-red-700",
                        children: error
                    })
                }),
                status && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-green-50 border-l-4 border-green-400 p-4 mb-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-green-700",
                        children: status
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "bg-unc-light-blue p-6 rounded-lg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl font-display font-bold text-unc-navy mb-4",
                            children: "I am a:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex space-x-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `btn-primary ${userType === "student" ? "bg-unc-navy" : ""}`,
                                    onClick: ()=>setUserType("student"),
                                    children: "DSP"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `btn-primary ${userType === "individual" ? "bg-unc-navy" : ""}`,
                                    onClick: ()=>setUserType("individual"),
                                    children: "Individual Seeking Support"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "my-8 bg-gradient-to-r from-unc-navy via-unc-blue to-unc-light-blue p-1 rounded-xl relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "absolute inset-0 opacity-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "grid grid-cols-6 gap-4 h-full",
                                    children: [
                                        ...Array(24)
                                    ].map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-col items-center justify-around",
                                            children: [
                                                ...Array(4)
                                            ].map((_, j)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-2 h-2 bg-white rounded-full animate-pulse",
                                                    style: {
                                                        animationDelay: `${(i + j) * 0.1}s`
                                                    }
                                                }, j))
                                        }, i))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: [
                                        ...Array(12)
                                    ].map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute w-full h-0.5 bg-white/20 origin-center animate-spin",
                                            style: {
                                                transform: `rotate(${i * 30}deg)`,
                                                animationDuration: "10s",
                                                animationDelay: `${i * 0.5}s`
                                            }
                                        }, i))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "bg-white/95 backdrop-blur-sm rounded-lg p-6 relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute top-0 right-0 mt-4 mr-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full border border-green-300",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex space-x-1",
                                                children: [
                                                    ...Array(3)
                                                ].map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "h-2 w-2 bg-green-500 rounded-full animate-pulse",
                                                        style: {
                                                            animationDelay: `${i * 0.2}s`
                                                        }
                                                    }, i))
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-sm text-green-800 font-semibold",
                                                children: "System Online"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-between mb-8",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "text-2xl font-display font-bold text-unc-navy mb-2",
                                                children: "Project H.E.R.O. Neural Engine"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-gray-700 text-sm font-medium",
                                                children: "Advanced matching system powered by multi-dimensional analysis"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-all duration-300 group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    className: "w-6 h-6 text-unc-navy transform group-hover:rotate-180 transition-transform duration-700",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "absolute -inset-1 bg-blue-500/20 blur-sm rounded-full group-hover:animate-pulse"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "font-bold ml-2 text-gray-900 group-hover:text-unc-navy transition-colors",
                                                            children: "Neural Analysis"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm text-gray-700 font-medium",
                                                    children: "Deep learning algorithms process profile data for optimal matching"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-all duration-300 group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    className: "w-6 h-6 text-unc-navy transform group-hover:scale-110 transition-transform duration-700",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "absolute -inset-1 bg-blue-500/20 blur-sm rounded-full group-hover:animate-pulse"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "font-bold ml-2 text-gray-900 group-hover:text-unc-navy transition-colors",
                                                            children: "Quantum Matching"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm text-gray-700 font-medium",
                                                    children: "Multi-dimensional compatibility analysis with real-time adaptation"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-all duration-300 group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    className: "w-6 h-6 text-unc-navy transform group-hover:scale-110 transition-transform duration-700",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "absolute -inset-1 bg-blue-500/20 blur-sm rounded-full group-hover:animate-pulse"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "font-bold ml-2 text-gray-900 group-hover:text-unc-navy transition-colors",
                                                            children: "Quantum Encryption"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm text-gray-700 font-medium",
                                                    children: "Military-grade security with quantum-resistant encryption"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-8 relative",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-unc-navy/10 via-unc-blue/15 to-unc-light-blue/10 rounded-lg"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative bg-white/90 rounded-lg p-4 border border-gray-300",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center space-x-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "relative flex-shrink-0",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "w-16 h-16",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "absolute inset-0 border-4 border-unc-blue rounded-full border-t-transparent animate-spin"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "absolute inset-2 border-4 border-unc-light-blue rounded-full border-b-transparent animate-spin",
                                                                    style: {
                                                                        animationDirection: "reverse",
                                                                        animationDuration: "3s"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "absolute inset-4 border-4 border-blue-400 rounded-full border-l-transparent animate-spin",
                                                                    style: {
                                                                        animationDuration: "2s"
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "w-2 h-2 bg-unc-blue rounded-full animate-ping"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex-grow",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "font-bold text-gray-900 mb-2",
                                                                children: "Quantum Processing Matrix"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "grid grid-cols-3 gap-4 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "text-gray-700 font-medium",
                                                                                children: "Neural Load"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "font-mono text-unc-navy font-semibold",
                                                                                children: [
                                                                                    Math.floor(Math.random() * 20) + 80,
                                                                                    "%",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "h-1 bg-gray-200 rounded-full mt-1",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "h-full bg-unc-blue rounded-full animate-pulse",
                                                                                            style: {
                                                                                                width: "85%"
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "text-gray-700 font-medium",
                                                                                children: "Match Precision"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "font-mono text-unc-navy font-semibold",
                                                                                children: [
                                                                                    Math.floor(Math.random() * 5) + 95,
                                                                                    "%",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "h-1 bg-gray-200 rounded-full mt-1",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "h-full bg-unc-blue rounded-full animate-pulse",
                                                                                            style: {
                                                                                                width: "97%"
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "text-gray-700 font-medium",
                                                                                children: "Response Time"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "font-mono text-unc-navy font-semibold",
                                                                                children: [
                                                                                    Math.floor(Math.random() * 50) + 50,
                                                                                    "ms",
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "h-1 bg-gray-200 rounded-full mt-1",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "h-full bg-unc-blue rounded-full animate-pulse",
                                                                                            style: {
                                                                                                width: "92%"
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-6 grid grid-cols-4 gap-4",
                                    children: [
                                        ...Array(4)
                                    ].map((_, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-gray-50 rounded-lg p-3 border border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-xs text-gray-700 font-medium mb-1",
                                                    children: [
                                                        "Processing Node ",
                                                        i + 1
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "text-xs font-mono text-gray-900 font-medium",
                                                            children: [
                                                                Math.floor(Math.random() * 1000).toString().padStart(4, "0"),
                                                                " ops/s"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, i))
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-white rounded-lg shadow p-6 mb-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "space-y-6",
                        onSubmit: (e)=>{
                            e.preventDefault();
                            calculateMatch();
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "name",
                                                className: "form-input",
                                                value: formData.name,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                name: "email",
                                                className: "form-input",
                                                value: formData.email,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Phone"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "tel",
                                                name: "phone",
                                                className: "form-input",
                                                value: formData.phone,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Guardian or Emergency Contact"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "guardianContact",
                                                className: "form-input",
                                                value: formData.guardianContact,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                required: true
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "form-label",
                                        children: "Interests & Activities"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        name: "interests",
                                        className: "form-input",
                                        rows: 4,
                                        value: formData.interests,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    [e.target.name]: e.target.value
                                                })),
                                        placeholder: "Tell us about your interests, hobbies, and activities you enjoy...",
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "support-needs-section",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "support-needs-title",
                                        children: "Support Needs"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "support-needs-grid",
                                        children: supportNeeds.map((need, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "support-needs-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "checkbox",
                                                        id: `need-${index}`,
                                                        className: "support-needs-checkbox",
                                                        checked: formData.supportNeeds.includes(need),
                                                        onChange: (e)=>setFormData((prev)=>({
                                                                    ...prev,
                                                                    supportNeeds: e.target.checked ? [
                                                                        ...prev.supportNeeds,
                                                                        need
                                                                    ] : prev.supportNeeds.filter((n)=>n !== need)
                                                                }))
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: `need-${index}`,
                                                        className: "support-needs-label",
                                                        children: need
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "form-label",
                                        children: "Which agency are you connected with or willing to connect with?"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        name: "agency",
                                        className: "form-input",
                                        value: formData.agency,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    [e.target.name]: e.target.value
                                                })),
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "",
                                                children: "Select an agency"
                                            }),
                                            agencyOptions.map((agency)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: agency,
                                                    children: agency
                                                }, agency))
                                        ]
                                    }),
                                    formData.agency === "Other" && /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        name: "otherAgency",
                                        className: "form-input mt-2",
                                        placeholder: "Please specify",
                                        value: formData.otherAgency,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    [e.target.name]: e.target.value
                                                }))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "checkbox",
                                        name: "consent",
                                        className: "form-checkbox",
                                        checked: formData.consent,
                                        onChange: (e)=>setFormData((prev)=>({
                                                    ...prev,
                                                    [e.target.name]: e.target.checked
                                                })),
                                        required: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "text-sm text-gray-700",
                                        children: "I give consent to share my contact information with my matches"
                                    })
                                ]
                            }),
                            userType === "individual" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Agency"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "agency",
                                                className: "form-input",
                                                value: formData.agency,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Strengths"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                name: "strengths",
                                                className: "form-input",
                                                rows: 4,
                                                value: formData.strengths,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "Tell us about your strengths...",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Support with daily activities"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid md:grid-cols-2 gap-4",
                                                children: [
                                                    "Dressing",
                                                    "Cooking",
                                                    "Personal Care",
                                                    "Transportation",
                                                    "Other"
                                                ].map((activity)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                name: "dailyActivities",
                                                                value: activity,
                                                                className: "form-checkbox",
                                                                checked: (formData.dailyActivities ?? []).includes(activity),
                                                                onChange: (e)=>setFormData((prev)=>({
                                                                            ...prev,
                                                                            dailyActivities: e.target.checked ? [
                                                                                ...prev.dailyActivities ?? [],
                                                                                e.target.value
                                                                            ] : prev.dailyActivities?.filter((a)=>a !== e.target.value)
                                                                        }))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-gray-800",
                                                                children: activity
                                                            })
                                                        ]
                                                    }, activity))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Mobility assistance"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid md:grid-cols-2 gap-4",
                                                children: [
                                                    "Wheelchair",
                                                    "Walker",
                                                    "Transferring",
                                                    "None"
                                                ].map((assistance)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                name: "mobilityAssistance",
                                                                value: assistance,
                                                                className: "form-checkbox",
                                                                checked: (formData.mobilityAssistance ?? []).includes(assistance),
                                                                onChange: (e)=>setFormData((prev)=>({
                                                                            ...prev,
                                                                            mobilityAssistance: e.target.checked ? [
                                                                                ...prev.mobilityAssistance ?? [],
                                                                                e.target.value
                                                                            ] : prev.mobilityAssistance?.filter((a)=>a !== e.target.value)
                                                                        }))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-gray-800",
                                                                children: assistance
                                                            })
                                                        ]
                                                    }, assistance))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Medication assistance"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                name: "medicationAssistance",
                                                className: "form-input",
                                                rows: 4,
                                                value: formData.medicationAssistance,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "Tell us about your medication assistance..."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Days/times support needed"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "supportTimes",
                                                className: "form-input",
                                                value: formData.supportTimes,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "e.g., mornings, afternoons, evenings"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Qualities important in DSP"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid md:grid-cols-2 gap-4",
                                                children: [
                                                    "Patience",
                                                    "Sense of humor",
                                                    "Clear communication",
                                                    "Respect for boundaries",
                                                    "Other"
                                                ].map((quality)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                name: "dspQualities",
                                                                value: quality,
                                                                className: "form-checkbox",
                                                                checked: (formData.dspQualities ?? []).includes(quality),
                                                                onChange: (e)=>setFormData((prev)=>({
                                                                            ...prev,
                                                                            dspQualities: e.target.checked ? [
                                                                                ...prev.dspQualities ?? [],
                                                                                e.target.value
                                                                            ] : prev.dspQualities?.filter((q)=>q !== e.target.value)
                                                                        }))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-gray-800",
                                                                children: quality
                                                            })
                                                        ]
                                                    }, quality))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Anything else"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                name: "anythingElse",
                                                className: "form-input",
                                                rows: 4,
                                                value: formData.anythingElse,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "Anything else you'd like to share..."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            userType === "student" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Strengths"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                name: "strengths",
                                                className: "form-input",
                                                rows: 4,
                                                value: formData.strengths,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "Tell us about your strengths...",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Professional goals"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                name: "professionalGoals",
                                                className: "form-input",
                                                rows: 4,
                                                value: formData.professionalGoals,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "Tell us about your professional goals...",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Experience in disability community"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                name: "experience",
                                                className: "form-input",
                                                rows: 4,
                                                value: formData.experience,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "Tell us about your experience in the disability community...",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Support interested in providing"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid md:grid-cols-2 gap-4",
                                                children: [
                                                    "Respite",
                                                    "Job coaching",
                                                    "Daily living",
                                                    "Education",
                                                    "Other"
                                                ].map((support)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "checkbox",
                                                                name: "supportProvided",
                                                                value: support,
                                                                className: "form-checkbox",
                                                                checked: (formData.supportProvided ?? []).includes(support),
                                                                onChange: (e)=>setFormData((prev)=>({
                                                                            ...prev,
                                                                            supportProvided: e.target.checked ? [
                                                                                ...prev.supportProvided ?? [],
                                                                                e.target.value
                                                                            ] : prev.supportProvided?.filter((s)=>s !== e.target.value)
                                                                        }))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-gray-800",
                                                                children: support
                                                            })
                                                        ]
                                                    }, support))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Willing to match with agency"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "grid md:grid-cols-2 gap-4",
                                                children: [
                                                    "Yes",
                                                    "No"
                                                ].map((willing)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "radio",
                                                                name: "agencyMatch",
                                                                value: willing,
                                                                className: "form-radio",
                                                                checked: formData.agencyMatch === willing,
                                                                onChange: (e)=>setFormData((prev)=>({
                                                                            ...prev,
                                                                            [e.target.name]: e.target.value
                                                                        }))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-gray-800",
                                                                children: willing
                                                            })
                                                        ]
                                                    }, willing))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Availability"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "availability",
                                                className: "form-input",
                                                value: formData.availability,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "e.g., Monday, Wednesday, 9:00 AM - 5:00 PM"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-label",
                                                children: "Anything else"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                name: "anythingElse",
                                                className: "form-input",
                                                rows: 4,
                                                value: formData.anythingElse,
                                                onChange: (e)=>setFormData((prev)=>({
                                                            ...prev,
                                                            [e.target.name]: e.target.value
                                                        })),
                                                placeholder: "Anything else you'd like to share..."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "btn-primary w-full",
                                disabled: loading,
                                children: loading ? "Finding Matches..." : "Find Matches"
                            })
                        ]
                    })
                }),
                matches.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    className: "mt-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl font-display font-bold text-unc-navy mb-6",
                            children: "Your Matches"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-6",
                            children: matches.map((match, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "bg-unc-light-blue p-6 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-between items-start mb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                className: "text-xl font-bold",
                                                children: [
                                                    "Match Score: ",
                                                    match.score,
                                                    "/100"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "font-bold mb-2",
                                                    children: "Compatibility Factors:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "list-disc pl-6",
                                                    children: match.compatibility.map((factor, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: factor
                                                        }, i))
                                                })
                                            ]
                                        }),
                                        match.contactInfo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "border-t pt-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "font-bold mb-2",
                                                    children: "Contact Information:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "Email: ",
                                                        match.contactInfo.email
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "Phone: ",
                                                        match.contactInfo.phone
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        }),
                        matches.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(MatchAssistant, {
                            matchScore: matches[0].score,
                            compatibilityFactors: matches[0].compatibility,
                            userType: userType
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/keshu/Desktop/CIDD_REPO/app/find-match/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,947,60,291,93], () => (__webpack_exec__(5759)));
module.exports = __webpack_exports__;

})();