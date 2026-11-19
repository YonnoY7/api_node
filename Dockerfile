# Imagen oficial vigente de Node con soporte LTS (versión ligera)
FROM node:22-slim

# Directorio de trabajo de la aplicación
WORKDIR /app

# Copiamos la definición de paquetes e instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del código fuente del proyecto
COPY . .

# Exponemos el puerto de escucha de la API
EXPOSE 3000

# Comando de arranque del servidor
CMD ["npm", "start"]
