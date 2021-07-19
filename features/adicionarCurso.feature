Feature: Gerenciar curso
    Como administrador ou professor vinculado à instituição
    Desejo adicionar, remover e editar cursos
    para que eu consiga disponibilizá-los aos alunos

    Background: 
        Given estou logado como "professor"

    Scenario: Cadastrar curso bem sucedido
        Given estou na página "Cursos"
        When adiciono curso com título e capacidade máxima de alunos, respectivamente, "Getting started with Javascript" e "25"
        Then estou na página do curso de título "Getting started with Javascript"
        And vejo uma mensagem de sucesso

    Scenario: Cadastrar curso com título repetido
        Given estou na página "Cursos"
        And existe um curso com título "Getting started with Javascript"
        When adiciono curso com título e capacidade máxima de alunos, respectivamente, "Getting started with Javascript" e "25"
        Then estou na página do curso de título "Getting started with Javascript"
        And vejo uma mensagem de erro "Curso com título já existente"

    Scenario: Modificar status do curso
        Given estou na página do curso de título "Getting started with Javascript"
        And o curso está com status "Em andamento"
        When mudo o status do curso para "Concluído"
        Then vejo uma mensagem de confirmação
        And ainda estou na página do curso de título "Getting started with Javascript"

    Scenario: Editar curso com status concluído
        Given estou na página do curso de título "Getting started with Javascript"
        And o curso está com status "Concluído"
        When tento editar o curso
        Then vejo uma mensagem de erro "Não é possível editar o curso com status de concluído."
        And ainda estou na página do curso de título "Getting started with Javascript"

    Scenario: Tentar excluir curso com status "Em andamento"
        Given estou na página do curso de título "Getting started with Javascript"
        And o curso está com status "Em andamento"
        When tento excluir o curso
        Then vejo uma mensagem de erro "Não é possível excluir um curso em andamento. Modifique o status para cancelado ou concluído antes de excluir"
        And ainda estou na página do curso de título "Getting started with Javascript"

    Scenario: Excluir curso com status "Concluído"
        Given estou na página do curso de título "Getting started with Javascript"
        And o curso está com status "Concluído"
        When excluo o curso
        Then vejo uma mensagem de sucesso "Curso excluído com sucesso"
        * estou na página "Cursos"
        And não existe curso de título "Getting started with Javascript"