function encodeAndDecodeMessages() {
    let buttons = Array.from(document.querySelectorAll('#main button'));
    let senderBtn = buttons[0];
    let revicerBtn = buttons[1];
    senderBtn.addEventListener('click', clickedOnEncode);
    revicerBtn.addEventListener('click', clickedOnDecode);

    let textArea = document.querySelectorAll('textarea');
    let senderTextArea = textArea[0];
    let reviecerArea = textArea[1];

    function clickedOnEncode() {
        let newMessage = "";
        for (let char of senderTextArea.value) {
            let currentAsciiNum = char.charCodeAt(0);
            let newAsciiNum = currentAsciiNum += 1;
            let newchar = String.fromCharCode(newAsciiNum);
            newMessage += newchar;
        }
        reviecerArea.value = newMessage;
        senderTextArea.value = '';
    }
    function clickedOnDecode() {
        let newMessage = "";
        for (let char of reviecerArea.value) {
            let currentAsciiNum = char.charCodeAt(0);
            let newAsciiNum = currentAsciiNum -= 1;
            let newchar = String.fromCharCode(newAsciiNum);
            newMessage += newchar;
        }
        reviecerArea.value = newMessage;
    }
}
