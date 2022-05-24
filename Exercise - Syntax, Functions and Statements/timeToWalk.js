function timeToWalk(steps, footprintInM, speedInKMperH) {
    let speedInMperS = speedInKMperH * (5 / 18);
    let distance = steps * footprintInM;
    let amountOfBreaks = Math.floor(distance / 500);
    let timeToUni = (distance / speedInMperS) + (amountOfBreaks * 60);
    let hours = Math.floor(timeToUni / 3600)
    let minutes = Math.floor(timeToUni / 60);
    let seconds = Math.ceil(timeToUni - (minutes * 60))
    if (hours <= 9) {
        hours = "" + 0 + hours;
    }
    if (minutes <= 9) {
        minutes = "" + 0 + minutes;
    }
    if (seconds <= 9) {
        seconds = "" + 0 + seconds;
    }
    console.log(`${hours}:${minutes}:${seconds}`)
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);