Feature: Logar

    As a usuário
    I want to logar
    So that eu possa usar os recursos só diponíveis a usuários logados

    Scenario: Fazer login
        Given eu estou deslogado
        And há conta com nome, email e senha "Barbara", "barbie100@hotmail.com" e "CorrectHorseBatteryStaple" 
        When eu vou para página "Fazer login"
        Then eu estou na página "Fazer login"
        When eu insiro as informações de email e senha "barbie100@hotmail.com" e "CorrectHorseBatteryStaple"
        And eu aperto em "Acessar Conta"
        Then eu estou na página "Main"
    Scenario: Fazer login com senha errada
        Given eu estou deslogado
        And há conta com nome, email e senha "Barbara", "barbie100@hotmail.com" e "CorrectHorseBatteryStaple"
        When eu vou para página "Fazer login"
        Then eu estou na página "Fazer login"
        When eu insiro as informações de email e senha "barbie100@hotmail.com" e "Trovador"
        And eu aperto em "Acessar Conta"
        Then eu vejo a mensagem "Informações Incorretas"
    Scenario: Fazer login sem informar dados
        Given eu estou deslogado
        When eu vou para página "Fazer login"
        Then eu estou na página "Fazer login"
        When eu insiro as informações de email e senha "" e ""
        And eu aperto em "Acessar Conta"
        Then eu vejo a mensagem "Informações Incorretas"