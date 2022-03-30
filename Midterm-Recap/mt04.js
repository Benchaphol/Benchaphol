function totalValume(...number){
    let total = 0
    let sum= 1

    for(let i=0; i < number.length; i++){
        for(let j=0; j < number[i].length; j++){
            sum *= number[i][j] 
        }
        total += sum
        sum = 1
    }
    return total

}

console.log(totalValume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))
console.log(totalValume([2, 2, 2], [2, 1, 1]))
console.log(totalValume([1, 1, 1]))