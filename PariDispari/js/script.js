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
    // dichiaro e inizializzo la variabile contenente il numero random
    let pc_num = Math.floor((Math.random() * 5 + 1));
    document.getElementById('pc-num').innerText = pc_num;
    // sommo il numero generato dal pc (random) al numero inserito dall'utente
    let sum = user_num + pc_num;
    document.getElementById('sum').innerText = sum;
    // dichiaro la variabile (pari o dispari) del pc
    let pc_value;
    // istruzione condizionale per valore pari
    if (sum % 2 == 0) {
        pc_value = 'pari';
    }
    // istruzione condizionale per valore dispari
    else if (user_value % 2 != 0) {
        pc_value = 'dispari';
    }
    // chiamo la funzione
    let result = valueCompare(user_value, pc_value);
    
}
// altrimenti compare messaggio di errore
else {
    alert('numero non è compreso tra 1 e 5');
}