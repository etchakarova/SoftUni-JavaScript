function addItem() {
    let input = document.getElementById('newItemText').value;
    let newListElement = document.createElement('li');
    newListElement.textContent = input;
    document.getElementById("items").appendChild(newListElement);
    document.getElementById('newItemText').value = '';

}