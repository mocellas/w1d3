//function counterLetters that returns all unique characters that exists in, that is passed into the function
//function should also report back how many instance of each were found in these thing
//functions can only return one thing: a primitive string
//function needs to return an object that can represent the stats, all the characters found in the string input and respective counts

var arg = process.argv[2];

var output = counterLetters(arg);

console.log(output);

// function declaration -- enables 'Hoisting'
function counterLetters (string) {
  var output = {}; //var output receives an object
  for (var i = 0; i < string.length; i++){ // for to go through the string received
    var letter = string.charAt(i); //var letter receives string returned from charAt method inside of the array
    if (output[letter]) { //if output letter already exists
       output[letter]++; // increment
    } else { //else
      output[letter] = 1; //output receive a new letter and count 1
    }
  }
  return output; //return the result of the function
};

// function expression
// var counterLetters = function (string) {
//   var output = {}; //var output receives an object
//   for (var i = 0; i < string.length; i++){ // for to go through the string received
//     var letter = string.charAt(i); //var letter receives string returned from charAt method inside of the array
//     if (output[letter]) { //if output letter already exists
//        output[letter]++; // increment
//     } else { //else
//       output[letter] = 1; //output receive a new letter and count 1
//     }
//   }
//   return output; //return the result of the function
// };
