function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(e) {
    let inputElement = JSON.parse(document.querySelector('textarea').value);
    inputElement.forEach(x => {

      let tr = document.createElement('tr');

      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = x.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      let p1 = document.createElement('p');
      p1.textContent = x.name;
      td2.appendChild(p1);
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = Number(x.price);
      td3.appendChild(p2);
      tr.appendChild(td3);

      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(x.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);

      document.querySelector('tbody').appendChild(tr);
    });
  }

  function buy(e) {
    let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter(c => c.checked);
    let boughtFurniture = [];
    let finalPrice = 0;
    let decoFactor = 0;

    checkboxes.forEach(x => {
      let mainParent = x.parentElement.parentElement;
      let furnitureInfo = Array.from(mainParent.querySelectorAll('p'));

      boughtFurniture.push(furnitureInfo[0].textContent);
      finalPrice += Number(furnitureInfo[1].textContent);
      decoFactor += Number(furnitureInfo[2].textContent);
    });

    let output = document.querySelectorAll('textarea')[1];
    output.textContent += `Bought furniture: ${boughtFurniture.join(', ')}\r\n`;
    output.textContent += `Total price: ${finalPrice.toFixed(2)}\r\n`;
    output.textContent += `Average decoration factor: ${decoFactor / checkboxes.length}`

  }
}
