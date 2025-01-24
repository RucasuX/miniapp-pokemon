from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackContext

# Função para lidar com o comando /start
async def start(update: Update, context: CallbackContext):
    # Cria um botão que abre o Mini App
    keyboard = [[InlineKeyboardButton("Abrir Mini App", web_app={'url': 'https://05ff-205-164-169-60.ngrok-free.app'})]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text('Clique no botão para abrir o Mini App:', reply_markup=reply_markup)

# Função principal para iniciar o bot
def main():
    # Insira o token do seu bot aqui
    token = '7640395031:AAF7BrZyyQ3XUKJl4G04Onkrii50bNBN9zo'
    
    # Cria uma instância do Application
    application = Application.builder().token(token).build()
    
    # Registra o handler para o comando /start
    application.add_handler(CommandHandler("start", start))
    
    # Inicia o bot
    application.run_polling()

if __name__ == '__main__':
    main()

    

    