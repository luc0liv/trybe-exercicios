const currentHour = 11;
let message = "";

if (currentHour >= 22) {
  message = "Não deveriamos comer nada, é hora de dormir";
}
if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
}
if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo de café da tarde?";
}
if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço";
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmm, cheiro de café recém passado";
}

console.log(message);
