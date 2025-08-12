function heavytask(max){
    let sum = 0;
    for (let i = 0; i < max; i++) {
        sum += i;
    }
    return sum;
}

console.log("[main] Starting heavy task (no worker)");

const result = heavytask(3_000_000_000);

console.log(`[Main] Done with heavy task: ${result}`);
console.log("other process");