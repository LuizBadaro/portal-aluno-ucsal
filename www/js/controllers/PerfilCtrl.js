
angular.module('portalUcsal')

.controller('PerfilCtrl', function($scope, AlunoService) {

    // Carrega os dados do aluno
    $scope.aluno = AlunoService.obterAluno();

    // Mensagens para o usuário
    $scope.mensagem = '';
    $scope.erro = '';

    // Salva as alterações dos dados pessoais
    $scope.salvar = function() {

        $scope.mensagem = '';
        $scope.erro = '';

        // Verifica os campos obrigatórios
        if (!$scope.aluno.nome ||
            !$scope.aluno.email ||
            !$scope.aluno.telefone) {

            $scope.erro = 'Preencha todos os campos pessoais.';
            return;
        }

        // Validação básica do e-mail
        var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test($scope.aluno.email)) {
            $scope.erro = 'Informe um e-mail válido.';
            return;
        }

        // Atualiza os dados pessoais no serviço
        $scope.aluno = AlunoService.atualizarDadosPessoais(
            $scope.aluno
        );

        $scope.mensagem = 'Dados atualizados com sucesso!';
    };

    // Cancela alterações não salvas
    $scope.cancelar = function() {

        $scope.aluno = AlunoService.obterAluno();

        $scope.mensagem = '';
        $scope.erro = '';
    };

});
