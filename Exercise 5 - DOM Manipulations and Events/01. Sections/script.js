function create(words) {

   let contentElement = document.getElementById('content');
   for (let word of words) {
      let newParagraphElement = document.createElement('p');
      let newDivElement = document.createElement('div');

      newParagraphElement.textContent = word;
      newParagraphElement.style.display = "none";

      newDivElement.appendChild(newParagraphElement);

      contentElement.appendChild(newDivElement);

      newDivElement.addEventListener('click', clicked)
      
      function clicked() {
         newParagraphElement.style.display = "";

      }
   }
}