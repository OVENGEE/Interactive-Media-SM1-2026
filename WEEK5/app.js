//DOM -Documnt object model

//2. Selecting elements
//2.1 query selector

// const title = document.querySelector(".card-title");
// console.log(title);

// const allCards = document.querySelectorAll(".card");
// console.log(allCards);

// const firstCard = document.querySelector("#first-card");
// console.log(firstCard);

//3. reading and writing content
//3.1 text content

// const title = document.querySelector(".card-title");

// title.textContent = "Interstellar";

// console.log(title.textContent);

// //3.2 innerHTML
// const card = document.querySelector("#first-card");

// card.innerHTML = "<p>completely<p>";

// console.log(card.innerHTML);

//4.Attributes

// const card = document.querySelector("#first-card");
// console.log(card.getAttribute("id"));
// // card.setAttribute("data-director", "chrisNolan");

// //5. classes as a state
// //5.1 class.add
// const card = document.querySelector("#first-card");
// card.classList.add("card-highlight");

// //5.2 class.remove
// card.classList.remove("card-highlight");

// //5.3 class.toggle
// card.classList.toggle("card-highlight");

// console.log(card.classList.contains("card-highlight"));


//6. styles from JAVA
//card.style.backgroundcolor

//7.creating elements dynamically
// const newCard = document.createElement("div");
// newCard.classList.add("card");
// newCard.textContent = "Test Card";

// const container = document.querySelector("#card-container");
// container.appendChild(newCard);


//8. Rendering from data

const movies =
[
    {id: 1, title: "Inception", genre: "Sci-fi", rating: 8.8, badge: "HD"},
    {id: 2, title: "The dark night", genre: "Action", rating: 9.0, badge: "HD"},
    {id: 3, title: "Interstellar", genre: "Sci-fi", rating: 8.6, badge: "4K"},
    {id: 4, title: "Parasite", genre: "Thriller", rating: 8.6, badge: "HD"},
    {id: 5, title: "The matrix", genre: "Sci-fi", rating: 8.7, badge: "4K"},
];

function createMovieCard(movie)
{
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-movie-id", movie.id);

    const badge = document.createElement("div");
    badge.classList.add("card-badge");
    badge.textContent = movie.badge;

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.textContent = movie.title;

    const genre = document.createElement("p");
    genre.classList.add("card-genre");
    genre.textContent = movie.genre;

    const rating = document.createElement("p");
    rating.classList.add("card-rating");
    rating.textContent = movie.rating;

    const button = document.createElement("button");
    button.classList.add("card-btn");
    button.textContent = "My list";

    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(rating);
    card.appendChild(button);

    return card;

}

const container = document.querySelector("#card-container");
movies.map(movie =>
{
    const card = createMovieCard(movie);
    container.appendChild(card);
}
);