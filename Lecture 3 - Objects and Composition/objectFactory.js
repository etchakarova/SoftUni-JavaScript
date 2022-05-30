function objectFactory(){
    let result = [];
    for (let order of orders) {
        const object = {};
        const template = order.template;
        for (let property in template) {
            object[property] = template[property];

        }
        const parts = order.parts;
        for (let part of parts) {
            object[part] = library[part];
        }

        result.push(object);
    }
return result;
}

objectFactory()