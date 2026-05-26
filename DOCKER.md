# 🐳 Guia de Uso do Docker

Este guia explica como executar o projeto usando Docker com variáveis de ambiente.

## 📋 Pré-requisitos

1. Docker instalado ([Download Docker](https://www.docker.com/get-started))
2. Docker Compose instalado (geralmente vem com o Docker Desktop)
3. Arquivo `.env` configurado na raiz do projeto

## 🔧 Configuração

### 1. Criar o arquivo `.env`

Se você ainda não tem o arquivo `.env`, copie o arquivo de exemplo:

```bash
cp .env.example .env
```

### 2. Preencher as variáveis de ambiente

Edite o arquivo `.env` e preencha com seus valores reais:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
VITE_EMAILJS_RECEIVER_EMAIL=brunaneridantas@gmail.com
```

Para mais detalhes sobre como obter essas credenciais, consulte o arquivo `CONFIGURACAO_EMAIL.md`.

## 🚀 Executando o Projeto

### Opção 1: Usando Docker Compose (Recomendado)

```bash
# Construir e iniciar o container
docker-compose up --build

# Ou em modo detached (background)
docker-compose up -d --build
```

O projeto estará disponível em: `http://localhost`

### Opção 2: Usando Docker diretamente

```bash
# Construir a imagem passando as variáveis de ambiente
docker build \
  --build-arg VITE_EMAILJS_SERVICE_ID=${VITE_EMAILJS_SERVICE_ID} \
  --build-arg VITE_EMAILJS_TEMPLATE_ID=${VITE_EMAILJS_TEMPLATE_ID} \
  --build-arg VITE_EMAILJS_PUBLIC_KEY=${VITE_EMAILJS_PUBLIC_KEY} \
  --build-arg VITE_EMAILJS_RECEIVER_EMAIL=${VITE_EMAILJS_RECEIVER_EMAIL} \
  -t advogada-civil-online .

# Executar o container
docker run -p 80:80 advogada-civil-online
```

**Nota:** No Windows PowerShell, você pode precisar usar aspas simples ou escapar os caracteres especiais.

## 🛠️ Comandos Úteis

### Parar o container

```bash
docker-compose down
```

### Ver logs

```bash
docker-compose logs -f
```

### Reconstruir após mudanças

```bash
docker-compose up --build
```

### Executar em modo de desenvolvimento (sem Docker)

```bash
npm install
npm run dev
```

## ⚠️ Importante

- As variáveis de ambiente são injetadas **durante o build** do Vite, não em runtime
- Se você alterar o arquivo `.env`, será necessário reconstruir a imagem Docker
- O arquivo `.env` está no `.gitignore` e não deve ser commitado no Git
- Para produção, considere usar variáveis de ambiente do seu provedor de hospedagem

## 🔍 Troubleshooting

### Erro: "Configuração de email não encontrada"

- Verifique se o arquivo `.env` existe na raiz do projeto
- Verifique se todas as variáveis estão preenchidas corretamente
- Reconstrua a imagem Docker: `docker-compose up --build`

### Porta 80 já está em uso

Altere a porta no `docker-compose.yml`:

```yaml
ports:
  - "8080:80"  # Agora acesse em http://localhost:8080
```

### Build falha

- Verifique se todas as variáveis de ambiente estão definidas no `.env`
- Verifique os logs: `docker-compose logs`

