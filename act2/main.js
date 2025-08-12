// parent.js
// Goal: start a child process, send it some text to process, and keep doing other work meanwhile.
 
import { fork } from "child_process";

 
console.log("Parent PID:", process.pid);
 
// Start the child process (runs child.js in a separate OS process)
const child = fork("./child.js");
 
// When the child sends us a message, print it
child.on("message", (msg) => {
  console.log(`Child PID (${msg.pid}) processed range:`, msg.result);
  console.log("Odd Numbers:", msg.oddNumbers.join(', '));
  console.log(`Sum:`, msg.oddsum , `| Count: ` , msg.count);
});



// If the child exits, let’s know how it finished
child.on("exit", (code) => {
  console.log(`Child PID ` , child.pid , `Child exited with code:`, code);
});
 
// Send some text to the child to "process"
child.send("[1..50]");
 
// Meanwhile, the parent keeps doing other work (showing they don’t block each other)
let ticks = 0;
const timer = setInterval(() => {
  ticks++;
  console.log("Parent still responsive...", ticks);
  if (ticks === 5) clearInterval(timer);
}, 300);