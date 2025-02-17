/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function onlyA(arr, a) {
    let empty = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.startsWith('A')
        empty.push(a);
    }
    return empty
}

// Invoca la funzione qui e stampa il risultato in console
onlyA(names)
console.log(onlyA(names));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]