FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

# Usuario sin privilegios (buena práctica de seguridad)
USER node

EXPOSE 3000

CMD ["node", "server.js"]