# syntax=docker/dockerfile:1

############################
# Etapa de build (Vite)
############################
FROM node:20-alpine AS builder
WORKDIR /app

# Instala dependências com base no lockfile para builds reprodutíveis
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copia o restante do código e gera o build
COPY . .
RUN npm run build

############################
# Etapa de runtime (Nginx)
############################
FROM nginx:1.27-alpine AS runner

# Configuração do Nginx para SPA (fallback para index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia artefatos do build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]


