function promiseTimeout(ms) {
    return new Promise((resole, reject) => {
        setTimeout(resole, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(2000);

    const reponse =  await longRunningOperation();
    console.log(reponse);
    console.log("Stop!!");
}

run();