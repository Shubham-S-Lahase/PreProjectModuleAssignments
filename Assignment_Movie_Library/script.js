const movies = [
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Godfather", genre: "Crime" },
  { title: "The Godfather: Part II", genre: "Crime" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "12 Angry Men", genre: "Drama" },
  { title: "Schindler's List", genre: "Drama" },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Adventure",
  },
  { title: "Pulp Fiction", genre: "Crime" },
  { title: "The Good, the Bad and the Ugly", genre: "Western" },
  { title: "Fight Club", genre: "Drama" },
  { title: "Forrest Gump", genre: "Drama" },
  { title: "Inception", genre: "Action" },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
  },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
  { title: "The Matrix", genre: "Action" },
  { title: "Goodfellas", genre: "Crime" },
  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  { title: "Seven Samurai", genre: "Adventure" },
  { title: "Se7en", genre: "Crime" },
  { title: "City of God", genre: "Crime" },
  { title: "The Silence of the Lambs", genre: "Thriller" },
  { title: "It's a Wonderful Life", genre: "Drama" },
  { title: "Life is Beautiful", genre: "Comedy" },
  { title: "The Usual Suspects", genre: "Crime" },
  { title: "Léon: The Professional", genre: "Action" },
  { title: "Spirited Away", genre: "Animation" },
  { title: "Saving Private Ryan", genre: "Drama" },
  { title: "Interstellar", genre: "Adventure" },
  { title: "The Green Mile", genre: "Drama" },
  { title: "The Prestige", genre: "Drama" },
  { title: "The Intouchables", genre: "Comedy" },
  { title: "The Lion King", genre: "Animation" },
  { title: "The Pianist", genre: "Drama" },
  { title: "The Departed", genre: "Crime" },
  { title: "Whiplash", genre: "Drama" },
  { title: "Gladiator", genre: "Action" },
];

const title = document.getElementById("title");
const genre = document.getElementById("genre");
const results = document.getElementById("results");
const countResult = document.getElementById("countResult");
const dropdown = document.getElementById("searches");
let resultArray = [];

function getResults() {
  // console.log("getResults called");
  results.innerHTML = "";
  const titleInput = title.value;
  const genreInput = genre.value;
  if (titleInput == "" && genreInput == "") {
    alert("Please enter at least Title or Genre to search");
  } else if (titleInput) {
    // console.log(titleInput);
    searchByTitle(titleInput);
  } else if (genreInput) {
    // console.log(genreInput);
    searchByGenre(genreInput);
  }
}

function searchByTitle(title) {
  // console.log(title);
  document.getElementById("title").value = "";
  resultArray = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase().trim())
  );
  displayResults(resultArray);
  countByGenre(resultArray);
}

function searchByGenre(genre) {
  document.getElementById("genre").value = "";
  resultArray = movies.filter((movie) =>
    movie.genre.toLowerCase().includes(genre.toLowerCase().trim())
  );
  displayResults(resultArray);
  countByGenre(resultArray);
}

function displayResults(resultList) {
  console.log(resultList);
  if (resultList.length < 1) {
    const node = document.createElement("div");
    const textNode = document.createTextNode(
      "No Results Found, try different input"
    );
    node.appendChild(textNode);
    document.getElementById("results").appendChild(node);
  } else {
    resultList.map((element) => {
      const node = document.createElement("li");
      const textnodeTitle = document.createTextNode(
        `Title:${element.title}, Genre=>(${element.genre})`
      );
      node.appendChild(textnodeTitle);
      document.getElementById("results").appendChild(node);
    });
  }
}

function sortByTitle() {
  // console.log("sortByTitle called");
  results.innerHTML = "";
  const sortedMovies_byTitle = resultArray.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  displayResults(sortedMovies_byTitle);
}

function sortByGenre() {
  // console.log("sortByGenre called");
  results.innerHTML = "";
  const sortedMovies_byGenre = resultArray.sort((a, b) =>
    a.genre.localeCompare(b.genre)
  );
  displayResults(sortedMovies_byGenre);
}

function countByGenre(resultList) {
  //   console.log(resultList);
  let count = {};
  resultList.map((item) => {
    if (count[item.genre]) {
      count[item.genre]++;
    } else {
      count[item.genre] = 1;
    }
  });
  countResult.innerHTML = "";
  for (key in count) {
    // console.log(key);
    const node = document.createElement("li");
    const textNode = document.createTextNode(`${key} : ${count[key]}`);
    node.appendChild(textNode);
    countResult.appendChild(node);
  }
}

function searchBoth(title, genre) {
  results.innerHTML = "";
  resultArray = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase().trim()) &&
      movie.genre.toLowerCase().includes(genre.toLowerCase().trim())
  );
  console.log(resultArray);
  displayResults(resultArray);
  countByGenre(resultArray);
}

function getResultsByDropdown() {
  // console.log(dropdown.value);
  const searchType = dropdown.value;
  if (searchType === "title" || searchType === "genre") {
    // console.log("search by title");
    getResults();
  } else if (searchType === "both") {
    const titleInput = title.value;
    const genreInput = genre.value;
    if (titleInput == "" || genreInput == "") {
      alert("Both values are required to search");
    } else {
      searchBoth(titleInput, genreInput);
    }
  }
  document.getElementById("genre").value = "";
  document.getElementById("title").value = "";
}


