function digitalClock(time_num){
    let sec = time_num % 60
    let hour = parseInt(time_num / 3600)
    time_num %= 3600
    let min = parseInt(time_num / 60)
    
    if(hour < 10) hour = "0" + hour
    if(hour == 24) hour = "00"
    if(min < 10) min = "0" + min
    if(sec < 10) sec = "0" + sec

    let time = hour + ":" + min + ":" + sec
    return time
}

console.log(digitalClock(5025))
console.log(digitalClock(61201))
console.log(digitalClock(87000))