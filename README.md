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

Execute o seguinte comando para gerar o diretório .vercel 

```bash
npm run deploy:staging
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
