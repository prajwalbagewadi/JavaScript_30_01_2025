let arr = [1, 2, 3, 4, 5];
let sums = [];

for (let i = 0; i < arr.length; i++) {
  let total = 0;
  for (let j = 0; j < arr.length; j++) {
    if (i == j) {
      continue;
    } else {
      total += arr[j];
    }
  }
  console.log(total);
  sums[i] = total;
}

console.log(sums);

let max = 0;

for (let j = 1; j < sums.length; j++) {
  if (sums[max] < sums[j]) {
    max = j;
  }
}
console.log("max=", sums[max]);

let min = 0;
for (let j = 1; j < sums.length; j++) {
  if (sums[min] > sums[j]) {
    min = j;
  }
}

console.log("min=", sums[min]);
