//RUNS SCRIPT WHEN PAGE LOADS
//chrome.tabs.onUpdated.addListener(function (activeTab) {
//    chrome.tabs.executeScript(null, {file: 'randomRaptor.js'});
//});

chrome.browserAction.onClicked.addListener(function (activeTab) {
	chrome.tabs.executeScript(null, {file: "randomRaptor.js"});
});

//chrome.runtime.onInstalled.addListener(function () {
//	var updated = "update.html";
//	chrome.tabs.create({ url: updated });
//});