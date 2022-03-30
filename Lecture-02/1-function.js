function printHello(name){
    console.log("Hello " + name);
    return name + " hello!";
}

console.log(printHello.name); //name function

let result = printHello("Anirach !");
console.log(result);