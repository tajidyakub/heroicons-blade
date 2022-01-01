/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/scripts/heroicons.js ***!
  \****************************************/
/**
 * Fetch and replacing the icons during the event
 * DOMContentLoaded with window.fetch.
 */
var request = function request(url) {
  return new Request(url, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Accept': 'image/svg+xml',
      'User-Agent': 'tj/heroicons-blade https://github.com/tajidyakub/heroicons-blade.git'
    }
  });
};
/**
 * Insert the <path> section of the fetched svg text file
 * into the designated Element.
 * 
 * @param {string} svg 
 * @param {Element} el 
 */


var insertPath = function insertPath(svgText, el) {
  var newEl = document.createElement('div');
  newEl.innerHTML = svgText; // Standard style

  el.style.display = 'inline';
  el.style.marginBottom = '.2rem';
  newEl.querySelectorAll('path').forEach(function (p) {
    el.appendChild(p);
  });
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('svg[data-group="heroicons"]').forEach(function (heroIcon) {
    var iconPropName = heroIcon.dataset.name;
    var iconPropNameSplitted = iconPropName.split(":");
    var iconType = iconPropNameSplitted[0];
    var iconName = iconPropNameSplitted[1];
    var iconPath = "/icons/".concat(iconType, "/").concat(iconName, ".svg");
    window.fetch(request(iconPath)).then(function (res) {
      if (res.ok) {
        return res.text();
      }

      console.error('Failed to fetch the svg icon.');
    }).then(function (data) {
      return insertPath(data, heroIcon);
    })["catch"](function (err) {
      return console.error(err.message);
    });
  });
});
/******/ })()
;