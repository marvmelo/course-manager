Feature: Avaliar Curso

    As a usuário
    I want avaliar um curso
    So that para que outros usuários possam ver a avaliação do curso

    Scenario: Terminando Curso ao terminar
        Given eu estou "logado"        
        And eu "terminei o curso HTML"
        And eu estou na página "Avalicar Curso"
        When eu insiro "nota para o curso"
        And eu aperto em "avaliar"
        Then minha avaliação é "somada a media do curso" 
        And eu vejo minha "avaliação atual"
        And eu vejo a "nova avaliação media do curso"
        
    Scenario: Avaliar curso em andamento
        Given eu estou "logado"
        And eu estou na página "Curso HTML"        
        When eu acesso a página "Avaliar Curso"
        And eu estou na página "Avalicar Curso"
        When eu insiro "nota para o curso"
        And eu aperto em "avaliar"
        Then minha avaliação é "somada a media do curso" 
        And eu vejo minha "avaliação atual"
        And eu vejo a "nova avaliação media do curso"

    Scenario: Mudar minha avaliação
        Given eu estou "logado"
        And eu estou na página "Curso HTML"        
        When eu acesso a página "Avaliar Curso"
        And eu estou na página "Avalicar Curso"
        When eu insiro "uma nova nota para o curso"
        And eu aperto em "avaliar"
        Then minha avaliação é "alterada" 
        And minha avaliação é "somada a media do curso"
        And eu vejo minha "avaliação atual"
        And eu vejo a "nova avaliação media do curso"