// Promise

let X = new Promise((resolve, reject) => { // 2) creates a new promise
  let success = true; // 3) this simulates success or failure // change to false to simulate failure
  if (success) { // 4) if means the promise is successful
    resolve("It worked"); // 5) resolve means promise is successful and returns "It worked"
  } else { // 6) if not successful
    reject("It failed"); // 7) reject means promise failed and returns "It failed"
  }
});

X.then(result => { // 1) then is used to handle the result
  console.log(result); // 8) if the "X" promise is successfull
}).catch(error => { // 9) catch is used to handle errors
  console.log(error); // 10) if error in the "X" promise
})

