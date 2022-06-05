function townsToJSON(arr) {
    let resultObj = {};
    let resultArr = [];
    let headings = arr.shift()

    for (let line of arr) {
        let townInfo = line.split("| ");
        townInfo.shift();
        townInfo = townInfo.join("|").split(" |");
        townInfo.pop();
        let Town = townInfo[0];
        let Latitude = Number(townInfo[1]).toFixed(2);
        Latitude = Number(Latitude);
        let Longitude = Number(townInfo[2]).toFixed(2);
        Longitude = Number(Longitude);

        resultObj = { Town, Latitude, Longitude };
        resultArr.push(resultObj);
    }
    console.table(JSON.stringify(resultArr));

}

townsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
);
townsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |']
);