# Boas vindas ao repositório do projeto Microservice-Notification!

---

Neste projeto, foi desenvolvido um microserviço de notificações. Nele, você pode enviar uma notificação, cancelá-la, marcá-la como lida, marcá-la como não lida, ver quantas notificações um destinatário tem e ver todas as notificações de um destinatário.

Meu objetivo neste projeto era criar uma aplicação escalável e de fácil manutenção. Para isso, construí o projeto em Programação Orientada a Objetos (POO), seguindo os princípios do SOLID e aplicando o Domain-Driven Design (DDD) e a arquitetura hexagonal. Também utilizei os padrões de design "Adapter" e "Factory Method". Para garantir que a aplicação estava funcionando corretamente desde o início do desenvolvimento, apliquei o conceito de Behavior-Driven Development (BDD) para testar e validar o software.


## 🛠 Tecnologias usadas:

* Node;
* Typescript;
* Ts-node;
* Ts-node-dev;
* Chai;
* Mocha;
* Eslint;
* Express;
* Helmet;
* Mongoose;
* Docker;


## Execute localmente:

Clone o projeto
```bash
git clone git@github.com:yuryss98/Microservice-Notification.git
```


Vá para o diretório do projeto:
```bash
cd Microservice-Notification
```

Entre no Vs Code para verificar os arquivos usando o atalho no terminal:
```bash
code .
```


Abra O terminal e execute os comandos:
```bash
  docker compose up -d
```

```bash
  docker exec -it node_container bash
```


```bash
  npm install
```


Apartir daqui pode executar um comando para rodar os testes de comportamento do software, execute o seguinte comando:
```bash
  npm run test
```

Para iniciar a aplicação em modo de desenvolvimento:
```bash
  npm run dev
```

Para iniciar a aplicação em modo de produção:
```bash
  npm start
```


## A partir desse ponto ja pode testar os endpoints. Todos os endpoints vao ser acessiveis a partir de http://localhost:3005/notifications


<details close>
  <summary>POST /send/recipientId</summary>
  -- O método POST em /send/recipientId onde recipientId é o id de um destinatario, é responsavel pelo envio de uma notificação, para esse
  endpoint funcionar corretamente ele precisa de dois campos no corpo da requisição, sendo eles:
  
  --
  
 * content: campo do tipo texto - CAMPO OBRIGATORIO
  
 * category: campo do tipo texto - CAMPO OBRIGATORIO
  
  --
  
  EXEMPLO:

  http://localhost:3005/notifications/send/10

  ```
  {
    "content": "Você foi aprovado no processo seletivo",
    "category": "profissional"
  }
  ```
  
 RETORNO ESPERADO:

Status 201 e corpo da resposta:


  ```
  {
    "id": "63f7bd74801f5820a2cdd107",
    "category": "profissional",
    "content": "Você foi aprovado no processo seletivo",
    "recipientId": "10"
  }
  ```
  
  </details>
  
  
  <details close>
  <summary>GET /from/recipientId/count</summary>
  -- O método GET em  /from/recipientId/count onde recipientId é o id de um destinatario, é responsavel por retornar a quantidade de notificações de um destinatario.
  
 EXEMPLO:

  http://localhost:3005/notifications/from/10/count
  
 --
 
 
 RETORNO ESPERADO:
 
 Status 200 e o corpo da resposta:

  * 1;
  
  </details>


<details close>
  <summary>GET /from/recipientId</summary>
  -- O método GET em  /from/recipientId onde recipientId é o id de um destinatario, é responsavel por retornar todas as notificações de um destinatario.
  
 --
 
 EXEMPLO:

  http://localhost:3005/notifications/from/10
  
 --
 
 
 RETORNO ESPERADO:
 
 Status 200 e o corpo da resposta:

  ```
    [
      {
        "id": "63f7bf12801f5820a2cdd10b",
        "category": "profissional",
        "content": "Você foi aprovado no processo seletivo",
        "recipientId": "10",
        "createdAt": "2023-02-23T19:31:30.332Z",
        "canceledAt": null,
        "readAt": null
      }
    ]
```
  
  </details>


<details close>
  <summary>PATCH /notificationId/read</summary>
  -- O método PATCH em  /notificationId/read onde notificationId é o id de uma notificação, é responsavel por marca uma notificação como lida.
  
 --
 
 EXEMPLO:

  http://localhost:3005/notifications/63f7bf12801f5820a2cdd10b/read
  
 --
 
 
 RETORNO ESPERADO:

  Status 204, sem conteudo no corpo da resposta;
  
  </details>
  
  
  <details close>
  <summary>PATCH /notificationId/unread</summary>
  -- O método PATCH em  /notificationId/unread onde notificationId é o id de uma notificação, é responsavel por marca uma notificação como não lida.
  
 --
 
 EXEMPLO:

  http://localhost:3005/notifications/63f7bf12801f5820a2cdd10b/unread
  
 --
 
 
 RETORNO ESPERADO:

  Status 204, sem conteudo no corpo da resposta;
  
  </details>
  
  
  <details close>
  <summary>PATCH /notificationId/cancel</summary>
  -- O método PATCH em  /notificationId/cancel onde notificationId é o id de uma notificação, é responsavel por marcar uma notificação como cancelada.
  
 --
 
 EXEMPLO:

  http://localhost:3005/notifications/63f7bf12801f5820a2cdd10b/cancel
  
 --
 
 
 RETORNO ESPERADO:

  Status 204, sem conteudo no corpo da resposta;
  
  </details>
  
