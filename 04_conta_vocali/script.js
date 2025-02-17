/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function FindVowels(str) {
    let count = 0;
    let onlyVowels = []
    let vowel = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (vowel.includes(element)) {
            count++
            onlyVowels.push(element)
        }
    }
    return onlyVowels
}

// Invoca la funzione qui e stampa il risultato in console
FindVowels(word)
console.log(FindVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)