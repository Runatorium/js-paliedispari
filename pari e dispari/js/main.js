let sceltautente = prompt('inserisci pari o dispari');
let numeroutente = prompt('inserisci un numero da 1 a 5');
console.log(randomnumber());



if (sceltautente !== 'pari' && sceltautente !== 'dispari'){
    console.log('non hai scelto correttamente tra pari e dispari');

} else if(numeroutente<1 || numeroutente>5){
    console.log('non hai scelto correttamente un numero tra 1 e 5');
}





function randomnumber(){
    let numerocomputer=Math.floor(Math.random()*5 + 1);
    let sum = (numeroutente + numerocomputer);
    let vince;

    if(sum % 2 === 0){
        vince = 'pari'

    }else{
        vince = 'dispari'
    }

    if(sceltautente === vince){
        vincitore = 'hai vinto';
        return vincitore
    }else{
        vincitore = 'vince il computer';
        return vincitore
    }
}
