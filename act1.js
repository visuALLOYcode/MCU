const [, , minStr, maxStr] = process.argv;


const min = Number(minStr);
const max = Number(maxStr);

let even = 0;
function heavytask(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        if (i % 2 == 0) {
            sum += i;
            even += 1;
        }
    }
    return sum;
}

console.log("[MAIN] Starting heavy task (no worker)");

const result = heavytask(min, max);
console.log(`✅ Total Even Numbers: ${even}`);
console.log(`✅ Total Sum: ${result}`);

console.log("total runtime ⏱️: ", process.uptime(), "seconds");

console.log("🔃 other process");

// input node act1.js is 1 1000000000
// must find 500000000 even numbers
// total sum must be 250000000134217800
// total time must be 2447ms (not strictly, but close enough)
