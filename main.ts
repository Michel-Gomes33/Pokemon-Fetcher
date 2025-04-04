const container = document.getElementById('pokemon-container') as HTMLDivElement;
const button = document.getElementById('fetch-button') as HTMLButtonElement;

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=5';

const getPokemon = () => {
    fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    for (const pokemon of data.results) {
        fetch(pokemon.url)
        .then(res => res.json())
        .then (details => {
            const card = createPokemonCard(details.name, details.sprites.front_default);
            container.appendChild(card);
        })
    }; 
  });

  // 1. Fetch from the API_URL
  // 2. Turn the response into JSON
  // 3. Loop through the results array using `for (const thing of array)`
  // 4. For each Pokémon, fetch its details using its `url`
  // 5. From the details, get the name and the image
  // 6. Use a function to create a styled element with name + image
  // 7. Append it to the container
};

const createPokemonCard = (name: string, imageUrl: string) => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
  
    const title = document.createElement('h3');
    title.textContent = name;
  
    const image = document.createElement('img');
    image.src = imageUrl;
  
    card.append(title);
    card.append(image);
  
    return card;
  };
  

  // Create a div, h3, and img
  // Add text and image src
  // Return the finished card element


button.addEventListener('click', getPokemon);
