#utf-8
#language: pt

Funcionalidade: testecriaçãodeseguro-01 - criação de proposta invalida de seguro
    Cenário: criação de proposta invalida de seguro
        Dado que o usuário acessa a página inicial do portal Tricentis
        Quando o usuário clica na opção Automobile
        E preenche o formulário com os dados do veículo
        E preenche o formulário com os dados do segurado
        E preenche o formulário com os dados do seguro de forma incorreta
        E avança para a seleção da proposta
        Então o sistema não exibe as opções de proposta disponíveis
        E exibe uma mensagem orientando o usuário a retornar para corrigir os dados dos formulários anteriores
        