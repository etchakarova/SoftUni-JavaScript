function createSortedList() {
    let result = { elements: [], size: 0 };
    let obj = {
        add: (el) => {
            result.elements.push(el);
            result.elements.sort((a, b) => a - b);
            obj.size = result.elements.length;
            return result;
        },
        get: (i) => {
            if (result.elements[i] != undefined) {
                return result.elements[i];
            }
        },

        remove: (i) => {
            if (result.elements[i] != undefined) {
                result.elements.splice(i, 1);
                result.elements.sort((a, b) => a - b);
                obj.size = result.elements.length;
                return result;
            }
        },

        size: result.elements.length,
    };

    return obj;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
