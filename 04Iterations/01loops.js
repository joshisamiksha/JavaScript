// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is mid number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value${j}and inner loop${i}`);
        // console.log(i + '*' + j + '=' + i*j );
        
        
        
    }
    
}

let myArr = ["flash","batman","superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);  
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log(`Detected 5`);
        continue   // break 
    }
    // console.log(index);  
}

