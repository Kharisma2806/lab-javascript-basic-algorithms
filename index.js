let hacker1 = 'Johny';
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Smith';
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

let capitalizedDriverName = ""
for (let i = 0; i < hacker1.length; i++) {
  capitalizedDriverName = capitalizedDriverName + `${hacker1.charAt(i)} `.toUpperCase();
}
console.log(capitalizedDriverName)

let hacker2Reversed = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reversed += char;
}
console.log(hacker2Reversed);// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
