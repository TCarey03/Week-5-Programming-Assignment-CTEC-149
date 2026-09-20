const morningPoem = document.getElementById("poem-morning");

// Change its background color
morningPoem.style.backgroundColor = "lightblue";

// Select all poems on the West Wall
const westWallPoems = document.querySelectorAll("#wall-west article");

// Log the poems to the console
console.log(westWallPoems);

// Select the two walls
const westWall = document.getElementById("wall-west");
const eastWall = document.getElementById("wall-east");

// Move the Morning poem to the East Wall
eastWall.appendChild(morningPoem);

// Change its background color after moving it
morningPoem.style.backgroundColor = "lightgreen";

// Find the input controls
const poemTitle = document.getElementById("poem-title");
const poemContent = document.getElementById("poem-content");
const poemColor = document.getElementById("poem-color");
const wallSelect = document.getElementById("wall-select");
const addPoemButton = document.getElementById("add-poem-btn");

// Respond when the Add Poem button is clicked
addPoemButton.addEventListener("click", function () {

    // Read the values from the inputs
    const title = poemTitle.value;
    const content = poemContent.value;
    const color = poemColor.value;
    const selectedWallId = wallSelect.value;

    // Create a new article for the poem
    const newPoem = document.createElement("article");

    // Create a heading for the title
    const newTitle = document.createElement("h3");

    // Create a paragraph for the poem
    const newContent = document.createElement("p");

    // Put the user's text into the new elements
    newTitle.textContent = title;
    newContent.textContent = content;

    // Add the title and content to the poem article
    newPoem.appendChild(newTitle);
    newPoem.appendChild(newContent);

    // Set the poem's background color
    newPoem.style.backgroundColor = color;

    // Find the wall selected by the user
    const selectedWall = document.getElementById(selectedWallId);

    // Add the new poem to that wall
    selectedWall.appendChild(newPoem);

    // Clear the text inputs
    poemTitle.value = "";
    poemContent.value = "";

    console.log("New poem added!");
});
