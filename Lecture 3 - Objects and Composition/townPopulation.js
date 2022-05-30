function townPopulation(){
        let cityList = {}
        for (city of cities) {
            let [name, population] = city.split(" <-> ");
            population = Number(population);
            if (cityList[name] != undefined) {
                population += cityList[name];
            }
            cityList[name] = population;
        }
        for (let name in cityList) {
            console.log(`${name} : ${cityList[name]}`);
        }
    }
