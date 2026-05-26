# syntax=docker/dockerfile:1
#
# Build multi-arquitetura (amd64 + arm64):
#   docker buildx build --platform linux/amd64,linux/arm64 -t cleitonpanao/advogada-civil-online:latest --push .

############################
# Etapa de build (Vite)
############################
FROM node:20-alpine AS builder
WORKDIR /app

# Vite/Tailwind/TypeScript ficam em devDependencies
ENV NODE_ENV=development

# Copia o projeto (node_modules está no .dockerignore)
COPY . .

# Instala deps e builda na mesma etapa para evitar sobrescrita de node_modules
RUN rm -rf node_modules \
  && npm ci --no-audit --no-fund --include=dev \
  && ./node_modules/.bin/vite build \
  && npm cache clean --force

############################
# Etapa de runtime (Nginx)
############################
FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
