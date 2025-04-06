#utf-8
#language: pt

Funcionalidade: testecriaçãodeseguro-01 - criação de proposta válida de seguro
    Cenário: criação de proposta válida de seguro
        Dado que o usuário acessa a página inicial do portal Tricentis
        Quando o usuário clica na opção Automobile
        E preenche o formulário com os dados do veículo
        E preenche o formulário com os dados do segurado
        E preenche o formulário com as informações do seguro
        E seleciona a opção de seguro desejada
        E informa os dados para envio da proposta
        Então visualiza a mensagem de envio da proposta com sucesso