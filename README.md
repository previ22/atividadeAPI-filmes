# API Filmes - Node.Js + Express
API REST simples para gerenciar filmes e series
 
## Pré-requisitos
- Node.js instalado
 
##   Como rodar
 
### Instalar dependências
```bash
npm i
```
 
### Iniciar  servidor
```bash
node index.js
```
 
### Acessar
Abra o nevegador em: `http://localhost:3000`
 
## Endpoints
 
### Filmes
 
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Buscar um filme específico |
| GET | `/filmes?genre` | Buscar um filme específico |
| POST | `/filmes` | Cria um filme |

 
### Series
 
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/series` | Lista todos as series |
| GET | `/series/:id` | Buscar uma serie específico |
| GET | `/series/:id` | Buscar uma serie específico |
| POST | `/series` | Cria uma serie |

 
## Tenologias 
- Node.js
- Express
 
## Notas 
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
