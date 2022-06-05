function heroicInventory(heroes) {
    let result = [];
    for (hero of heroes) {
        let [name, level, items] = hero.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        result.push({ name, level, items });
    }

    return JSON.stringify(result);

}
console.log(heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 /']
));
console.log(heroicInventory(
    ['Jake / 1000 / Gauss, HolidayGrenade']
));
