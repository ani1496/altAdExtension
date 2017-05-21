function urlToDomain(url) {
    var domain;

    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];
    //find & remove "?"
    domain = domain.split('?')[0];
	splitArr = domain.split('.'),
    arrLen = splitArr.length;

    //extracting the root domain here
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    }
    return domain;
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	if(changeInfo.status=='complete' && tab.active){
		//alert("Helo!");

		//var tab = tab[0];

	    // A tab is a plain object that provides information about the tab.
	    // See https://developer.chrome.com/extensions/tabs#type-Tab
	    var url = tab.url;

	    alert(urlToDomain(url));

	}
});


  // chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

  //    // since only one tab should be active and in the current window at once
  //    // the return variable should only have one entry
  //    var activeTab = arrayOfTabs[0];
  //    var activeTabId = activeTab.id; // or do whatever you need
	 // // chrome.browserAction.onClicked.addListener(function(tab) { 
		// // 	alert(activeTabId);
	 // // });
  // });

