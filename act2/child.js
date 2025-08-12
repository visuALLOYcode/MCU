/*
//child.js
//Goal: recieve a text from the parent process, convert it to uppercase, and send it back

//listen for a message from the parent process:
process.on("message", (text) => {
    // simulate a tiny but of work (1 second), like "processing"
  setTimeout(() => {
    const result = text.toUpperCase();

    //send the result back to the parent over IPC
    //Also incude this Childs PID to show its a seperae OS process
    process.send({ pid: process.pid, result });

    //exit cleanly
    process.exit(0);
  }, 1000);
});
*/
console.log("Child PID:", process.pid);

process.on("message", (text) => {
  setTimeout(() => {

    const result = text.toUpperCase();
  
    let oddNumbers = [];
    let oddsum = 0;
    for (let i = 1; i <= 50; i++) {
      if (i % 2 !== 0) {
        oddsum += i;
        oddNumbers.push(i);
        
      }
    }
    process.send({ pid: process.pid, result, oddNumbers ,oddsum, count: oddNumbers.length });
    process.exit(0);
  }, 1000);
});
 


 