// Presented with 2 for loops setup to obtain all even and odd numbers, respectively, in a crude and simple fashion simply looping and adding 2 to i
// evens
for (let i = 0; i <= 20; i += 2) {
  console.log();
}

// evens
for (let i = 1; i <= 20; i += 2) {
  console.log();
}

// I decided to update these with modulus and user prompts for fun

let oddsOrEvens = prompt("Would you like odds or evens?");

let numberMax = prompt(
  "The program will start from 0. What is the highest number you would want possibly returned?"
);

function oddsEvens(oddsOrEvens, numberMax) {
  for (let i = 0; i <= numberMax; i++) {
    if (
      oddsOrEvens.toLowerCase() === "odds" ||
      oddsOrEvens.toLowerCase() === "odd"
    ) {
      if (i % 2 === 1) {
        console.log(i);
      }
    } else if (
      oddsOrEvens.toLowerCase() === "evens" ||
      oddsOrEvens.toLowerCase() === "even"
    ) {
      if (i % 2 === 0) {
        console.log(i);
      }
    } else {
      console.log("Sorry, input not recognized");
      return 0;
    }
  }
}

oddsEvens(oddsOrEvens, numberMax);
