// I find it helps not to pronounce “function” (whether aloud or in your head), so that it sounds like “array: for each element <do something>.”
//
// let a = ["ant", "bat", "cat", 45 ];
// a.forEach(function(element) {
//     console.log(element);
// });
//
// let soliloquy = "To be, or not to be, that is the question:";
// Array.from(soliloquy).forEach(function(character) {
//   console.log(character);
// });
//
//
//
// let alt_string_message = (string) => {
//     if (string) {
//       return "The string is nonempty.";
//     } else {
//       return "It's an empty string!";
//     }
//   }
// > alt_string_message("honey badger");
// 'The string is nonempty '



let a = ["ant", "bat", "cat", 42];
a.forEach((element) => {
    console.log(element);
});
