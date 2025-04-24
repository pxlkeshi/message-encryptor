// Import the encryptors functions here.
const encryptors= require('./encryptors.js')
const {caesarCipher} = require('./encryptors.js')
const {symbolCipher}=require('./encryptors.js')
const {reverseCipher}=require('./encryptors.js')


const encodeMessage = (str) => {
  let step1=caesarCipher(str,12)
  let step2=symbolCipher(step1)
  let final=reverseCipher(step2)
  return final  
}

const decodeMessage = (str) => {
  let step1=reverseCipher(str)
  let step2=symbolCipher(step1)
  let final=caesarCipher(step2,-12)
  return final
  
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);