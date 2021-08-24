Feature Adicionar Instituição
	Como representante de uma instituição
	desejo cadastra-la.

	Background:
		Instituição "UPA" já está cadastrada.

	Scenario: Nova Instituição
		Given Eu estou na página de Instituição.
		And Vejo as instituições “ABRA Cursos”, “UFPE”, “Vitória Gran Cursos”
		And Vejo a opção de cadastrar instituição.
		When Eu seleciono para cadastrar nova instituição.
		Then Eu entro na página “Cadastro de Instituições”.
	Scenario: Cadastro de instituição.
		Given Eu estou na página “Cadastro de Instituição”
		When Eu preencho o nome da instituição “UFPE”.
		And preencho o email da instituição “mail@ufpe.edu”.
		And preencho o código de cadastro “DF4H6GJ45F47”.
		Then Eu entro na página “Instituições”.
		And Eu vejo a UFPE como instituição.
	Scenario: Cadastro de instituição sem sucesso.
		Given Eu estou na página “Cadastro de Instituição”
		When Eu preencho o nome da instituição “UPA”.
		And preencho o email da instituição “mail@upa.edu”.
		And preencho o código de cadastro “F4D5S47Y58AN”.
		Then Eu vejo uma mensagem de erro alertando que a instituição já está cadastrada.
		And Eu entro na página “Instituições”.