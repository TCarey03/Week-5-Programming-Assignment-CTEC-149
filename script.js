// Select one specific poem using its unique ID
const morningPoem = document.getElementById("poem-morning");

// Change the poem's background color
morningPoem.style.backgroundColor = "lightblue";

// Select all poems on the West Wall
const westWallPoems = document.querySelectorAll("#wall-west article");

// Log the poems to the console
console.log(westWallPoems);
