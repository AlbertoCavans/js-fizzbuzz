/* COLLEGAMENTI DOM */
const rowCol = document.getElementById("rowCol");
let cardsNumber = "";
/* CICLO DI NUMERI */
for (let i = 1; i <= 100; i++) {
  let word = i;
  let bgColor = i;
  bgColor = "bg-primary";
  /* ###### FIZZBUZZ */
  if (i % 15 == 0) {
    word = "FIZZBUZZ";
    bgColor = "bg-success";
  } else if (i % 5 == 0) {
    /* ###### BUZZ */
    word = "BUZZ";
    bgColor = "bg-danger";
  } else if (i % 3 == 0) {
    /* ###### FIZZ */
    word = "FIZZ";
    bgColor = "bg-warning";
  }
  cardsNumber += `
  <div class="col-6 col-md-4 col-lg-2">
  <div class="card my-2 py-5 ${bgColor} d-flex align-items-center">
  <span class="h4 text-light">${word}</span>
  </div>
  </div>`;
}

rowCol.innerHTML = cardsNumber;
