/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codebyB 2023 All rights reserved
 * @author codebyB <pascoal.goncalves.bruno@gmail.com>
 */

"use strict";

const api_key = "03de582a9352a75067a88f2b8fbb70ae";

/**
 * Fetch data from the server
 * @param {string} URL
 * @param {Function} callback
 */

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  /**
   *
   * @param {string} query Search query e.g.: "London", "New York"
   */
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
