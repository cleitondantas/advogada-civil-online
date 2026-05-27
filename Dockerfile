# syntax=docker/dockerfile:1
#
# Build multi-arquitetura (amd64 + arm64):
#   docker buildx build --platform linux/amd64,linux/arm64 -t cleitonpanao/advogada-civil-online:latest --push .
#
# Se arm64 falhar por memória/emulação, teste só amd64:
#   docker buildx build --platform linux/amd64 -t cleitonpanao/advogada-civil-online:latest --push .

############################
# Etapa de build (Vite)
############################
FROM node:20-bookworm-slim AS builder
WORKDIR /app

ENV NODE_ENV=development \
    CI=true \
    npm_config_audit=false \
    npm_config_fund=false

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Manifests primeiro (melhor cache + garante lockfile no contexto)
COPY package.json package-lock.json ./

RUN npm ci --include=dev \
  && test -x node_modules/.bin/vite

# Código-fonte (node_modules excluído via .dockerignore)
COPY . .

RUN npm run build

############################
# Etapa de runtime (Nginx)
############################
FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
