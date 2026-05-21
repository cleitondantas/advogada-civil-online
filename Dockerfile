# syntax=docker/dockerfile:1

############################
# Etapa de build (Vite)
############################
FROM --platform=linux/arm64 node:20-alpine AS builder
WORKDIR /app

# Declara os argumentos de build para variáveis de ambiente
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY
ARG VITE_EMAILJS_RECEIVER_EMAIL

# Define as variáveis de ambiente durante o build
ENV VITE_EMAILJS_SERVICE_ID=${VITE_EMAILJS_SERVICE_ID}
ENV VITE_EMAILJS_TEMPLATE_ID=${VITE_EMAILJS_TEMPLATE_ID}
ENV VITE_EMAILJS_PUBLIC_KEY=${VITE_EMAILJS_PUBLIC_KEY}
ENV VITE_EMAILJS_RECEIVER_EMAIL=${VITE_EMAILJS_RECEIVER_EMAIL}

# Instala dependências com base no lockfile para builds reprodutíveis
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copia o restante do código e gera o build
COPY . .
RUN npm run build

############################
# Etapa de runtime (Nginx)
############################
FROM --platform=linux/arm64 nginx:1.27-alpine AS runner

# Configuração do Nginx para SPA (fallback para index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia artefatos do build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]