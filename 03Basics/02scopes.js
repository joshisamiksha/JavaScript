let a = 10
const b = 20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "sam"

    function two(){
        const website = "youtube"
        // console.log(userName);
        
    }
    // console.log(website);

    two()
    
}
one()

if(true){
    const username ="sam"
    if (username === "sam"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

// ************************** Interesting *******************************
console.log(addone(5));

function addone(value){
    return value + 1
}




const addTwo = function(num){
    return num + 2
}
addTwo(5)
