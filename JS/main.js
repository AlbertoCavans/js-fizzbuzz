/* CICLO DI NUMERI */
for (let i = 1; i <= 100; i++) {
  /* ###### FIZZBUZZ */
  if (i % 15 == 0) {
    console.log("FIZZBUZZ");
  } else if (i % 5 == 0) {
    /* ###### BUZZ */
    console.log("BUZZ");
  } else if (i % 3 == 0) {
    /* ###### FIZZ */
    console.log("FIZZ");
  } else {
    console.log(i);
  }
}
