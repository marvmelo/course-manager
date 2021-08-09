Feature: Criar Cadastro

    As a usuário
    I want to criar uma conta
    So that eu possa usar os recursos da aplicação

    Scenario: Criar cadastro bem sucedido
        Given Eu estou deslogado
        And Eu estou na página "Criar cadastro"
        And Não há contas com a senha "CorrectHorseBatteryStaple" e o email "barbie100@hotmail.com"
        When Eu insiro as informações de nome, email e senha, respectivamente "Barbara", "barbie100@hotmail.com" e "CorrectHorseBatteryStaple"
        And Eu aperto em "Criar conta"
        Then Eu vejo uma mensagem "Conta Criada"
        When Eu confirmo a mensagem
        Then Eu estou na página "Fazer login"
    Scenario: Criar cadastro com email já existente
        Given Eu estou deslogado
        And Eu estou na página "Criar cadastro"
        And Há uma conta com o email "barbie100@hotmail.com"
        When Eu insiro as informações de nome, email e senha, respectivamente "Barbara", "barbie100@hotmail.com" e "CorrectHorseBatteryStaple"
        And Eu aperto em "Criar conta"
        Then Eu vejo uma mensagem "Email já cadastrado"
    Scenario: Tentar criar cadastro sem informar dados
        Given Eu estou deslogado
        And Eu estou na página "Criar cadastro"
        And Os campos de nome, email e senha estão vazios.
        When Eu aperto em "Clicar conta"
        Then Eu vejo uma mensagem "Formulário Incompleto"
    Scenario: Criar cadastro com senha já existente
        Given Eu estou deslogado
        And Eu estou na página "Criar cadastro"
        And Há uma conta com a senha "CorrectHorseBatteryStaple", o email "barbie100@hotmail.com" e nome "Barbara"
        When Eu insiro as informações de nome, email e senha, respectivamente "Julio", "kaiser@hotmail.com" e "CorrectHorseBatteryStaple"
        And Eu aperto em "Criar conta"
        Then Eu vejo uma mensagem "Conta Criada"
        When eu confirmo a mensagem
        Then Eu estou na página "Fazer login"
