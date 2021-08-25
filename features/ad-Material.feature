Feature: Adicionar Curso
	Como usuário da plataforma
	Desejo adicionar material

	Scenario: Adicionar material sem nenhum ter nenhum curso cadastrado
		Given Eu estou na página de Adicionar Material
		And Nenhum curso foi cadastrado
		When Eu adiciono o material com o nome: "Cálculo 3.1", o tipo: "Documento" e o link: "https://youtube.com/CalculoTristeza.com"
		And Eu confirmo
		Then Aparecerá uma janela com o seguinte aviso: "Formulário Incompleto!"
	
	Scenario: Adicionar material com curso cadastrado
		Given O curso "Testando" foi selecionado na parte SelectCurso
		Given Eu estou na página de Adicionar Material
		When Eu adiciono o material com o nome: "Cálculo 3", o tipo: "Vídeo" e o link: "https://youtube.com/CalculodaTristeza.com"
		And Eu confirmo
		Then Aparecerá uma janela com o seguinte aviso: "Arquivo adicionado!"

	Scenario: Tentar adicionar material sem todos os campos estarem preenchidos
		Given Um curso foi selecionado na parte SelectCurso
		Given Eu estou na página de Adicionar Material
		When Eu deixo um campo não preenchido e coloco apenas nome: "Cálculo 3" e link: "https://youtube.com/CalculodaTristeza.com"
		And Eu confirmo
		Then Aparecerá uma janela com o seguinte aviso: "Formulário Incompleto!"

	Scenario: Adicionar material já existente
		Given Um curso foi selecionado na parte SelectCurso
		Given Eu estou na página de Adicionar Material
		And O material com o nome: "Cálculo 3", o tipo: "Vídeo" e o link: "https://youtube.com/CalculodaTristeza.com" já estão cadastrados no sistema
		When Eu adiciono o material com o nome: "Cálculo 3", o tipo: "Vídeo" e o link: "https://youtube.com/CalculodaTristeza.com"
		And Eu confirmo
		Then Aparecerá uma janela com o seguinte aviso: "Material já existente!"

	Scenario: Adicionar material com o campo link diferente
		Given Um curso foi selecionado na parte SelectCurso
		Given Eu estou na página de Adicionar Material
		And O material com o nome: "Cálculo 3", o tipo: "Vídeo" e o link: "https://youtube.com/CalculodaTristeza.com" já estão cadastrados no sistema
		When Eu adiciono o material com o nome: "Cálculo 3", o tipo: "Vídeo" e o link: "https://youtube.com/CalculoDaTristeza.com"
		And Eu confirmo
		Then Aparecerá uma janela com o seguinte aviso: "Arquivo adicionado!"

