# Cadastro de Carro

**RF**

- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas aas categorias.

**RN**

- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado
- O carro deve ser cadastrado, por padrão, como disponível.
- O usuário responsável pelo cadastro deve ser um usuário Administrador.


# Listagem de Carros

**RF** 

- Deve ser possível listar todos os carros disponíveis.
- Dever ser possível listar todos os carros disponíveis pelo da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**

- O usuário não precisa estar logado no sistema.


# Cadatsro de Especificação no Carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros

**RN**

- Não deve ser possível cadastrar uma especificação para um carro não existente.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário Administrador.


# Cadastro da Imagem do Carro

**RF**

- Deve ser possível cadastrar a imagem do carro.

**RNF**

- Usar o multer para upload de arquivos

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário Administrador.


# Aluguel de Carro

**RF**

- Deve ser possível cadastrar um aluguel.

**RNF**


**RN** 

- O aluguel deve ter duração mínima de 24hs.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

# Devolução do carro

**RNF**

- Deve ser possível realizar a devolução de um carro

**RN** 

- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado a diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do aluguel.
- Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deverá estar logado na aplicação.