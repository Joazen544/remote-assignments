//console.log("a".charCodeAt(0));

function count(input) {
  // your code here
  let obj = {};

  for (let i = 0; i < input.length; i++) {
    if (!(input[i] in obj)) {
      obj[input[i]] = 1;
    } else {
      obj[input[i]]++;
    }
  }

  return obj;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here

  let obj = {};

  for (let i = 0; i < Object.keys(input).length; i++) {
    if (!(input[i].key in obj)) {
      obj[input[i].key] = input[i].value;
    } else {
      obj[input[i].key] += input[i].value;
    }
  }

  return obj;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
