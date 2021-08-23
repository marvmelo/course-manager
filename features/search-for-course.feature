Feature: Pesquisar Curso
	
	As a Usuário da plataforma
	I want to pesquisar por curso
	So that eu posso acessá-los

	Scenario: Pesquisa que retorna apenas um resultado
		Given Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
		And Eu estou na aba "Pesquisa"
		When Eu pesquiso por "Deep Learning"
		Then O curso "Deep Learning" aparece para ser selecionado
	#Scenario: Pesquisa que retorna mais de um resultado
		#Given Eu estou na aba "Pesquisa"
		#And Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
		#When Eu pesquiso por "Introdução"
		#Then Os cursos "Introdução a Computação", "Introdução a Programação" e "Introdução a Algoritmos"  aparecem para serem selecionados
	#Scenario: Pesquisa que retorna  nenhum resultado
		#Given Eu estou na aba "Pesquisa"
		#And Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos" e "Deep Learning" estão cadastrados no sistema
		#When Eu pesquiso por "Ethical Hacking"
		#Then A página aparece vazia
	#Scenario: Pesquisa que retorna  nenhum resultado
		#Given Eu estou na aba "Pesquisa"
		#And Não há curso registrado no sistema
		#When Eu pesquiso por "Ethical Hacking"
		#Then A página aparece vazia
	#Scenario: Pesquisa que retorna mais de um resultado
		#Given Eu estou na aba "Pesquisa"
		#And Os cursos "Introdução a Computação", "Introdução a Programação", "Introdução a Algoritmos", "Calculo I", "Calculo II", "Calculo III", "Calculo IV"e "Deep Learning" estão cadastrados no sistema
		#When Eu pesquiso por "Calc"
		#Then Os cursos "Calculo I", "Calculo II", "Calculo III", "Calculo IV"  aparecem para serem selecionados
	#Scenario: Pesquisa que retorna  nenhum resultado
		#Given Eu estou na aba "Pesquisa"
		#And Nenhum Curso está registrado no sistena
		#When Eu deixo a caixa de pesquisa em branco
		#Then A página aparec vazia



