// jsnack2. Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// array vuoto
const number = [];

// chiedo sei volte un numero all'utente
for (let i = 1; i <= 6; i++) {
    const userNumber = prompt (parseInt("inserisci un numero"));
    // se è dispari
 if (userNumber % 2 === 1) {
    //  lo inserisco nell'array
    number.push(userNumber);
    }
}

console.log(number);


