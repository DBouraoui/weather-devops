# Étape 1 : Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copier uniquement les fichiers de dépendances d'abord (pour profiter du cache Docker)
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Étape 2 : Serveur minimal pour la prod
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
