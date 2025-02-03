const form = document.getElementById("calForm");
const result = document.getElementById("result");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = parseFloat(document.getElementById("n1").value);
  const b = parseFloat(document.getElementById("n2").value);
  let sum = a + b;
  result.textContent = "result" + sum;
});
