// Inicializar o WebApp do Telegram
const tg = window.Telegram.WebApp;

// Configurações iniciais
tg.expand(); // Expande o MiniApp para ocupar a tela inteira
tg.MainButton.text = "Pronto!"; // Define o texto do botão principal
tg.MainButton.color = "#007bff"; // Define a cor do botão principal
tg.MainButton.show(); // Mostra o botão principal

// Lidar com o clique do botão "btn-action"
const btnAction = document.getElementById("btn-action");
const feedback = document.getElementById("feedback");

btnAction.addEventListener("click", () => {
  // Altera o texto do botão principal
  tg.MainButton.text = "Ação realizada!";

  // Exibe uma mensagem na tela
  feedback.style.display = "block";

  // Exibe uma mensagem no console (para depuração)
  console.log("Botão 'Clique aqui' foi clicado!");

  // Envia dados de volta para o bot do Telegram
  tg.sendData("Botão 'Clique aqui' foi clicado!");
});

// Lidar com o clique no botão principal
tg.MainButton.onClick(() => {
  // Fecha o MiniApp quando o botão principal é clicado
  tg.close();
});