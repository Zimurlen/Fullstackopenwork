const arrayT = [1,2,3,67,5]
const arrayTotal = arrayT.reduce(sum, 0)

function sum(total, currentValue) {
    return total + currentValue
}

//console.log(arrayT.length) //expected 5
//console.log(arrayTotal) //expected 15

let a = ' + '
let b = ' = '

console.log(arrayT[0]+a+arrayT[1]+a+arrayT[2]+a+arrayT[3]+a+arrayT[4]+b+arrayTotal)

// I want to make a string that for loops arrayT into a string.
// expected 1 plus 2 plus 3 plus 4 plus 5 is 15

//Created outcome desired, but code is basic and verbose. 
//I'd like to clean up the console.log portion, but I need to move on.