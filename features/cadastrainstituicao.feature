Scenario: Nova Instituição
	Given Eu estou na página de Instituição
	And Vejo as instituições “ABRA Cursos”, “UFPE”, “Vitória Gran Cursos”
	And Vejo a opção de cadastrar instituição.
	When Eu seleciono para cadastrar nova instituição.
	Then Eu entro na página “Cadastro de Instituições”.
Scenario: Cadastro de instituição.
	Given Eu estou na página “Cadastro de Instituição”
	When Eu preencho o nome da instituição “UFPe”.
	And preencho o email da instituição “mail@ufpe.edu”.
	And preencho o código de cadastro “DF4H6GJ45F47”.
	Then Eu entro na página “Instituições”.
	And Eu vejo a UFPe como instituição.