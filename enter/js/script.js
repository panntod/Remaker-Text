function prosesTeks(teks) {
  teks = teks.replace(/ /g, "\n");
  return teks;
}

// declare variable in the global scope
let finalTeks;

// event handler
document
  .getElementById("remakerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the initial text from the textarea
    let teksAwal = document.getElementById("teksAwal").value;
    let teksHasilElement = document.getElementById("teksHasil");

    // Process the text and display the result
    let teksHasil = prosesTeks(teksAwal);
    finalTeks = teksHasil;

    // Display the result on the element
    teksHasilElement.textContent = finalTeks; // Use textContent to avoid potential XSS
  });

document.getElementById("copyButton").addEventListener("click", function () {
  if (!finalTeks) {
    console.error("No text to copy.");
    alert("No text to copy");
    return;
  }

  navigator.clipboard
    .writeText(finalTeks)
    .then(() => {
      alert("Text copied successfully!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text");
    });
});
