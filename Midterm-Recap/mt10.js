function  isValidIP(ipAddress) {
    ipAddress = ipAddress.split('.');
    if (ipAddress.length == 4){
        for(let i = 0; i < ipAddress.length; i++){
            if((ipAddress[i] < 1)||(ipAddress[i] > 255)) return false;
            let zero = ipAddress[i].split('');
            if (zero[0] == 0) return false;
        }
        return true;
    }
    return false;

}

console.log(isValidIP("1.2.3.4"))
console.log(isValidIP("1.2.3")) 
console.log(isValidIP("1.2.3.4.5")) 
console.log(isValidIP("123.45.67.89")) 
console.log(isValidIP("123.456.78.90")) 
console.log(isValidIP("123.045.067.089")) 