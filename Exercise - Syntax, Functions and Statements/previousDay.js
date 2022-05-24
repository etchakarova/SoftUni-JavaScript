function previousDay(year, month, day) {
    let previous = new Date(year, month - 1, day - 1);
    let newYear = previous.getFullYear();
    let newMonth = previous.getMonth() + 1;
    let newDate = previous.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);