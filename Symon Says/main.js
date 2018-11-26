// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati


function getRandom(min,max) // min and max included
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

var numeriCPU = [];

for (var i = 0; i < 5; i++) {
  numeriCPU.push(getRandom(1,100));
}
alert("Ricorda i seguenti numeri: " + numeriCPU); // un allert espone 5 numeri generati casualmente

var numeriUtente = [];
//array vuoto che dovra' essere riempito con i numeri dell'utente

setTimeout(chiediNumeriUtente, 30000);
function chiediNumeriUtente()
{
  for (var i = 0; i < 5; i++)
  {
    var numeroInserito = parseInt(prompt('Inserisci uno dei numeri che ricordi.'));
    if (numeriCPU.includes(numeroInserito)) {
      numeriUtente.push(numeroInserito);
    }
    console.log(numeroInserito);
  }
  if (numeriUtente < 1)
  {
    alert('Peccato, non hai ricordato nessun numero.');
    console.log('nessun numero ricordato.');
  }
  else //stampa i num che sono stati indovinati
  {
    console.log('numeri inseriti correttamente: ' + numeriUtente);
    alert('Complimenti!\nHai ricordato ' + (numeriUtente.length) + ' numeri!\nQuesti sono i numeri che hai ricordato: ' + numeriUtente)
  }
}
