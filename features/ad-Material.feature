Feature Adicionar Curso
	Como usuário da plataforma
	Desejo adicionar material

	Background:
		Given estou logado como "professor"

	Scenario: Adicionar material com sucesso
	Given: Eu estou na aba de "Adicionar Material"
	And: A lista de materiais está vazia
	When: Eu adiciono um material
	Then: Aparecerá uma janela com o seguinte aviso:
	"Arquivo adicionado!"

	Scenario: Tentar adicionar material sem todos 
	os campos estarem preenchidos
	Given: Eu estou na aba de "Adicionar Material"
	When: Eu deixo um campo ou mais não preenchidos
	Then: Aparecerá uma janela com o seguinte aviso:
	"Formulário Incompleto!"

	Scenario: Adicionar material já existente
	Given: Eu estou na aba de "Adicionar Material"
	And: Os materiais "Cálculo 1", "Cálculo 2" e "Cálculo 3"
	estão cadastrados no sistema
	When: Eu tento adicionar o material "Cálculo 2"
	Then: Uma janela aparecerá com o seguinte aviso:
	"Material já existente!"

	Scenario: Adicionar material com todos os campos iguais, menos
	um ou mais
	Given: Eu estou na aba de "Adicionar Material"
	And: O material "Cálculo 1"-"Vídeo"-"Link_qualquer"
	When: Eu tento adicionar o material: 
	"Cálculo 1"-"Documento"-"Link_qualquer"
	Then: "Arquivo adicionado!"