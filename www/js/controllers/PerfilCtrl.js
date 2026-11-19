
angular.module('portalUcsal')

.controller('PerfilCtrl', function($scope, AlunoService) {

    // Carrega os dados do aluno
    $scope.aluno = AlunoService.obterAluno();

    // Mensagens de feedback
    $scope.mensagemSucesso = '';
    $scope.mensagemErro = '';

    // Salva as alterações cadastrais
    $scope.salvar = function() {

        $scope.mensagemSucesso = '';
        $scope.mensagemErro = '';

        // Verifica os campos obrigatórios
        if (
            !$scope.aluno.email ||
            !$scope.aluno.telefone ||
            !$scope.aluno.cep ||
            !$scope.aluno.rua ||
            !$scope.aluno.bairro ||
            !$scope.aluno.cidade
        ) {
            $scope.mensagemErro =
                'Preencha todos os campos obrigatórios.';
            return;
        }

        // Valida o formato do e-mail
        var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test($scope.aluno.email)) {
            $scope.mensagemErro =
                'Informe um e-mail válido.';
            return;
        }

        // Valida o CEP
        var cepValido = /^\d{5}-?\d{3}$/;

        if (!cepValido.test($scope.aluno.cep)) {
            $scope.mensagemErro =
                'Informe um CEP válido com 8 dígitos.';
            return;
        }

        // Atualiza os dados no Service
        $scope.aluno =
            AlunoService.atualizarDadosPessoais($scope.aluno);

        $scope.mensagemSucesso =
            'Dados cadastrais atualizados com sucesso!';
    };

    // Cancela alterações não salvas
    $scope.cancelar = function() {

        $scope.aluno = AlunoService.obterAluno();

        $scope.mensagemSucesso = '';
        $scope.mensagemErro = '';
    };

});
