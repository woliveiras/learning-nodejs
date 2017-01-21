# Aprendendo Nodejs

*Experimental* - repositório para hospedar meus códigos de exemplos enquanto estudo Nodejs

## Requisitos

- NVM: https://woliveiras.com.br/posts/utilizando-versoes-antigas-do-nodejs/
- Express Generator: `npm i -g express-generator`
- Nodemon: `npm i -g nodemon`

## Aplicações de exemplo

**NTalk**

O NTalk é um exemplo de app de agenda de contatos com chat real-time do livro [Aplicações web real-time com Node.js](https://www.casadocodigo.com.br/products/livro-nodejs)

Antes de rodar o app, instale as dependências (serviços) do projeto:

```
sh ntalk/install_deps.sh
```

E inicie os serviços:

```
sh run_services.sh
```

Para rodar o NTalk execute:

```
cd ntalk && npm i && node app.js
```

## Referências

Para aprender mais sobre Nodejs utilizarei os seguintes livros:

1. [Aplicações web real-time com Node.js](https://www.casadocodigo.com.br/products/livro-nodejs), [Caio Ribeiro](https://crpwebdev.github.io/)
1. [Construindo APIs REST com Node.js](https://www.casadocodigo.com.br/products/livro-apis-nodejs), [Caio Ribeiro](https://crpwebdev.github.io/)
