// Il software deve chiedere all’utente il suo nome e il
// sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il
// colore del nome deve essere azzurro o rosa a
// seconda del sesso inserito

var name = prompt("Inserisci qui il tuo nome");
var nameHTML = document.getElementById('nameUser');
nameHTML.innerHTML = "Ciao " + name + "!";
console.log(name);

var gender = prompt("Sei M (maschio) o F (femmina)?");

if (gender == 'M')
{
  nameUser.style.color = "lightblue";
  genderStatus = true;
}
else if (gender == 'F')
{
  nameUser.style.color = "pink";
  genderStatus = true;
}
else
{
  alert('Non hai inserito un sesso valido. Inserisci un valore corretto');
}
