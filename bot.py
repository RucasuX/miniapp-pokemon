from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackContext
from dotenv import load_dotenv
import os

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

# Função para lidar com o comando /start
async def start(update: Update, context: CallbackContext):
    # Cria um botão que abre o Mini App
    keyboard = [[InlineKeyboardButton("Abrir Mini App", web_app={'url': 'https://RucasuX.github.io/miniapp-pokemon'})]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Clique no botão para abrir o Mini App:', reply_markup=reply_markup)

# Função principal para iniciar o bot
def main():
    # Obtém o token do arquivo .env
    token = os.getenv("BOT_TOKEN")
    
    # Cria uma instância do Application
    application = Application.builder().token(token).build()
    
    # Registra o handler para o comando /start
    application.add_handler(CommandHandler("start", start))
    
    # Inicia o bot
    application.run_polling()

if __name__ == '__main__':
    main()