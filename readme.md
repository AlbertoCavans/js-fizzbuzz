# Creazione fizzbuzz

## Obiettivo

Bisogna scrivere un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz". Inoltre per i numeri che sono sia multipli di 3 che di 5 il programma deve stampare "FizzBuzz".
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

## Procedimento

- Preparo il primo ciclo di numeri che vanno da 1 a 100 eguagliando la variabile di base a 1 in modo che il programma scriva tutti i numeri interi fra i due estremi
  - Stampo con console.log e vado live per controllare che il codice funzioni
    - SE il codice funziona nella console proseguo
    - ALTRIMENTI cerco l'errore e correggo
- Preparo if, gli else if ed else rispettivamente per i tasti che invece dei numeri avranno Fizz, Buzz e FizzBuzz e stampo con console.log
  - Vado live per controllare che il codice funzioni
    - SE funziona nella console proseguo
    - ALTRIMENTI cerco l'errore e correggo
- Bonus: scrivo un container nel DOM e apro un collegamento ad esso in main.js
- Dentro il ciclo precedente inserisco il riferimento al DOM con le classi necessarie ad ottenere delle card colorate con i numeri o le parole rispettivamente assegnate
