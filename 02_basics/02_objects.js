// const tinderUser = new Object()
// const tinderUser ={}

// tinderUser.id="123abc"
// tinderUser.name="samy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser ={
//     email: "sanchit@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname:"sanchit",
//             lastname:"subedi"
//         }
//     }
// }
// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1={
//     1:"a",2:"b"
// }

// const obj2={
//     3:"a",4:"b"
// }

// // const obj3={obj1,obj2}
// // const obj3= Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// // console.log(obj3);

// const user =[
//     {
//         id:1,
//         email:"sanchit@gmail.com"
//     },
//     {

//     },
//     {},


// ]
// user[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //keys nikalney syntax
// console.log(Object.values(tinderUser));  //values nikalney syntax
// console.log(Object.entries(tinderUser)); //keys ans values array ko form ma nikal dinxa

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// to check the given thing is inside the object or not


const course={
    coursename:"js in Nepali",
    price:"599",
    courseInstructor:"kingkohli"
}

// another syntax to extracting the value

const {price: pp}=course

console.log(pp);




