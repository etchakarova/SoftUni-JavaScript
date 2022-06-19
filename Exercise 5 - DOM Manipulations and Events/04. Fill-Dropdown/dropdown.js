function addItem() {
    let newOptionElement = document.createElement('option');
    let newItemTextInput = document.getElementById('newItemText');
    let newItemValueInput = document.getElementById('newItemValue');


    newOptionElement.textContent = newItemTextInput.value;
    newOptionElement.value = newItemValueInput.value;

    let menu = document.querySelector("#menu");
    menu.appendChild(newOptionElement);

    newItemTextInput.value = '';
    newItemValueInput.value = '';

}