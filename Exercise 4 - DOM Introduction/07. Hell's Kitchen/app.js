function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let averageSalary = 0;
      let totalSalary = 0;
      let currAverageSalary = 0;
      let bestName = '';
      let output = {};

      for (let inputElement of input) {
         let restaurantInfo = inputElement.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);

      for (let entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (let [name, salary] of values) {
            totalSalary += salary;
         }

         averageSalary = totalSalary / values.length;

         if (averageSalary > currAverageSalary) {
            currAverageSalary = averageSalary;
            bestName = key;
            totalSalary = 0;
         }
      }
      let print = '';

      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `)

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAverageSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`

      document.querySelector('#workers p').textContent = print;

   }
}