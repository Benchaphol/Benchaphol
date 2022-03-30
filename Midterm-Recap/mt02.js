function highestDigit(number){
    let highdigit = 0
    let num 
    while(number != 0){
        num = number % 10
        if(num < highdigit) highdigit
        else highdigit = num
        number = Math.floor(number/ 10)
    }
    return highdigit
}

console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))