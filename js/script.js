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