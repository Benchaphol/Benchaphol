function numberSplit(number){
    let sum = []
    let oneNum = Math.ceil(number/2)
    let twoNum = number - oneNum
    sum[0] = twoNum
    sum[1] = oneNum
    return sum
}

console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))