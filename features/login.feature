Feature: Logar

    As a usuário
    I want to logar
    So that eu possa usar os recursos só diponíveis a usuários logados

    Scenario: Fazer login
        Given eu estou deslogado
        And eu estou na página "Fazer login"
        And Há uma conta com o email "barbie100@hotmail.com" e senha "CorrectHorseBatteryStaple" e nome "Barbara"
        When eu insiro as informações de email e senha, respectivamente "barbie100@hotmail.com" e "CorrectHorseBatteryStaple"
        And eu aperto em "Acessar Conta"
        Then eu estou na página incial
        And eu estou logado como "Barbara"
    Scenario: Fazer login com senha errada
        Given eu estou deslogado
        And eu estou na página "Fazer login"
        And Há uma conta com o email "barbie100@hotmail.com" e senha "CorrectHorseBatteryStaple" e nome "Barbara"
        When eu insiro as informações de email e senha, respectivamente "barbie100@hotmail.com" e "Trovador"
        And eu aperto em "Acessar Conta"
        Then eu vejo a mensagem "Informações Incorretas"
    Scenario: Fazer login sem informar dados
        Given eu estou deslogado
        And eu estou na página "Fazer login"
        And Os campos nome e senha estão vazios
        When eu aperto em "Acessar Conta"
        Then eu vejo a mensagem "Informações Incorretas"