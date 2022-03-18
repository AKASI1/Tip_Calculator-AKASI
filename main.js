let tip = document.querySelector(".right h1.t1");
let total = document.querySelector(".right h1.t2");
let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let tips = document.querySelectorAll("section .card");
let custom = document.querySelector("section .custom");
let reset = document.querySelector(".reset");
let error = document.querySelector(".error");

bill.addEventListener("input", bilInput);
people.addEventListener("input", peopleInput);
tips.forEach((t) => {
  t.addEventListener("click", handleClick);
});
custom.addEventListener("input", customInput);
reset.addEventListener("click", resetBtn);

tip.innerHTML = "$" + (0.0).toFixed(2);
total.innerHTML = "$" + (0.0).toFixed(2);

let bilvalue = "0.0";
let peopplevalue = "1";
let tipvalue = "";

function bilInput() {
  bilvalue = parseFloat(bill.value);
  CalculateTip();
}

function peopleInput() {
  peopplevalue = parseFloat(people.value);
  if (people.value < 1) {
    error.style.display = "inline-block";
    people.style.outline = "2px solid rgba(255, 0, 0, 0.664)";
  } else {
    error.style.display = "none";
    people.style.outline = "none";
    CalculateTip();
  }
}

function handleClick(e) {
  tips.forEach((t) => {
    t.classList.remove("active");
  });
  e.target.classList.add("active");
  tipvalue = parseFloat(e.target.innerHTML) / 100;
  CalculateTip();
}

function customInput() {
  tipvalue = parseFloat(custom.value / 100);
  tips.forEach((t) => t.classList.remove("active"));
  CalculateTip();
}

function CalculateTip() {
  if (people.value >= 1) {
    let ttip = (bilvalue * tipvalue) / peopplevalue;
    let ttotal = bilvalue / peopplevalue + ttip;
    tip.innerHTML = "$" + ttip.toFixed(2);
    total.innerHTML = `$${ttotal.toFixed(2)}`;
  }
}

function resetBtn() {
  bill.value = "0.0";
  people.value = "1";
  custom.value = "";
  tip.innerHTML = "$" + (0.0).toFixed(2);
  total.innerHTML = "$" + (0.0).toFixed(2);
}
