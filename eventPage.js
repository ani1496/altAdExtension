chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    chrome.browserAction.addListener(function(tab){
		alert(tabId);
    }

  }
})