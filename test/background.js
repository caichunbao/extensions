console.log(chrome)

// chrome.declarativeNetRequest.getEnabledRulesets(rulesetIds => console.log(rulesetIds));

// const rules = {
//     addRules: [
//         {
//             id: 1,
//             priority: 2,
//             action: {
//                 type: "modifyHeaders",
//                 responseHeaders: [
//                     {
//                         header: h3,
//                         operation: "append",
//                         value: "v3"
//                     }
//                 ]
//             },
//             condition: {
//                 urlFilter: "https://*.17xueba.com/*",
//                 resourceTypes: ["xmlhttprequest"]
//             }
//         },
//     ],
// };

// chrome.declarativeNetRequest.updateDynamicRules({
//     addRules: [
//         {
//             id: 1,
//             priority: 1,
//             action: {
//                 type: "modifyHeaders",
//                 responseHeaders: [
//                     {
//                         header: h3,
//                         operation: "append",
//                         value: "v3"
//                     }
//                 ]
//             },
//             condition: {
//                 urlFilter: "https://*.17xueba.com/*",
//                 resourceTypes: ["xmlhttprequest"]
//             }
//         }
//     ]
// }, () => {
//     if (chrome.runtime.lastError) {
//         console.error(chrome.runtime.lastError);
//     } else {
//         chrome.declarativeNetRequest.getDynamicRules(rules => console.log(rules));
//     }
// });

const blockUrls = [
    "https://xue.17xueba.com/m/msg/noRead.vpage"
]

chrome.bookmarks.getTree().then(res => {
    console.log(res);
})

// "regexSubstitution": "chrome-extension://ijooodghppjpibbladoieodjbhoeoajh/data.json"

// blockUrls.forEach((domain, index) => {
//     let id = index + 1;

//     chrome.declarativeNetRequest.updateDynamicRules(
//         {
//             addRules:[
//                 {
//                     id: id,
//                     priority: 1,
//                     action: {
//                         type: "redirect",
//                         redirect: {
//                             regexSubstitution: "chrome-extension://ijooodghppjpibbladoieodjbhoeoajh/data.json"
//                         }
//                     },
//                     condition: {
//                         urlFilter: domain,
//                         resourceTypes: ["main_frame"]
//                     }
//                 }
//             ],
//             removeRuleIds: [id]
//         },
//     )
// })


chrome.declarativeNetRequest.getEnabledRulesets(rulesetIds => console.log(rulesetIds));


// {
//     id: 1,
//     priority: 1,
//     action: {
//         type: "modifyHeaders",
//         responseHeaders: [
//             {
//                 header: h3,
//                 operation: "append",
//                 value: "v3"
//             }
//         ]
//     }
// }

//         {
//             id: 2,
//             priority: 1,
//             action: {
//                 type: "redirect",
//                 redirect: {
//                     extensionPath: "/data.json"
//                 }
//             },
//             condition: {
//                 urlFilter: "https://*.17xueba.com/m/msg/noRead.vpage",
//                 resourceTypes: ["main_frame", "xmlhttprequest"]
//             }
//         }