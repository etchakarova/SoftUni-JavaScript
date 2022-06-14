function addItem() {
    let input = document.getElementById('newItemText').value;
    let newListElement = document.createElement('li');
    newListElement.textContent = input;
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = "#";

    newListElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', OnDelete);


    document.getElementById("items").appendChild(newListElement);
    input.value = '';

    function OnDelete(event) {
        event.target.parentElement.remove();
    }
}