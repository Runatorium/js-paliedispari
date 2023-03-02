const parolacheck = prompt('inserisci la parola da controllare');

const risultato = palindroma(parolacheck);
console.log(risultato);


function palindroma(parolacheck){

const parolalenght = parolacheck.length;

for ( i = 0; i < (parolalenght / 2); i++){
    if (parolacheck[i] !== parolacheck[parolalenght - 1 - i]){
        return 'la parola non è palindroma';
    }
    return 'la parola è palindroma';
}

}