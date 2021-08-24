Feature: Pesquisar Curso
	
	As a Usuário da plataforma
	I want to pesquisar por curso
	So that eu posso acessá-los

	Scenario: Pesquisa que retorna apenas um resultado
		Given Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
		And Eu estou na aba "Pesquisar Cursos"
		When Eu pesquiso por "Deep Learning"
		Then Apenas o curso "Deep Learning" aparece como resultado
	Scenario: Pesquisa que retorna mais de um resultado
		Given Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
		And Eu estou na aba "Pesquisa"
		When Eu pesquiso por "Introdução"
		Then Os cursos "Introdução a Computação", "Introdução a Programação" e "Introdução a Algoritmos"  aparecem como resultado
	Scenario: Pesquisa que retorna  nenhum resultado
		Given Os cursos "Basic French", "Machine Learning", "Neural Networks" e "Angular for Beginners" estão cadastrados no sistema
		And Eu estou na aba "Pesquisa"
		When Eu pesquiso por "Ethical Hacking"
		Then Nenhum resultado é encontrado
	Scenario: Pesquisa com nenhum curso cadastrado no sistema
		Given Não há curso registrado no sistema
		And Eu estou na aba "Pesquisa"	
		When Eu pesquiso por "Data Science"
		Then Nenhum resultado é encontrado
	Scenario: Pesquisa que retorna 4 resultados
		Given Os cursos "Calculo I", "Calculo II", "Calculo III" e "Calculo IV" estão cadastrados no sistema
		And Eu estou na aba "Pesquisa" 
		When Eu pesquiso por "Calc"
		Then Os cursos "Calculo I", "Calculo II", "Calculo III", "Calculo IV"  aparecem como resultado
	Scenario: Pesquisa com nenhuma informação inserida
		Given Não há curso registrado no sistema
		And Eu estou na aba "Pesquisa"
		When Eu deixo a caixa de pesquisa em branco e faço uma pesquisa
		Then Nenhum resultado é encontrado


