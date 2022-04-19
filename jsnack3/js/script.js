// jsnack3. Calcola la somma e la media dei primi 10 numeri.

// reset della somma
let somma = 0;

// creo i 10 numeri con un loop for
for (let i = 1; i <= 10; i++) {
    console.log("intervallo numeri incrementati", i);
    // addiziono la somma per se stessa
    somma = somma + i
}

console.log("somma totale", somma);

// calcolo la media
const media = somma / 10
console.log("media", media);