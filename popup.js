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

document.addEventListener('DOMContentLoaded', function() {
  setCount(Math.floor(Math.random() * 11));
});
