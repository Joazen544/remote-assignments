function countAandB(input) {
  let total = 0;
  input.forEach((element) => {
    if (element === "a" || element === "b") total++;
  });
  return total;
}

function toNumber(input) {
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "a":
        input[i] = 1;
        break;
      case "b":
        input[i] = 2;
        break;
      case "c":
        input[i] = 3;
        break;
      case "d":
        input[i] = 4;
        break;
      case "e":
        input[i] = 5;
        break;
    }
  }
  return input;
}
let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1,3]
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
