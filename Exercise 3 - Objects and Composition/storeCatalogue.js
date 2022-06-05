function storeCatalogue(products) {
    let productObj = {};
    let firstLetters = [];
    products = products.sort((a, b) => a.localeCompare(b));

    for (let product of products) {
        let [productName, productPrice] = product.split(" : ");
        productPrice = Number(productPrice);
        productObj[productName] = productPrice;
    }
    let keys = Object.keys(productObj);
    for (let key of keys) {
        firstLetters.push(key[0]);
    }
    for (let i = 0; i < firstLetters.length; i++) {
        if (firstLetters[i] === firstLetters[i + 1]) {
            continue;
        } else {
            console.log(firstLetters[i])
        }
        for (let product in productObj) {
            if (product[0] === firstLetters[i]) {
                console.log(`  ${product}: ${productObj[product]}`)
            }
        }
    }
}

storeCatalogue(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
);
storeCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);