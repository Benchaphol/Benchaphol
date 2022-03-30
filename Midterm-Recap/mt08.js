function simplePair(data, mul){
    let result = []
    for(let i=0; i < data.length-1; i++){
        for(let j=1; j < data.length; j++){
            if(data[i] * data[j] == mul) {
                result.push(data[i])
                result.push(data[j])
                return result
            }
        }
    }
    return null
}

console.log(simplePair([1, 2, 3], 3))
console.log(simplePair([1, 2, 3], 6))
console.log(simplePair([1, 2, 3], 9))