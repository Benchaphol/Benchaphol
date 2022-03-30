function capToFront(message){
    let regex1 = /[A-Z]/g
    let regex2 = /[a-z]/g
    let upper = message.match(regex1).join("")
    let lower = message.match(regex2).join("")
    return upper+lower
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))