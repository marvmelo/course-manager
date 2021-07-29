Feature: Pesquisar Curso
	Como Usuário da plataforma
	Desejo pesquisar por curso


	Background:
		Given estou logado como "professor" ou como "aluno"

	Scenario: Pesquisa que retorna apenas um resultado
	Given: Eu estou na aba "Pesquisa"
	And: Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
	When: Eu pesquiso por "Deep Learning"
	Then: O curso "Deep Learning" aparece para ser selecinado

	Scenario: Pesquisa que retorna mais de um resultado
	Given: Eu estou na aba "Pesquisa"
	And: Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
	When: Eu pesquiso por "Introdução"
	Then: Os cursos "Introdução a Computação", "Introdução a Programação" e "Introdução a Algoritmos"  aparecem para serem selecinados

	Scenario: Pesquisa que retorna  nenhum resultado
	Given: Eu estou na aba "Pesquisa"
	And: Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
	When: Eu pesquiso por "Ethical Hacking"
	Then: Eu recebo uma mensagem informando que nenhum curso foi encontrado.
