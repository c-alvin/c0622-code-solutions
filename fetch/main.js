// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET'
// }).then(response => response.json())
//   .then(data => console.log(data));

// fetch('https://pokeapi.co/api/v2/pokemon/lugia', {
//   method: 'GET'
// }).then(response => response.json())
//   .then(data => console.log(data));

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
}

fetchUsers();

async function fetchPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/lugia');
  const pokemon = await response.json();
  console.log(pokemon);
}

fetchPokemon();
