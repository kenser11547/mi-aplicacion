# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos necesarios (index.js, package.json, package-lock.json)
COPY index.js .
COPY package.json .
COPY package-lock.json .
COPY public ./public

# Instala las dependencias de la aplicación
RUN npm install

# Expone el puerto en el que la aplicación se ejecuta
EXPOSE 8080

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["node", "index.js"]
