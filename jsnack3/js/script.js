// jsnack3. Calcola la somma e la media dei primi 10 numeri.

// creo un array con i primi 10 numeri


let somma = 0;

for (let i = 1; i <= 10; i++) {
    console.log("intervallo numeri incrementati", i);
    somma = somma + i
}

console.log("somma totale", somma);

const media = somma / 10
console.log("media", media);