function isFilmDurationSumEqualToFlightDuration(filmDurations, flightDuration) {
   const seenDurations = new Set();

   for (const duration of filmDurations) {
      const targetDuration = flightDuration - duration;

      if (seenDurations.has(targetDuration)) {
         return true;
      }

      seenDurations.add(duration);
   }

   return false;
}

const filmDurations = [1, 7, 3, 4];
const flightDuration = 7;
const result = isFilmDurationSumEqualToFlightDuration(filmDurations, flightDuration);
console.log(result);
