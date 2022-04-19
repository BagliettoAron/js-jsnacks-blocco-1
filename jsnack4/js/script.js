// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// chiedo un numero di 4 cifre all'utente

const userNumber = prompt(parseInt("digita 4 cifre"))
console.log("numeri inseriti", userNumber);

// prelevo ogni singolo numero
let oneNumber = userNumber.split("")
console.log("numeri presi singolarmente", oneNumber);

// sommo ogni numero prelevato

let oneNumberSum = Number(oneNumber[0]) + Number(oneNumber[1]) + Number(oneNumber[2]) + Number(oneNumber[3])
console.log("somma di tutti i numeri", oneNumberSum);