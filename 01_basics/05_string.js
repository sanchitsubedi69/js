// const name= "sancchit"
// const repocount = 40

// console.log(name +" "+ repocount +" "+ "value");

// console.log(`Hello my name is ${name} and my repo count is ${repocount} `);

const gameName = new String('sanchit-hu')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("h"));


// substring+++++++++++++++++++

const newString = gameName.substring(0,4)
console.log(newString);

// slice++++++++++++++++++++++
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// trim();+++++++++++++++++++
const newStringOne = "   subedi   "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace++++++++++++++++++,,,,includes

const url="https://sanchit.com/sanchit%20subedi"
console.log(url.replace('%20', '_'))

console.log(url.includes('sundar'))


console.log(gameName.split('-'));













