Feature: Criar Cadastro

    As a usuário
    I want to criar uma conta
    So that eu possa usar os recursos da aplicação

    Scenario: Criar cadastro bem sucedido
        Given eu estou deslogado
        And eu estou na página "Criar cadastro"
        And não há conta com nome, email e senha "Barbara", "CorrectHorseBatteryStaple" e "barbie100@hotmail.com"
        When eu insiro as informações de nome, email e senha "Barbara", "barbie100@hotmail.com" e "CorrectHorseBatteryStaple"
        And eu aperto em "Criar conta"
        Then eu vejo uma mensagem "Conta Criada!"
    Scenario: Criar cadastro com email já existente
        Given eu estou deslogado
        And eu estou na página "Criar cadastro"
        And há conta com nome, email e senha "Barb", "barbie100@hotmail.com", "psw"
        When eu insiro as informações de nome, email e senha "Barbara", "barbie100@hotmail.com" e "CorrectHorseBatteryStaple"
        And eu aperto em "Criar conta"
        Then eu vejo uma mensagem "Email já existente!"
    Scenario: Tentar criar cadastro sem informar dados
        Given eu estou deslogado
        And eu estou na página "Criar cadastro"
        When eu insiro as informações de nome, email e senha "", "" e ""
        When eu aperto em "Criar conta"
        Then eu vejo uma mensagem "Formulário Incompleto!"
    Scenario: Criar cadastro com senha já existente
        Given eu estou deslogado
        And eu estou na página "Criar cadastro"
        And há conta com nome, email e senha "Barb", "barbie100@hotmail.com", "CorrectHorseBatteryStaple"
        When eu insiro as informações de nome, email e senha "Julio", "kaiser@hotmail.com" e "CorrectHorseBatteryStaple"
        And eu aperto em "Criar conta"
        Then eu vejo uma mensagem "Conta Criada!"
