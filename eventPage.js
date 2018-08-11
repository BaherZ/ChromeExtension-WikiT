let menuItem = {
    "id":"wikit",
    "title":"Wikit!",
    "contexts":["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g,']')
}
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId==='wikit' && clickData.selectionText){
        let wikiUrl = "https://en.wikipedia.org/wiki/"+fixedEncodeURI(clickData.selectionText);
        
        chrome.tabs.create({ url: wikiUrl })
    }
})