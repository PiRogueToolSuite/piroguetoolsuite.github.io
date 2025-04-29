/**
 * Scripts which manages Code Toggle tabs.
 * Overrrides @hyas/doks-core/assets/js/tabs.js only if
 * config/_default/module.toml declares [[mounts]]
 * in the appropriate order :
 * # Must be first
 * [[mounts]]
 *   source = "assets"
 * # Must be after
 * [[mounts]]
 *   source = "node_modules/@hyas/doks-core/assets"
 */
import { Tab } from 'bootstrap';

let allTabs = document.querySelectorAll('[data-toggle-tab]');

const TAB_PREFERENCES_KEYSTORE_PREFIX = 'tab-preferences';

function tabPreference(tabNode, toggleTabData)
{
  if (!window.localStorage) return null;

  let parentTabNode = tabNode.parentNode;

  if (!parentTabNode) return null;

  let navTabId = parentTabNode.id;
  if (toggleTabData !== undefined) {
    window.localStorage.setItem(`${TAB_PREFERENCES_KEYSTORE_PREFIX}-${navTabId}`, toggleTabData);
  }
  return window.localStorage.getItem(`${TAB_PREFERENCES_KEYSTORE_PREFIX}-${navTabId}`);
}

// Clear 'old behavior' if exists
if (window.localStorage) {
  try {
    window.localStorage.removeItem('configLangPref');
  } catch(err) {
    // Silently fail
  }
}

allTabs.forEach((currTab) => {
  let tabInstance = new Tab(currTab);
  currTab.addEventListener('shown.bs.tab', (event) => {
    let toggleTabValue = currTab.getAttribute('data-toggle-tab');
    if (!toggleTabValue) return;

    // Save tab preference
    tabPreference(currTab, toggleTabValue);
  });
  currTab.addEventListener('click', (event) => {
    let toggleTabValue = currTab.getAttribute('data-toggle-tab');
    if (!toggleTabValue) return;

    // Try to switch all 'same' tab at the same time on the current page
    let otherTabs = document.querySelectorAll('[data-toggle-tab=' + toggleTabValue + ']');
    for(let otherTab of otherTabs) {
      if (currTab === otherTab) continue;
      let instTab = Tab.getInstance(otherTab);
      instTab.show();
    }
  });
});

// Reload Tab Pref
if (window.localStorage) {
  for (let k = 0; k < window.localStorage.length; k++) {
    let prefKey = window.localStorage.key(k);
    if (prefKey && prefKey.startsWith(TAB_PREFERENCES_KEYSTORE_PREFIX)) {
      let prefValue = window.localStorage.getItem(prefKey);
      let selectedTabs = document.querySelectorAll('[data-toggle-tab=' + prefValue + ']');
      for(let elTab of selectedTabs) {
        let instTab = Tab.getInstance(elTab);
        instTab.show();
      }
    }
  }
}
