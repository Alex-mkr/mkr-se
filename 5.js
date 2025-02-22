"use strict";
const bloodTypeTable = [
  {
    parents: ["A", "A"],
    child: ["A", "O"],
  },
  {
    parents: ["A", "B"],
    child: ["A", "B", "O", "AB"],
  },
  {
    parents: ["A", "O"],
    child: ["A", "O"],
  },
  {
    parents: ["A", "AB"],
    child: ["A", "B", "AB"],
  },
  {
    parents: ["B", "B"],
    child: ["B", "O"],
  },
  {
    parents: ["B", "O"],
    child: ["B", "O"],
  },
  {
    parents: ["B", "AB"],
    child: ["A", "B", "AB"],
  },
  {
    parents: ["O", "O"],
    child: ["O"],
  },
  {
    parents: ["O", "AB"],
    child: ["A", "B"],
  },
  {
    parents: ["AB", "AB"],
    child: ["A", "B", "AB"],
  },
];

function isMatchBloodType(parent1, parent2, children) {
  //! insert your code here
}

// TEST CASE
console.log(isMatchBloodType("O", "A", "O")); // true
console.log(isMatchBloodType("O", "A", "A")); // true
console.log(isMatchBloodType("O", "A", "B")); // false
console.log(isMatchBloodType("O", "B", "B")); // true
console.log(isMatchBloodType("AB", "B", "O")); // false
console.log(isMatchBloodType("AB", "B", "B")); // true

module.exports = isMatchBloodType;
