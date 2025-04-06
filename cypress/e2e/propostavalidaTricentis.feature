#utf-8
#language: pt

Funcionalidade: testecriaçãodeseguro-01 - criação de proposta válida de seguro
    Cenário: criação de proposta válida de seguro
        Dado que o usuário esteja na página inicial do portal Tricentis
        E clica na opção Automobile
        E preenche o formulario com os dados do veículo
        E preenche o formulario com os dados do segurado
        E preenche o formulario com os dados do seguro
        Quando seleciona o plano de seguro
        E preenche os dados para envio de proposta
        Então a proposta é enviada com sucesso