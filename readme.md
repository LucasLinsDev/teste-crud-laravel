# LARAVEL API COM FRONT END EN REACTJS

# Instalação
# Para instalar o projeto, siga os seguintes passos:

1. Clone o repositório para o seu ambiente de desenvolvimento
2. Execute o comando composer install para instalar as dependências do projeto
3. Configure o arquivo .env com as suas configurações de banco de dados
4. Execute o comando php artisan migrate para criar as tabelas no banco de dados
5. Execute o comando php artisan db:seed para criar as categorias e os usuários

Inicie o servidor com o comando php artisan serve


# Utilização
# A API possui as seguintes rotas:

1. GET /pessoas Retorna uma lista de todos os itens
2. GET /pessoas/{id}: Retorna um item específico pelo seu ID
3. POST /pessoas: Cria um novo item
4. PUT /pessoas/{id}: Atualiza um item específico pelo seu ID
5. DELETE /pessoas/{id}: Exclui um item específico pelo seu ID
Cada rota possui seus próprios parâmetros e campos de retorno específicos, que podem ser encontrados na documentação da API.


# REACT JS CLIENT SIDE

#Para instalar o projeto, siga os seguintes passos:

1. Clone o repositório para o seu ambiente de desenvolvimento
2. Execute o comando npm install para instalar as dependências do projeto

3. Inicie o servidor de desenvolvimento com o comando npm start

# MELHORIAS 

#Para melhorar o projeto 

1. Criar autentificação JWT com registro e login.
2. Criar páginas no frontend login registro 
3. Criar contexto para login no ReactJS.
4. Refatorar o componente de páginação
5. Verificar se o usuário já esta cadastrado antes de salvar no banco de dados.
6. Teste dos componenents em react e documentação da api.
