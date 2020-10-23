// INPUT
var surnameUtente = prompt('Ciao inserisci il tuo cognome?');
var surname = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var listaSurname = document.getElementById("listaSurname");
surname.push(surnameUtente);
surname.sort();
console.log(surname);
var surnameposition = 0;


// lOGICA
 for (var i = 0; i < surname.length; i++) {
   listaSurname.innerHTML += '<li>' + surname[i] + '</li>';

  if (surname[i] == surnameUtente) {
      surnameposition = i;
      console.log(surnameposition);
  }
}
document.getElementById('listaSurname').innerHTML += surnameposition + 1;
