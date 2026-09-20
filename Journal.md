Phase 1 Journal

For Phase 1, I created the HTML foundation for my Virtual Poem Gallery. I used two <div> elements to represent the West Wall and East Wall. I gave each wall a unique ID, wall-west and wall-east, so JavaScript can identify them later.

I placed two poems inside each wall using <article> elements. Each poem has its own unique ID, such as poem-morning and poem-rain. The poem title is inside an <h3> element and the poem text is inside a <p> element.

The unique IDs are important because they allow JavaScript to find a specific element on the page. For example, in a later phase I can use getElementById() to select one specific poem.

I also added the submission controls that will be used in later phases. These include a text input for the title, a textarea for the poem, a color input for the background color, a dropdown for selecting a wall, and a button for adding the poem.

One thing I learned from this phase is that HTML gives the page its structure, while the IDs give JavaScript a way to locate specific parts of that structure.

---------------------------------

Phase 2 Journal

In Phase 2, I used JavaScript to locate and style poems in my gallery. I used getElementById() to select the poem with the ID poem-morning. Since the ID is unique, it allowed me to target that specific poem.

I then changed its background color using the style.backgroundColor property.

For the group selection, I used querySelectorAll() to select all of the article elements inside the West Wall. This returned both poems on that wall.

The difference is that getElementById() was used to find one specific element, while querySelectorAll() returned all elements that matched the selector. I used console.log() to check that the West Wall poems were correctly selected.

---------------------------------

Phase 3 Journal

In Phase 3, I moved the Morning poem from the West Wall to the East Wall using appendChild().

I first selected both walls using getElementById(). I already had the Morning poem selected from Phase 2. I then called eastWall.appendChild(morningPoem).

I did not have to manually delete the poem from the West Wall. When appendChild() was called, the existing DOM node was automatically removed from its old parent and added to the new parent.

After moving the poem, I changed its background color to light green using JavaScript. This helped me see that the poem had been moved and that my Phase 3 code was running.

The main thing I learned from this phase is that appendChild() can move an existing element to a new location in the DOM. It does not create a copy of the element. 
