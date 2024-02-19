let teksAwal = document.getElementById('textToReplace');

document.getElementById("inputText").addEventListener("submit", function (event) {
    event.preventDefault();

    let inputText = document.getElementById('teksAwal').value;
    teksAwal.textContent = inputText;
});

function findAllText() {
    let findWord = document.getElementById("findText").value;
    let regex = new RegExp("\\b" + findWord + "\\b", 'g');
    let newText = teksAwal.textContent.replace(regex, '<span style="background-color: yellow;">' + findWord + '</span>');
    teksAwal.innerHTML = newText;
}

function replaceAllText() {
    let findWord = document.getElementById("findText").value;
    let replaceText = document.getElementById("replacementInput").value;
    let regex = new RegExp("\\b" + findWord + "\\b", 'g');
    let newText = teksAwal.textContent.replace(regex, replaceText);
    teksAwal.textContent = newText;
}
