"use strict";

function highestRating(data) {
  //! insert your code here
}

function mostRecommended(data) {
  //! insert your code here
}

const allMovies = [
  {
    title: "The Wages of Fear",
    genre: "thriller",
    director: "Henri-Georges Clouzot",
    rating: 8.4,
  },
  {
    title: "No Country for Old Men",
    genre: "thriller",
    director: "Coen Brothers",
    rating: 8.1,
  },
  {
    title: "500 Days of Summer",
    genre: "romance",
    director: "Marc Webb",
    rating: 7.8,
  },
  { title: "The Raid", genre: "action", director: "Gareth Evans", rating: 7.6 },
  {
    title: "The Raid 2",
    genre: "action",
    director: "Gareth Evans",
    rating: 8.2,
  },
  {
    title: "Senyap",
    genre: "documentary",
    director: "Joshua Oppenheimer",
    rating: 8.3,
  },
  {
    title: "Shoplifters",
    genre: "drama",
    director: "Kore-eda Hirokazu",
    rating: 8.1,
  },
  { title: "Hereditary", genre: "horror", director: "Ari Aster", rating: 7.3 },
  { title: "The Farewell", genre: "drama", director: "Lulu Wang", rating: 7.7 },
  {
    title: "Parasite",
    genre: "thriller",
    director: "Bong Joon-ho",
    rating: 8.6,
  },
];

console.log(mostRecommended(allMovies));
/*
{
    thriller: {
        titles: [
            'The Wages of Fear',
            'No Country for Old Men',
            'Parasite'
        ]
    },
    romance: { titles: [ '500 Days of Summer' ] },
    action: { titles: [ 'The Raid', 'The Raid 2' ] },
    documentary: { titles: [ 'Senyap' ] },
    drama: { titles: [ 'Shoplifters', 'The Farewell' ] },
    horror: { titles: [ 'Hereditary' ] },
    highestRating: {
        title: 'Parasite',
        genre: 'thriller',
        director: 'Bong Joon-ho',      
        rating: 8.6
    }
}
*/

console.log(
  mostRecommended([
    {
      title: "The Wages of Fear",
      genre: "thriller",
      director: "Henri-Georges Clouzot",
      rating: 8.4,
    },
    {
      title: "No Country for Old Men",
      genre: "thriller",
      director: "Coen Brothers",
      rating: 8.1,
    },
  ])
);
// incomplete data

console.log(mostRecommended());
// invalid input

module.exports = {
  highestRating,
  mostRecommended,
};
