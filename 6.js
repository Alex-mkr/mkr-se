"use strict";

function hospitalRoom(listPatients) {
  //! insert your code here
}

console.log(
  hospitalRoom([
    ["Dimas", "I"],
    ["Awtian", "II"],
    ["Dimitri", "II"],
    ["Icha", "II"],
    ["Hardim", "II"],
    ["Radit", "I"],
  ])
);
/*
{ 
  "I": [['Dimas'], ['Radit']],
  "II": [['Awtian', 'Dimitri'], ['Icha', 'Hardim']] 
}
*/

console.log(
  hospitalRoom([
    ["Zaskia", "I"],
    ["Adhi", "III"],
    ["Agus", "III"],
    ["Abu Hanifah", "III"],
    ["Umi Hani", "I"],
    ["Umar", "III"],
    ["Arthamevia", "IV"],
  ])
);
/*
{
  I: [['Zaskia'], ['Umi Hani']],
  III: [ ['Adhi', 'Agus', 'Abu Hanifah'], ['Umar']],
  IV: [['Arthamevia']]
}
*/

console.log(
  hospitalRoom([
    ["Naruto", "IV"],
    ["Sasuke", "II"],
    ["Sakura", "I"],
    ["Kakashi", "III"],
  ])
);
/*
{
  IV: [['Naruto']],
  II: [['Sasuke']],
  I: [['Sakura']],
  III: [['Kakashi']],
}
*/

module.exports = hospitalRoom;
