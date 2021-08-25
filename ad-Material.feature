Feature: Adicionar Curso
	Como usuário da plataforma
	Desejo adicionar material

	Background:
		Given: Um curso foi selecionado na parte "SelectCurso"

	Scenario: Adicionar material com sucesso
		Given: Eu estou na página de "Adicionar Material"
		And: A lista de materiais não contém o nome: "Cálculo 3", o tipo: Vídeo e o link: youtube.com/CalculodaTristeza
		When: Eu adiciono o material com o nome: "Cálculo 3", o tipo: Vídeo e o link: youtube.com/CalculodaTristeza
		And: Eu clico no botão confirmar
		Then: Aparecerá uma janela com o seguinte aviso: "Arquivo adicionado!"

	Scenario: Tentar adicionar material sem todos os campos estarem preenchidos
		Given: Eu estou na página de "Adicionar Material"
		When: Eu deixo um campo ou mais não preenchidos
		And: Eu clico no botão confirmar
		Then: Aparecerá uma janela com o seguinte aviso: "Formulário Incompleto!"

	Scenario: Adicionar material já existente
		Given: Eu estou na página de "Adicionar Material"
		And: Os materiais "Cálculo 1", "Cálculo 2" e "Cálculo 3" estão cadastrados no sistema
		When: Eu tento adicionar o material "Cálculo 2"
		And: Eu clico no botão confirmar
		Then: Uma janela aparecerá com o seguinte aviso: "Material já existente!"

	Scenario: Adicionar material com todos os campos iguais, menos um ou mais
		Given: Eu estou na página de "Adicionar Material"
		And: O material "Cálculo 1"-"Vídeo"-"Link_qualquer" já foi adicionado
		When: Eu tento adicionar o material: "Cálculo 1"-"Documento"-"Link_qualquer"
		And: Eu clico no botão confirmar
		Then: "Arquivo adicionado!"