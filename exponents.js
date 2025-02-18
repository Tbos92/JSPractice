let base = prompt("What is the base integer you would like to operate on?", 5);
let power = prompt("What power do you want to raise it to?", 2);

let result = 1;

function raiseToPower(base, power) {
  for (let i = 0; i < power; i++) {
    result *= base;
  }

  return result;
}

raiseToPower(base, power);

alert(result);

let result2 = base ** power;

alert(`This is result2: ${result2}`);
