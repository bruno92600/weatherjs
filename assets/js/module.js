/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codebyB 2023 All rights reserved
 * @author codebyB <pascoal.goncalves.bruno@gmail.com>
 */

export const weekDayNames = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

export const monthNames = [
  "Jan",
  "Fev",
  "Mar",
  "Avr",
  "Mai",
  "Juin",
  "Juil",
  "Aou",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 *
 * @param {number} dateUnix
 * @param {number} timezone
 * @returns {string}
 */

export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 *
 * @param {number} timeUnix
 * @param {number} timezone
 * @returns {string}
 */

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}: ${minutes}`;
};

/**
 *
 * @param {number} mps
 * @returns {number}
 */

export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Bonne",
    message:
      "La qualité de l'air est considérée comme satisfaisante, et la pollution de l'air présente peu ou pas de risque.",
  },
  2: {
    level: "Plutôt bonne",
    message:
      "La qualité de l'air est acceptable; cependant, pour certains polluants, il y a un problème de santé modéré pour un très petit nombre de personnes qui sont particulièrement sensibles à la pollution de l'air.",
  },
  3: {
    level: "Modérée",
    message:
      "Les membres des groupes sensibles peuvent ressentir des effets sur la santé. Le grand public ne risque pas d'être touché.",
  },
  4: {
    level: "Mauvaise",
    message:
      "Tout le monde peut commencer à ressentir des effets sur la santé; les membres des groupes sensibles peuvent subir des effets plus graves sur la santé.",
  },
  5: {
    level: "Très mausaise",
    message:
      "Avertissements sanitaires des conditions d'urgence. Toute la population est plus susceptible d'être touchée.",
  },
};
