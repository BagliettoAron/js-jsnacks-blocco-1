// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// chiedo un numero di 4 cifre all'utente

const userNumber = prompt("digita 4 cifre");
console.log("numeri inseriti", userNumber);


// sommo ogni numero prelevato
let oneNumberSum = 0;

for (let i = 0; i < userNumber.length; i++) {
    const thisNumber = parseInt(userNumber [i])
    oneNumberSum += thisNumber;
}

console.log(oneNumberSum);

