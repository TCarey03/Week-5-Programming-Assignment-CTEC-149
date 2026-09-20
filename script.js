// Phase 2: Select one specific poem
const morningPoem = document.getElementById("poem-morning");

// Change the poem's background color
morningPoem.style.backgroundColor = "lightblue";

// Phase 2: Select all poems on the West Wall
const westWallPoems = document.querySelectorAll("#wall-west article");

// Log the poems to the console
console.log(westWallPoems);


// Phase 3: Select the West and East Walls
const westWall = document.getElementById("wall-west");
const eastWall = document.getElementById("wall-east");

// Move the Morning poem from the West Wall to the East Wall
eastWall.appendChild(morningPoem);

// Change the poem's background color after moving it
morningPoem.style.backgroundColor = "lightgreen";
