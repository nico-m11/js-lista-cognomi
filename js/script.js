// INPUT
var surnameUtente = prompt('Ciao inserisci il tuo cognome?');
var surname = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var listaSurname = document.getElementById(listaSurname);
surname.push(surnameUtente);
surname.sort();
console.log(surname);
surnameposition = 0;

// lOGICA
 for (i = 0; i < surname.lentgh; i++) {
   listaSurname.innerHTML += '<li>' + surname[i] + '</li>';

  if (surname[i] == surnameUtente) {
      surnameposition = i;
      console.log(surnameposition);
  }
}
document.getElementById('listaSurname').innerHTML += (surnameposition + 1);
