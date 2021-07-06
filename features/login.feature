Scenario: Fazer login
    Given: Eu estou deslogado
    And Eu estou na página “Fazer login”
    And Há uma conta com o email “barbie100@hotmail.com” e senha “CorrectHorseBatteryStaple” e nome “Barbara”
    When Eu insiro as informações de email e senha, respectivamente “barbie100@hotmail.com” e “CorrectHorseBatteryStaple”
    And Eu aperto em “Acessar Conta”
    Then Eu estou na página incial
    And Eu estou logado como “Barbara”
Scenario: Fazer login com senha errada
    Given: Eu estou deslogado
    And Eu estou na página “Fazer login”
    And Há uma conta com o email “barbie100@hotmail.com” e senha “CorrectHorseBatteryStaple” e nome “Barbara”
    When Eu insiro as informações de email e senha, respectivamente “barbie100@hotmail.com” e “Trovador”
    And Eu aperto em “Acessar Conta”
    Then Eu vejo a mensagem “Informações Incorretas”