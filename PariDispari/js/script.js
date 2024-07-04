// permetto l'inserimento del valore e del numero da parte dell'utente
let user_value = prompt('Inserisci la parola PARI o la parola DISPARI').toLowerCase();
let user_num = parseInt(prompt('inserisci un numero compreso tra 1 e 5'));
document.getElementById('user-num').innerText = user_num;
// obbligo l'utente ad inserire solo numeri compresi tra 1 e 5
if (user_num > 0 && user_num <= 5) {
    // dichiaro la funzione
    function valueCompare(user_value, pc_value) {
        // confronta il valore (pari o dispari) scelto all'utente con quello del risultato dell'operazione successiva (somma)
        if (user_value == pc_value) {
            return true;
        }
        return false;
    }
    
}
// altrimenti compare messaggio di errore
else {
    alert('numero non è compreso tra 1 e 5');
}