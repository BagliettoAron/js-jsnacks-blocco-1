// jsnack1. L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// richiedo all'utente di inserire due parole

word1 = prompt ("inserisci una parola")

word2 = prompt ("inserisci un'altra parola")
console.log(word1, word2);

// creo una variabile con valore la lunghezza della parola

wordLenght1 = (word1.length)

wordLenght2 = (word2.length)

console.log(wordLenght1, wordLenght2);

// calcolo come determinare e come stampare prima la parola più corta e poi quella più lunga

result = `${word1} ${word2}`;

if (wordLenght1 > wordLenght2) {
    result = `${word2} ${word1}`;
}  

// stampo in console il risultato

console.log(result);