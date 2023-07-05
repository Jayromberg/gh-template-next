## Configurações de projeto

Primeiro, instale as dependências:

```bash
npm install
```

No repositório GitHub, confirme se a opção "Read and write permissions" em "Settings">"Actions">"General">"Workflow permissions" está habilitada.

Depois, configure as "Actions secrets and variables". Para isso, tenha uma conta na vercel e realize login com o comando:

```bash
npm run vercel:login
```

Execute o seguinte comando para gerar o diretório ".vercel" e realizar o primeiro "deploy":

```bash
npm run vercel
```

No repositório GitHub, em "Settings">"Secrets and variables">"Actions" as seguintes "secrets" deveram ser criadas:

ATENÇÃO: Não forneça o token e os ID para outras pessoas!

- VERCEL_ORG_ID
  Você encontra o Id no diretório ".vercel">"project.json">"orgId"

- VERCEL_PROJECT_ID
  Você encontra o Id no diretório ".vercel">"project.json">"projectId"

- VERCEL_TOKEN
  Você encontra o token no site da [Vercel](https://vercel.com/account) em "Settings">"Tokens">"Create Token"

Com isso, todas as configurações estão concluídas!

Qualquer duvida ou sugestão, me manda mensagem. =)
