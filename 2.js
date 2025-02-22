"use strict";

function findMovies(favoriteGenre) {
  const movies = [
    {
      id: 1,
      name: "Avengers end game",
      genre: "Action",
      soldTicket: 149,
      capacity: 150,
    },
    {
      id: 2,
      name: "La la Land",
      genre: "Romance",
      soldTicket: 20,
      capacity: 75,
    },
    {
      id: 3,
      name: "Beauty and the Beast",
      genre: "Romance",
      soldTicket: 50,
      capacity: 50,
    },
    {
      id: 4,
      name: "Superman vs Batman",
      genre: "Action",
      soldTicket: 150,
      capacity: 250,
    },
    {
      id: 5,
      name: "Transformer",
      genre: "Action",
      soldTicket: 90,
      capacity: 90,
    },
    {
      id: 6,
      name: "5 feet apart",
      genre: "Romance",
      soldTicket: 25,
      capacity: 45,
    },
    {
      id: 7,
      name: "Hamilton",
      genre: "Musical",
      soldTicket: 295,
      capacity: 300,
    },
    {
      id: 8,
      name: "Dear Evan Hansen",
      genre: "Musical",
      soldTicket: 150,
      capacity: 200,
    },
    {
      id: 9,
      name: "Conjuring",
      genre: "Horror",
      soldTicket: 30,
      capacity: 100,
    },
    {
      id: 10,
      name: "Annabelle",
      genre: "Horror",
      soldTicket: 10,
      capacity: 30,
    },
    {
      id: 11,
      name: "Fast and Furios",
      genre: "Action",
      soldTicket: 25,
      capacity: 40,
    },
    {
      id: 12,
      name: "Romeo and Julet",
      genre: "Romance",
      soldTicket: 15,
      capacity: 15,
    },
    {
      id: 13,
      name: "Wicked",
      genre: "Musical",
      soldTicket: 75,
      capacity: 75,
    },
  ];
  
  //!insert your code here
}

function findTicketAvailability(movie, user) {
  //!insert your code here
}

let user = {
  name: "Kosasih",
  ticket: 10,
  favoriteGenre: ["Action", "Musical"],
};

function findRecommendation(user) {
  //!insert your code here
}

function generateRecommendation(user) {
  //!insert your code here
}

console.log(generateRecommendation(user));
/**
  [
  {
    id: 4,
    name: 'Superman vs Batman',
    genre: 'Action',
    totalPrice: 1000000
  },
  {
    id: 11,
    name: 'Fast and Furios',
    genre: 'Action',
    totalPrice: 1000000
  },
  {
    id: 8,
    name: 'Dear Evan Hansen',
    genre: 'Musical',
    totalPrice: 800000
  }
]
*/

let krys = {
  name: "Krys",
  ticket: 1,
  favoriteGenre: ["Action", "Musical", "Romance", "Horror"],
};

console.log(generateRecommendation(krys));

/**
  [
  {
    id: 1,
    name: 'Avengers end game',
    genre: 'Action',
    totalPrice: 100000
  },
  {
    id: 4,
    name: 'Superman vs Batman',
    genre: 'Action',
    totalPrice: 100000
  },
  {
    id: 11,
    name: 'Fast and Furios',
    genre: 'Action',
    totalPrice: 100000
  },
  { id: 7, name: 'Hamilton', genre: 'Musical', totalPrice: 80000 },
  {
    id: 8,
    name: 'Dear Evan Hansen',
    genre: 'Musical',
    totalPrice: 80000
  },
  { id: 2, name: 'La la Land', genre: 'Romance', totalPrice: 40000 },
  { id: 6, name: '5 feet apart', genre: 'Romance', totalPrice: 40000 },
  { id: 9, name: 'Conjuring', genre: 'Horror', totalPrice: 75000 },
  { id: 10, name: 'Annabelle', genre: 'Horror', totalPrice: 75000 }
]
 */

let maria = {
  name: "Maria",
  ticket: 20,
  favoriteGenre: ["Musical", "Romance"],
};

console.log(generateRecommendation(maria));
/**
 [
  {
    id: 8,
    name: 'Dear Evan Hansen',
    genre: 'Musical',
    totalPrice: 1600000
  },
  { id: 2, name: 'La la Land', genre: 'Romance', totalPrice: 800000 },
  { id: 6, name: '5 feet apart', genre: 'Romance', totalPrice: 800000 }
]
*/

let john = {
  name: "John",
  ticket: 2,
  favoriteGenre: ["Musical", "Comedy", "Thriller"],
};

console.log(generateRecommendation(john));

/**
  [
  { id: 7, name: 'Hamilton', genre: 'Musical', totalPrice: 160000 },
  {
    id: 8,
    name: 'Dear Evan Hansen',
    genre: 'Musical',
    totalPrice: 160000
  }
]
 */

let lennon = {
  name: "lennon",
  ticket: 1,
  favoriteGenre: ["Sci Fi", "Documentary", "Thriller"],
};

console.log(generateRecommendation(lennon)); // No film matches the criteria

let bryan = {
  name: "Bryan",
  ticket: 100,
  favoriteGenre: ["Musical"],
};
console.log(generateRecommendation(bryan)); // No film matches the criteria

console.log(generateRecommendation()); // No user accepted

module.exports = {
  findMovies,
  findTicketAvailability,
  findRecommendation,
  generateRecommendation,
};
