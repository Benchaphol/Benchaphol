function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() { // if there is await inside, there must be async
    console.log("Start!!");

    await promiseTimeout(2000);
    console.log("Stop!!");
}

console.log("Before run");
run();
console.log("After run");