/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initials(arr) {
    let empty = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        let first = element.charAt(0);
        empty.push(first);

    }
    return empty
}

// Invoca la funzione qui e stampa il risultato in console
initials(names)
console.log(initials(names));






//Risultato atteso: ["A", "L", "M", "A", "G", "A"]