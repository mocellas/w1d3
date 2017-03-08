var arg = process.argv[2];

var output = counterLetters(arg);

console.log(output);
printObject(output);

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
function printObject(object){ //calling the function which takes an object
  console.log(`{`)
    Object.keys(object).map (function(key, index){
      console.log(` ${key}: ${index}`)

    })
    console.log(`} `)
}
