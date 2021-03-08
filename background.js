/*
*
* Chrome extension popups can have a maximum height of 600px and maximum width of 800px. Changing the width or height using CSS on the html or body element will just cause scroll bars (as you have noticed) when over these maximums. Using something like window.resizeBy(x,y) will have no effect.
* You can hide the scrollbars using CSS but that will not have the desired effect of making the page bigger than the maximums imposed by Chrome.
* One option might be to use a JavaScript dialog/modal in the page when the browser/page action is clicked instead of using the built in popup.
* Some references to similar questions:
* http://groups.google.com/a/chromium.org/group/chromium-extensions/browse_thread/thread/9c921612e2692376
* Increase max popup width in a Chrome extension?
*
*/



chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  id: "main_action",
  title: "Foo",
  contexts: ["browser_action"],
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "main_action") {
    // Execute foo using tab id
    foo(tab.id);
  }
});

const foo = (tabId) => { console.log(`Foo called on tab with id ${tabId}`) };
