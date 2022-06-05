function lowestPricesInCities(arr) {
    let result = {};
    for (element of arr) {
        let [town, product, price] = element.split(" | ");
        price = Number(price);
        if (result.hasOwnProperty(product)) {
            if (result[product].price > price) {
                result[product].price = price;
                result[product].town = town;
            }
        } else {
            result[product] = {
                price,
                town
            }
        }
    }
    for (product in result) {
        console.log(`${product} -> ${result[product].price} (${result[product].town})`)
    }
}

lowestPricesInCities(
    ["Sofia City | Audi | 100000",
        "Sofia City | BMW | 100000",
        "Sofia City | Mitsubishi | 10000",
        "Sofia City | Mercedes | 10000",
        "Sofia City | NoOffenseToCarLovers | 0",
        "Mexico City | Audi | 1000",
        "Mexico City | BMW | 99999",
        "Mexico City | Mitsubishi | 10000",
        "New York City | Mitsubishi | 1000",
        "Washington City | Mercedes | 1000"
    ]);
