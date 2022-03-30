function circumfernce(r){
    if(Number.isNaN(Number.parseFloat(r))){
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumfernce("4.567abcdefgh"));

console.log(circumfernce("abcdefgh"));