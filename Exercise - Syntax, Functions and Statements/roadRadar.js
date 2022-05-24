function roadRadar(speed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    if (area === "motorway") {
        if (speed <= motorwayLimit) {
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        } else {
            let difference = speed - motorwayLimit;
            let status;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
        }
    } else if (area === "interstate") {
        if (speed <= interstateLimit) {
            console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
        } else {
            let difference = speed - interstateLimit;
            let status;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`);
        }
    } else if (area === "city") {
        if (speed <= cityLimit) {
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        } else {
            let difference = speed - cityLimit;
            let status;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
        }
    } else if (area === "residential") {
        if (speed <= residentialLimit) {
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        } else {
            let difference = speed - residentialLimit;
            let status;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
        }
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');