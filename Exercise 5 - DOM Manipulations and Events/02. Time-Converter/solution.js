function attachEventsListeners() {
    let daysInputElement = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');

    let hoursInputElement = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');

    let minutesInputElement = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');

    let secondsInputElement = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', onClickDays);
    hoursBtn.addEventListener('click', onClickHours);
    minutesBtn.addEventListener('click', onClickMinutes);
    secondsBtn.addEventListener('click', onClickSeconds);

    function onClickDays(){
        let currentInput = daysInputElement.value;
        hoursInputElement.value = Number(currentInput) * 24;
        minutesInputElement.value = Number(currentInput) * 1440;
        secondsInputElement.value = Number(currentInput) * 86400;
    }
    function onClickHours(){
        let currentInput = hoursInputElement.value;
        daysInputElement.value = Number(currentInput) / 24;
        minutesInputElement.value = Number(currentInput) * 60;
        secondsInputElement.value = Number(currentInput) * 3600;
    }
    function onClickMinutes(){
        let currentInput = minutesInputElement.value;
        hoursInputElement.value = Number(currentInput) / 60;
        daysInputElement.value = Number(currentInput) / 1440;
        secondsInputElement.value = Number(currentInput) * 60;
    }
    function onClickSeconds(){
        let currentInput = secondsInputElement.value;
        minutesInputElement.value = Number(currentInput) / 60;
        hoursInputElement.value = Number(currentInput) / 3600;
        daysInputElement.value = Number(currentInput) / 86400;
    }
}
