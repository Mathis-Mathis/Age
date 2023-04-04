function updateAge() {
  var birthDate = new Date('1998-10-20');
  var ageInMilliseconds = Date.now() - birthDate.getTime();
  var ageDate = new Date(ageInMilliseconds);
  var ageYear = Math.abs(ageDate.getUTCFullYear() - 1970);
  var ageMonth = ageDate.getUTCMonth();
  var ageDay = ageDate.getUTCDate() - 1;
  var ageHour = ageDate.getUTCHours();
  var ageMinute = ageDate.getUTCMinutes();
  var ageSecond = ageDate.getUTCSeconds();
  document.getElementById('age').textContent = "Aujourd'hui tu as " + ageYear + " ans, " + ageMonth + " mois, " + ageDay + " jours, " + ageHour + " heures, " + ageMinute + " minutes et " + ageSecond + " secondes !";
  document.getElementById('tic-tac').play();
}
setInterval(updateAge, 1000);
