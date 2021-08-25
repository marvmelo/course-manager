Feature: Adicionar Curso
	Como usuário da plataforma
	Desejo adicionar material

	Background:
		Given Eu estou logado
		#Given Um curso foi selecionado na parte "SelectCurso"

	Scenario: Adicionar material com sucesso
		Given Eu estou na página de "Adicionar Material"
		When Eu adiciono o material com o nome: "Cálculo 3", o tipo: "Vídeo" e o link: "https://youtube.com/CalculodaTristeza.com"
		And Eu confirmo
		Then Aparecerá uma janela com o seguinte aviso: "Arquivo adicionado!"

#	Scenario: Tentar adicionar material sem todos os campos estarem preenchidos
#		Given Eu estou na página de "Adicionar Material"
#		When Eu deixo um campo ou mais não preenchidos
#		And Eu clico no botão confirmar
#		Then Aparecerá uma janela com o seguinte aviso: "Formulário Incompleto!"
#
#	Scenario: Adicionar material já existente
#		Given Eu estou na página de "Adicionar Material"
#		And Os materiais "Cálculo 1", "Cálculo 2" e "Cálculo 3" estão cadastrados no sistema
#		And Eu clico no botão confirmar
#		Then Uma janela aparecerá com o seguinte aviso: "Material já existente!"
#
#	Scenario: Adicionar material com todos os campos iguais, menos um ou mais
#		And O material "Cálculo 1"-"Vídeo"-"Link_qualquer" já foi adicionado
#		And Eu clico no botão confirmar
#		Then "Arquivo adicionado!"