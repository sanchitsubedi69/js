const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])

// const combibned_heroes = marvel_heroes.concat(dc_heroes)
// console.log(combibned_heroes)

///[ MOST PEOPLE USE THIS --->>>>>>spread++++++++++++++++++++++++++ glass xordim ground ma it will spread

const all_new_heroes = [...marvel_heroes,...dc_heroes] 
// console.log(all_new_heroes)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log( Array.isArray("sanchit")); ///TO CHECK THE GIVEN VALLUE IS ARRAY OR NOT
console.log( Array.from("sanchit"));// TO CONVERT THE GIVEN WORD INTO ARRAY
console.log( Array.from({name: "sanchit"})) //INTERESTING

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

