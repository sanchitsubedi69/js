function sayMyName(){
    console.log("S");
console.log("A");
console.log("N");
console.log("C");
console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, Number2){

    
    let result= number1+ Number2
    return result
    console.log(number1+Number2);// here this console doesnot work because there is return above it
    
}
const result= addTwoNumbers(3,null);

// console.log(result);

// conclusion is that if we want to store the result in the variable then we must return at first

function loginUserMessage(username) {
    if(!username){
        console.log("please enter a username")
        return

    }
    return `${username} just logged in`
    
}
// console.log(loginUserMessage("sanchit"))
console.log(loginUserMessage())
