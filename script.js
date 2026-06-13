async function enviarPergunta() {
  const pergunta = document.getElementById("pergunta").value;

  document.getElementById("resposta").innerHTML =
    "🤖 Pensando...";

  setTimeout(() => {
    document.getElementById("resposta").innerHTML =
      "IA ainda não conectada. Próximo passo: integrar OpenRouter 🚀";
  }, 1000);
}
