export function epochToDate(epochSeconds) {
  return new Date(epochSeconds * 1000).toLocaleDateString();
}

export function secondsToTime(seconds) {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().slice(11, 19);
}

