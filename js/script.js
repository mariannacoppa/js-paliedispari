// 1 dichiaro la funzione che deve verificare le una parola è palindroma
function palDetect (word) {
    // 2 restituisco il valore dato dall'operazione:
    // 2.1 prendo la parola inserita dall'utente, la divido in singole lettere, ne inverto l'ordine e riunisco le lettere
    let check_pal = word.toLowerCase().split('').reverse().join('');
    if (word === check_pal) {
        return true;
    }
    else {
        return false;
    }
}
// 3 consento l'inserimento della parola (parametro) da parte dell'utente
let word = prompt('inserisci una parola (senza spazi) e ti dirò se è palindroma').toLowerCase();
// 4 chiamo la funzione
let result = palDetect(word);
// 5 controllo tra valore restituito dalla fnuzione e parametro dell'utente
// 5.1 SE il valore dato dall'operazione corrisponde al parametro dato dall'utente
if (result === true) {
    
}