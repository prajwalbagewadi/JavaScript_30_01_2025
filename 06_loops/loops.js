//for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while
let str = "cherry";
let i = 0;
while (i < str.length) {
  console.log(str[i]);
  i++;
}

//do-while
let num = 45;
do {
  console.log(num);
  num -= 9;
} while (num >= 9);

//for in
let fruits = ["apple", "cherry", "papaya"];
for (f of fruits) {
  console.log(f);
}

//for in
let student = { name: "abc", age: 25 };
for (key in student) {
  console.log("key:", key, student[key]);
}

//forEach
let str1 = "pineapple";
str1.split("").forEach((c) => {
  console.log(c, "=>", "from pineapple");
});

let fruits1 = ["apple", "cherry", "papaya"];
fruits1.forEach((f) => {
  console.log(f, ":is a fruit");
});
