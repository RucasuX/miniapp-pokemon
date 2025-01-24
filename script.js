// Inicializar o WebApp do Telegram
const tg = window.Telegram.WebApp;

// Configurações iniciais
tg.expand(); // Expande o MiniApp para ocupar a tela inteira
tg.MainButton.text = "Pronto!"; // Define o texto do botão principal
tg.MainButton.color = "#007bff"; // Define a cor do botão principal
tg.MainButton.show(); // Exibe o botão principal

// Exibe os dados iniciais no console (útil para depuração)
console.log("MiniApp carregado. Dados iniciais:", tg.initDataUnsafe);

// Lidar com o clique do botão "btn-action"
const btnAction = document.getElementById("btn-action");
btnAction.addEventListener("click", () => {
  // Altera o texto do botão principal
  tg.MainButton.text = "Ação realizada!";

  // Exibe uma mensagem no console
  console.log("Botão 'btn-action' clicado!");

  // Envia dados de volta para o bot do Telegram (opcional)
  tg.sendData("Botão 'btn-action' foi clicado!");
});

// Lidar com o clique no botão principal
tg.MainButton.onClick(() => {
  // Fecha o MiniApp quando o botão principal é clicado
  tg.close();
});