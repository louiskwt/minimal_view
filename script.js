const filteredList = [
    "*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
    "*://*.adtechus.com/*",
	"*://*.adsrvr.org/*",
    "*://choices.trustarc.com/*",
    "*://*.goo.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.price.com.hk/scripts*",
	"*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}},
    {urls: filteredList},
    ["blocking"]
)