var ba = chrome.browserAction;

/**
 * @link http://stackoverflow.com/a/19839880
 */
function setCount(unreadItemCount) {
  ba.setBadgeBackgroundColor({color: [240, 171, 0, 128]});

  var text = '';

  if (unreadItemCount) {
    text += unreadItemCount;
  }

  ba.setBadgeText({text: text});
}

function checkServer() {
  // @todo Use the API to find the actual count.
  setCount(Math.floor(Math.random() * 11));
}

var checkInterval = 1;
chrome.alarms.create("checkServer", {
    delayInMinutes: checkInterval,
    periodInMinutes: checkInterval
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === "checkServer") {
        checkServer();
    }
});

checkServer();
