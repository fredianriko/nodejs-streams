// # NOTES READ THE INDEX.MD, this code only works in Linux Based System (Ubuntu,etc)
// use the guidance in the index.md to run below code on your windows machine

// 1. basic buffer terminal input
//  process.stdin.on('data', msg => console.log('The input message was',msg))

// 2. also basic buffer but store in variabel, the output will show from stdout
// const stdin =  process.stdin.on('data', msg => console.log('The input message was',msg))
// const stdout = process.stdout.on('data', msg => console.log('The output message was', msg))

//3. piping
const stdin = process.stdin.on("data", (msg) => console.log("terminal input was", msg));
const stdout = process.stdout.on("data", (msg) => process.stdout.write(msg.toString().toUpperCase()));

stdin.pipe(stdout);
