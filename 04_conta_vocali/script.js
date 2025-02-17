/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function FindVowels(str) {
    let newWord = ""
    let vowel = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element.includes(vowel)) {
            vowel.push(str)
        }
    }
    return newWord
}

// Invoca la funzione qui e stampa il risultato in console
FindVowels(word)
console.log(FindVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)