//Async/Await
function wait() { // 5) This function returns a promise that resolves after 1 second
    return new Promise(resolve => { // 6) This creates a promise
        setTimeout(() => { // 7) This is a timer
            resolve("World"); // 8) Resolve == "World"
        }, 1000); // 9) Wait for 1 second // this uses milliseconds
    });
}

async function run() { // 2) This is an async function which lets you use await inside it
    console.log("Hello "); // 3) This prints "Hello "
    const result = await wait(); // 4) Wait for the promise and goes to the function wait
    console.log(result); // 10) This prints "World" as the result of the promise
}

run() // 1) This calls the run function which starts the async process