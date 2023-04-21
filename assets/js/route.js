/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright codebyB 2023 All rights reserved
 * @author codebyB <pascoal.goncalves.bruno@gmail.com>
 */

"use strict";

import { updateWeather, error404 } from "./app.js";

const defaultLocation = "#/weather?lat=48.914155&lon=2.285369"; // Asnières sur seine

const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords;

      updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    },
    (err) => {
      window.location.hash = defaultLocation;
    }
  );
};

/**
 *
 * @param {string} query
 */

const searchedLocation = (query) => updateWeather(...query.split("&"));
// update weather ("lat=48.914155", "2.285369")

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

const checkHash = function () {
  const requestURL = window.location.hash.slice(1);

  const [route, query] = requestURL.includes
    ? requestURL.split("?")
    : [requestURL];

  routes.get(route) ? routes.get(route)(query) : error404();
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
