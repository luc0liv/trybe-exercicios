let statusDeEstudante = "aprovada";

switch (statusDeEstudante) {
  case "aprovada":
    console.log("Parabuains, você foi aprovado!");
    break;
  case "reprovada":
    console.log("Você foi reprovado");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  default:
    console.log("Não se aplica");
}
