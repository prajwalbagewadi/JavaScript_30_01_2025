let tot_budget = 1000;
let dept = 5;
let percentage = [50, 60, 40, 30, 20];
for (let i = 1; i < dept; i++) {
  let budget = tot_budget * (percentage[i] / 100);
  console.log("dept=", i, "percentage=", percentage[i], "budget=", budget);
}
