# Usa la imagen de Node.js como base
FROM node:14-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos HTML y JavaScript al directorio de trabajo en el contenedor
COPY . .

# Expone el puerto 80 para que pueda accederse a la aplicación desde fuera del contenedor
EXPOSE 80

# Inicia un servidor HTTP simple para servir los archivos HTML y JavaScript
CMD ["npx", "http-server", "-p", "80"]
