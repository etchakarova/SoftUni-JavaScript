function search() {
   let towns = document.querySelectorAll('ul#towns li')
   let resultElemenet = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;

   let matches = 0;

   for (let town of towns) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = '';

   }
   for (let town of towns) {
      let text = town.textContent;

      if (text.match(searchText)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }
   resultElemenet.textContent = `${matches} matches found`;
}
