# Guia: Como Ganhar o Seu Site Online Totalmente GRÁTIS

Se você quer o site no ar sem gastar **nem 1 real**, a melhor forma é usar a **Vercel** com um subdomínio grátis.

## 1. O que é "Totalmente Grátis"?
- **Hospedagem**: Roda o seu site 24h por dia (Vercel é grátis para projetos pessoais).
- **Domínio**: Você ganha um endereço como `privacy-sabrina.vercel.app` (Isso é **100% grátis**).
- **Nota**: Apenas domínios `.com` ou `.com.br` são pagos. Se você não se importa com o `.vercel.app` no final, não precisa pagar nada.

---

## 2. Passo a Passo: Método Mais Fácil (Arraste e Solte)

1.  Acesse [Vercel.com](https://vercel.com/) e crie uma conta (pode usar seu e-mail ou Gmail).
2.  No painel inicial, clique em **Add New...** > **Project**.
3.  Em vez de conectar o GitHub, clique no link pequeno em baixo: **"Want to deploy without Git? Import a project by uploading its directory or files"**.
4.  Arraste a pasta **`dist`** (que está dentro da pasta do seu projeto `g:\privacy clone`) para dentro do navegador.
5.  Pronto! Ele vai te dar o link grátis em menos de 1 minuto.

---

## 3. Método Avançado (Pelo Terminal)
Como eu vi que você já tem o `vercel` instalado no seu computador, você pode rodar esse comando na pasta do projeto:

```bash
vercel deploy --name privacy-clone
```
*Ele vai pedir para você fazer login no navegador e depois é só seguir os passos apertando Enter.*

---

## 🛡️ Dica de Segurança
Após hospedar, lembre-se de mudar a senha do seu painel de edição (que hoje é `1234`) para algo que só você saiba, clicando no botão de Edição que criamos!
