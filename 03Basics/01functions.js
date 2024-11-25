function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    
}

// sayMyName()

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
    
}

const result = addTwoNumbers(3, 4)

// console.log("Result:", result);

function loginUserMsg(username = "sam"){
    if(username === undefined){
        console.log("Please enter a userName");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg());

function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(200, 300, 400))

const user = {
    username: "sami",
    age: 29
}

// function handleObject(anyobj){
//     console.log(`UserName is ${user.username} and age is ${user.age}` ); 
// }

// handleObject(user)

const myNewArray = [100, 200, 300 ,400]

function returnsecondvalue(getArray){
    return getArray[1]
}

console.log(returnsecondvalue(myNewArray));
