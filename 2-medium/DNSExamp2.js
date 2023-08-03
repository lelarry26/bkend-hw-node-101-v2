//1 - DNS Lookup
//Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.

// let readline = require("readline");
// let dns = require("node:dns");
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What domain would you like info on? ", function (answer) {
//   console.log("Here is the information for: ", answer);
//   dns.lookup(answer, (err, address, family) =>
//     console.log("address: %j family: IPv%s", address, family)
//   );
//   rl.close();
// });

//2 - Read a File
//Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.

// let readline = require("readline");
// let fs = require("fs");
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What file would you like me to read? ", function (answer) {
//   fs.readFile(answer, "utf8", function (err, data) {
//     let new_data = data.toUpperCase();
//     if (err) {
//       console.log(err);
//       return;
//     }
//     fs.writeFile(answer, new_data, function (err) {
//       if (err) throw err;
//     });
//     console.log(new_data)
//   });
//   rl.close();
// });

//3 - Read AND Write to a File
//Write a program to prompt the user for two file names, the first file will be the input and
//the second file will be the output.The program will read in the contents of the input file,
//convert its text to all caps, and then write the resulting contents to the output file.

// let readline = require("readline");
// let fs = require("fs");

// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = "";
// let output = "";

// rl.question("Please provide input name.", (answer) => {
//   input = answer;

//   rl.question("Please provide an output name.", (answer) => {
//     output = answer;
//     console.log(input, output);
//     fs.readFile(input, "utf8", (err, data) => {
//       // let new_data = data.toUpperCase();
//       let new_data = data.toLowerCase();
//       fs.writeFile(output, new_data, () => { })
//     });
//     rl.close();
//   });
// });
