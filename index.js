// Remove the existing <main id="main">
const main = document.getElementById("main");
main.remove();

// Create a new <h1> and store it in the variable newHeader
const newHeader = document.createElement("h1");

// Give it the id 'victory'
newHeader.id = "victory";

// Set the text content to include your name
newHeader.textContent = "Elly Owuor is the champion";

// Finally, add the new header to the document body
document.body.appendChild(newHeader);
