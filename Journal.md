Phase 1 Journal

For Phase 1, I created the HTML foundation for my Virtual Poem Gallery. I used two <div> elements to represent the West Wall and East Wall. I gave each wall a unique ID, wall-west and wall-east, so JavaScript can identify them later.

I placed two poems inside each wall using <article> elements. Each poem has its own unique ID, such as poem-morning and poem-rain. The poem title is inside an <h3> element and the poem text is inside a <p> element.

The unique IDs are important because they allow JavaScript to find a specific element on the page. For example, in a later phase I can use getElementById() to select one specific poem.

I also added the submission controls that will be used in later phases. These include a text input for the title, a textarea for the poem, a color input for the background color, a dropdown for selecting a wall, and a button for adding the poem.

One thing I learned from this phase is that HTML gives the page its structure, while the IDs give JavaScript a way to locate specific parts of that structure.
