# Configuração do Sistema de Envio de Emails

Este projeto utiliza o **EmailJS** para enviar mensagens do formulário de contato diretamente para o email configurado.

## 📋 Pré-requisitos

1. Criar uma conta gratuita no [EmailJS](https://www.emailjs.com/)
2. Configurar um serviço de email (Gmail, Outlook, etc.)
3. Criar um template de email

## 🔧 Passo a Passo para Configuração

### 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **Sign Up** e crie sua conta gratuita
3. Faça login na sua conta

### 2. Adicionar Serviço de Email

1. No dashboard do EmailJS, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (recomendado: Gmail ou Outlook)
4. Siga as instruções para conectar sua conta de email
5. **Copie o Service ID** gerado (você precisará dele depois)

### 3. Criar Template de Email

1. No dashboard, vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com as seguintes variáveis:

**Campos disponíveis no template:**
- `{{from_name}}` - Nome completo do remetente
- `{{from_email}}` - Email do remetente
- `{{phone}}` - Telefone do remetente
- `{{area}}` - Área de interesse jurídica
- `{{message}}` - Mensagem do formulário
- `{{to_email}}` - Email do destinatário

**Exemplo de template:**
```
Assunto: Nova Mensagem do Site - {{from_name}}

Corpo do Email:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Área de Interesse: {{area}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do site.
```

4. Configure:
   - **To Email**: `brunaneridantas@gmail.com` (ou o email que deseja receber)
   - **From Name**: Nome que aparecerá no remetente
   - **Subject**: Assunto do email

5. **Copie o Template ID** gerado

### 4. Obter Public Key

1. No dashboard, vá em **Account** > **General**
2. Localize a seção **API Keys**
3. **Copie a Public Key** (ou crie uma nova se necessário)

### 5. Configurar Variáveis de Ambiente

1. Na raiz do projeto, crie um arquivo chamado `.env` (se ainda não existir)
2. Adicione as seguintes variáveis:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
VITE_EMAILJS_RECEIVER_EMAIL=brunaneridantas@gmail.com
```

3. Substitua os valores pelos IDs e chaves que você copiou nos passos anteriores

### 6. Reiniciar o Servidor de Desenvolvimento

Após configurar o arquivo `.env`:

```bash
# Parar o servidor atual (Ctrl + C)
# Reiniciar o servidor
npm run dev
```

**Importante:** O Vite só carrega variáveis de ambiente que começam com `VITE_` e é necessário reiniciar o servidor após adicionar/modificar o arquivo `.env`.

## ✅ Verificação

Para testar se está funcionando:

1. Preencha o formulário de contato no site
2. Clique em "Enviar Mensagem"
3. Verifique se recebe o email em `brunaneridantas@gmail.com` (ou o email configurado)
4. Verifique se apareceu uma mensagem de sucesso no site

## 🔒 Segurança

- ⚠️ **NUNCA** faça commit do arquivo `.env` no Git
- O arquivo `.env` já está no `.gitignore` para proteger suas credenciais
- O EmailJS usa apenas a Public Key no frontend, que é segura para uso público

## 🆘 Problemas Comuns

### Erro: "Configuração de email não encontrada"
- Verifique se o arquivo `.env` existe na raiz do projeto
- Verifique se as variáveis começam com `VITE_`
- Reinicie o servidor de desenvolvimento

### Email não está chegando
- Verifique se o template está configurado corretamente
- Verifique se o Service está conectado corretamente
- Verifique a caixa de spam
- Verifique os logs no dashboard do EmailJS

### Erro ao enviar
- Verifique o console do navegador para mensagens de erro detalhadas
- Verifique se todos os IDs estão corretos no `.env`

## 📚 Recursos

- [Documentação do EmailJS](https://www.emailjs.com/docs/)
- [Limites do Plano Gratuito](https://www.emailjs.com/pricing/)

