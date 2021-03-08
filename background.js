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
