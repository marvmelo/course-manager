Feature: Pesquisar Curso
	Como Usuário da plataforma
	Desejo pesquisar por curso


	Background:
		Given estou logado como "professor" ou como "aluno"

	Scenario: Pesquisa que retorna apenas um resultado
	Given: Eu estou na aba "Pesquisa"
	And: Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
	When: Eu pesquiso por "Deep Learning"
	Then: O curso "Deep Learning" aparece para ser selecionado

	Scenario: Pesquisa que retorna mais de um resultado
	Given: Eu estou na aba "Pesquisa"
	And: Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
	When: Eu pesquiso por "Introdução"
	Then: Os cursos "Introdução a Computação", "Introdução a Programação" e "Introdução a Algoritmos"  aparecem para serem selecionados

	Scenario: Pesquisa que retorna  nenhum resultado
	Given: Eu estou na aba "Pesquisa"
	And: Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
	When: Eu pesquiso por "Ethical Hacking"
	Then: Eu recebo uma mensagem informando que nenhum curso foi encontrado.

	Scenario: Pesquisa que retorna  nenhum resultado
	Given: Eu estou na aba "Pesquisa"
	And: Não há curso registrado no sistema
	When: Eu pesquiso por "Ethical Hacking"
	Then: Eu recebo uma mensagem informando que nenhum curso foi encontrado.


	Scenario: Pesquisa que retorna mais de um resultado
	Given: Eu estou na aba "Pesquisa"
	And: Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos", "Calculo I", "Calculo II", "Calculo III", "Calculo IV"e "Deep Learning" estão cadastrados no sistema
	When: Eu pesquiso por "Calc"
	Then: Os cursos "Calculo I", "Calculo II", "Calculo III", "Calculo IV"  aparecem para serem selecionados
	And? Eu Posso fazer outra Pesquisa


	Scenario: Pesquisa que retorna  nenhum resultado
	Given: Eu estou na aba "Pesquisa"
	And: Nenhum Curso está registrado no sistena
	When: Eu deixo a caixa de pesquisa em branco
	Then: Eu recebo uma mensagem informando que nenhum curso foi encontrado.
	And: Eu posso fazer outra pesquisa
	


