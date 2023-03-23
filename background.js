
var filter = { urls: ["https://api.endclothing.com/customer/rest/v2/gb/email-availability"] };

var opt_extraInfoSpec = "";
var ShapeHeaderA = ""
var ShapeHeaderA0 = ""
var ShapeHeaderB = ""
var ShapeHeaderC = ""
var ShapeHeaderD = ""
var ShapeHeaderF = ""
var ShapeHeaderZ = ""
results2Sent = false
resultsSent = false
resultsSentThree = false
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


// chrome.extension.onRequest.addListener(function (request, sender) {
//     console.log(request.message);
// });
let aString = ""
chrome.webNavigation.onCompleted.addListener(function (tabId, changeInfo, tab) {
    //  if (changeInfo.status == 'complete')
    setTimeout(function () {
        {
            // delay(5000)

            chrome.tabs.executeScript(null, { code: `var targetCoordEl = document.querySelector('#email'); if (targetCoordEl) { var result = JSON.stringify(targetCoordEl.getClientRects()); result; }` },
                function (results) {
                    if (resultsSent != true) {
                        console.log(results); var xhrRect = new XMLHttpRequest();
                        xhrRect.open("POST", "http://127.0.0.1:3000/clientRect", true);
                        xhrRect.setRequestHeader('Content-Type', 'application/json');
                        xhrRect.send(JSON.stringify({
                            results
                        }));
                        resultsSent = true
                    }
                });

            chrome.tabs.executeScript(null, { code: `screenPos = JSON.stringify({offsetY: window.screen.height - window.innerHeight, offsetX: window.screen.width - window.innerWidth}); let offsetScreen = JSON.parse(screenPos); screenPos` },
                function (results2) {
                    if (results2Sent != true) {
                        var xhrOffset = new XMLHttpRequest();
                        xhrOffset.open("POST", "http://127.0.0.1:3000/offset", true);
                        xhrOffset.setRequestHeader('Content-Type', 'application/json');
                        xhrOffset.send(JSON.stringify({
                            results2
                        }));

                        results2Sent = true
                    }
                });
            chrome.tabs.executeScript(null, { code: `var targetCoordElButton = document.querySelector('#app-container > div.sc-1eymrxb-0.eqfGZp > div > div > div > div > form > div:nth-child(3) > button > div'); if (targetCoordElButton) { var result2 = JSON.stringify(targetCoordElButton.getClientRects()); result2; }` },
                function (results3) {
                    if (resultsSentThree != true) {
                        console.log(results3);
                        var xhrRectButton = new XMLHttpRequest();
                        xhrRectButton.open("POST", "http://127.0.0.1:3000/buttonLocation", true);
                        xhrRectButton.setRequestHeader('Content-Type', 'application/json');
                        xhrRectButton.send(JSON.stringify({
                            results3
                        }));
                        resultsSentThree = true
                    }
                });



        }
    }, 10000); // 10 seconds in milliseconds
});

;

chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {

        for (var i = 0; i < details.requestHeaders.length; ++i) {
            // if (details.requestHeaders[i].name === 'exj5WzXnUF-b') {
            //     console.log("ShapeHeaderB: " + details.requestHeaders[i].value)
            // }
            if (details.requestHeaders[i].name === "exj5WzXnUF-a") {
                ShapeHeaderA = details.requestHeaders[i].value
                console.log("Headers Grabbed")
                // chrome.tabs.executeScript(null, { code: "screenPos = JSON.stringify({offsetY: window.screen.height - window.innerHeight, offsetX: window.screen.width - window.innerWidth}); let offset = JSON.parse(screenPos.result.value); offset" }),
                //     function (results2) { console.log(results2); };


                //console.log(ShapeHeaderA
            } else if (details.requestHeaders[i].name == "exj5WzXnUF-b") {
                ShapeHeaderB = details.requestHeaders[i].value
                console.log(ShapeHeaderB)
                // console.log('SHAPEHEADERBHERE')
                // console.log(value)
            } else if (details.requestHeaders[i].name == "exj5WzXnUF-a0") {
                ShapeHeaderA0 = details.requestHeaders[i].value
                console.log("Headers Grabbed")
            } else if (details.requestHeaders[i].name == "exj5WzXnUF-c") {
                ShapeHeaderC = details.requestHeaders[i].value
                console.log("Headers Grabbed")
            } else if (details.requestHeaders[i].name == "exj5WzXnUF-d") {
                ShapeHeaderD = details.requestHeaders[i].value
                console.log("Headers Grabbed")
            } else if (details.requestHeaders[i].name == "exj5WzXnUF-f") {
                ShapeHeaderF = details.requestHeaders[i].value
                console.log("Headers Grabbed")
            } else if (details.requestHeaders[i].name == "exj5WzXnUF-z") {
                ShapeHeaderZ = details.requestHeaders[i].value
                console.log("Headers Grabbed")
            }

            // let data = { "headerA": ShapeHeaderA, "headerB": ShapeHeaderB, "headerC": ShapeHeaderC, "headerD": ShapeHeaderD, "headerF": ShapeHeaderF, "headerZ": ShapeHeaderZ, }

        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:3000/headers", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            headerA: ShapeHeaderA,
            headerB: ShapeHeaderB,
            headerC: ShapeHeaderC,
            headerD: ShapeHeaderD,
            headerF: ShapeHeaderF,
            headerZ: ShapeHeaderZ
        }));
        return { cancel: true };
    },
    { urls: ["https://api.endclothing.com/customer/rest/v2/gb/email-availability"] },
    ["blocking", "requestHeaders"]
);

// chrome.webRequest.onErrorOccurred.addListener(
//     function (details) {
//         // console.log(details.requestHeaders)
//         for (var i = 0; i < details.requestHeaders.length; ++i) {
//             console.log(details.requestHeaders[i].value)
//             // if (details.requestHeaders[i].name === 'User-Agent') {
//             //     console.log(details.requestHeaders[i].value)
//             //     break;
//             // }
//         }
//         return { requestHeaders: details.requestHeaders };
//     },
//     { urls: ["<all_urls>"] },
//     ["extraHeaders"]
// );