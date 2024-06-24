
function extractEmails() {
  var emailExtension = document.getElementById('emailExtension').value;
  var emailInput = document.getElementById('emailInput').value;
  var emailList = document.getElementById('emailList');
  var copyButton = document.getElementById('copyButton');
  var errorMsg = document.getElementById('errorMsg');
 
  // Validate that the extension field is not empty
  if (!emailExtension.trim()) {
    errorMsg.textContent = "Veuillez entrer l'extension de l'email.";
    return;
  } else {
    errorMsg.textContent = "";
  }

  // Split the input into lines
  var lines = emailInput.split('\n');

  // Clear the previous list
  emailList.innerHTML = '';

  // Filter lines containing the specified email extension
  var filteredLines = lines.filter(function (line) {
    return line.includes(emailExtension);
  });

  // Display the filtered lines in the list
  if (filteredLines.length > 0) {
    filteredLines.forEach(function (line) {
      var li = document.createElement('li');
      li.textContent = line;
      emailList.appendChild(li);
    });

    // Enable the copy button
    copyButton.disabled = false;
  } else {
    alert('Aucune ligne trouvée pour l\'extension spécifiée.');
    // Disable the copy button if no lines are found
    copyButton.disabled = true;
  }
}
function copyResults() {
  var emailList = document.getElementById('emailList');
  var filteredLines = Array.from(emailList.children).map(li => li.textContent);

  // Create a textarea to copy the text to the clipboard
  var textarea = document.createElement('textarea');
  textarea.value = filteredLines.join('\n');
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  alert('Résultats copiés dans le presse-papiers !');
}
// Rest of the code remains unchanged
// ...


