document.getElementById("send-button").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;

  // Exibir mensagem do usuário
  displayMessage(userInput, "user");

  // Limpar campo de entrada
  document.getElementById("user-input").value = "";

  // Resposta da IA (simplesmente hardcoded)
  setTimeout(() => {
    let botResponse = getBotResponse(userInput);
    displayMessage(botResponse, "bot");
  }, 1000);
});

function displayMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;  // Scroll para a última mensagem
}

function getBotResponse(input) {
  // Respostas simples para testar a interação
  if (input.includes("olá")) {
    return "Olá, usuário! Como posso ajudá-lo hoje?";
  } else if (input.includes("como vai")) {
    return "Estou funcionando perfeitamente, obrigado por perguntar!";
  } else {
    return "Desculpe, não entendi. Pode repetir?";
  }
}
