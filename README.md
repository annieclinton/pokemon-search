![alt text](https://github.com/annieclinton/pokemon-search/blob/main/pokemon.png)

# Pokémon

This web application enables users to search for any Pokémon by name and retrieve detailed information including its images (front and back) and a list of its abilities. 

Users simply enter the name of a Pokémon, such as "Clefairy," "Bulbasaur," or "Charmander," and the application dynamically displays the relevant data fetched from the Pokémon API.

**Link to project:** https://api-search-pokemon.netlify.app/

Please note, as this project relies on the external Pokémon API, response times can vary based on API performance and availability.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Pokémon API

The front end is constructed using HTML and is styled with CSS, using Flexbox for layout to ensure that the interface is both attractive and functional. The search functionality is powered by JavaScript, which handles the API requests and dynamically updates the content on the page based on user input.

I implemented a clean and straightforward user interface that allows easy navigation and interaction. The JavaScript code is responsible for making API calls to the Pokémon API, parsing the returned JSON data, and updating the DOM with the Pokémon's images and abilities. The application also handles errors gracefully, providing feedback to the user when searches yield no results or when there are issues with the API.

## Optimizations

- Improved Error Handling: Enhance user feedback for failed API requests or invalid Pokémon names.
- Responsive Design: Optimize the layout for various device sizes to ensure the application is fully responsive and accessible on mobile devices, tablets, and desktops.
- Caching Responses: Implement caching strategies to store API responses locally, reducing load times and API requests for previously searched Pokémon.

## Lessons Learned:

This project deepened my understanding of asynchronous JavaScript, particularly in managing API calls and handling JSON data.





