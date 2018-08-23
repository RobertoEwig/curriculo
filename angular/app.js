angular.module("curriculo", []);

angular.module("curriculo").controller("maincontrol", function($scope, $http){
	
	$scope.formacoes = [];
	$scope.status = '  ';
	
	var req = {
		method: 'GET',
		url: 'teste.json',
		headers:{
			'Content-Type': 'application/json; charset=utf-8; text/plain'			
		}
	}
	
	var ch = "Carga Horária";
	
	loadjsons = function(){
		$http(req).then(function (response){
			$scope.formacoes = response.data;
		});	
	}
	
	loadjsons();
	
	$scope.curriculo = {
		nome: "Roberto Ramon Américo da Silva Lima",
		nacionalidade: "Brasileiro",
		status: "Solteiro",
		idade: "22 anos",
		endereco: "Rua Thomaz Jobson, 09 - Tiúma - São Lourenço da Mata, PE",
		contato: "(81)35259782 - (81)996618738",
		email: "americoguerras@gmail.com"
	};
	
	/*$scope.formacoes=[
		{
			curso: "Graduação em Licenciatura Plena em Computação.",
			instituicao: "Universidade Federal Rural de Pernambuco, UFRPE",
			local: "Recife, Brasil.",
			cargahoraria: "Out/2013 - Dez/2018"
		}
		
	];*/

	$scope.experiencias=[
		{
			vinculo: "Vínculo institucional.",
			detalhe: "Bolsista de Iniciação à Docência, Carga horária: 8h/semanais, Bolsista de Iniciação à Docência pela CAPES na área de Ciências da Computação. Maio de 2014 a Maio de 2016. Desenvolvendo oficinas e atividades na área de pensamento computacional;"
		},
		{
			vinculo: "Monitor de oficinas.",
			detalhe: "Projeto Mais Educação na Escola Estadual Jarbas Passarinho em Camaragibe/PE. Agosto de 2014 a Dezembro de 2014. Carga horária adaptável a execução das oficinas. Monitor na oficina de Rádio."
		},
		{
			vinculo: "Estagiário.",
			detalhe: "No Centro de Tecnologia na Educação e Cidadania da Prefeitura do Recife. Maio de 2016 a Julho de 2016.Carga horária 4h/diárias. - Atuação como monitor de robótica (NAO e Lego) e colaborador do projeto de Iniciação ao Pensamento Computacional."
		},
		{
			vinculo: "Estagiário.",
			detalhe: "Na Companhia Brasileira de Trens Urbanos. Julho de 2016 até Julho de 2018. Carga horária 4h/diárias.- Técnico na área de T.I."
		},
		
	];
	
	$scope.conhecimentos=[
		{
			nome: "C/C++"
		},
		{
			nome: "Java"
		},
		{
			nome: "HTML5"
		},
		{
			nome: "AngularJS"
		},
		{
			nome: "NodeJS"
		}		
	];
	
	$scope.idiomas=[
		{
			nome: "Inglês",
			nivel: "Básico"
		},
		{
			nome: "Espanhol",
			nivel: "Básico"
		},
		{
			nome: "Mandarim",
			nivel: "Básico"
		}			
	];
	
	
});

