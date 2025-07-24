// CALLBACK
function hello(name, callback) { // 2) This is calls the Hello function // turns name into "Al" and callback into "done"
    console.log("Hello " + name); // 3) This prints "Hello Al"
    callback(); // 4) This calls the callback function which is "done"
}

function done() { // 5) This is the callback function which is named "done"
  console.log("end"); // 6) This prints "end"
}

hello("Al", done); // 1) This is the Hello function // "Al" becomes the name and "done" becomes the callback