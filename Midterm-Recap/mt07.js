function sumTwoSmallestNums(number){
    let arr = number.sort()
    arr.sort((a,b) => a-b)

    let sum = 0
    let count = 1
    for(let i=0; i < arr.length; i++){
        if(arr[i] >= 0){
            sum += arr[i]
            count++
            if(count == 3) break;
        }
    }
    console.log(sum)
}

sumTwoSmallestNums([19, 5, 42, 2, 77])
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])
sumTwoSmallestNums([2, 9, 6, -1])
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -721, 791,-587])
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])