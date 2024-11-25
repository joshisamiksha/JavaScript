// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello Sunshine"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObj = {
    js: 'javascript',
    Cpp: 'C++',
    rb: 'ruby'
}

for (const key in myObj) {
    // console.log(`${key} = ${myObj[key]}`);
}

const Lang = ["js","cpp","py","java"]

for (const key in Lang){
    // console.log(Lang[key]);
}

// forEach

// const coding = ["js","ruby","java","cpp","python"]

// coding.forEach(function (item) {
//     // console.log(item);
    
// })

// coding.forEach((item)=>{
//     // console.log(item);
    
// })

// function printMe(item) {
//     // console.log(item);   
// }
// coding.forEach(printMe)


// coding.forEach((item, index, arr)=>{
    // console.log(item,index,arr);
// })

// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter((num) => num > 4)
// console.log(newNums);



// const newNum = myNum.map((num)=> num + 10)

