
angular.module('portalUcsal')

.controller('LoginCtrl', function($scope, $state, AuthService) {

    // Dados preenchidos no formulário
    $scope.usuario = {
        matricula: '',
        senha: ''
    };

    // Mensagem de erro
    $scope.erro = '';

    // Função executada ao clicar em Entrar
    $scope.entrar = function() {

        $scope.erro = '';

        if (!$scope.usuario.matricula || !$scope.usuario.senha) {
            $scope.erro = 'Preencha a matrícula e a senha.';
            return;
        }

        var autenticado = AuthService.login(
            $scope.usuario.matricula,
            $scope.usuario.senha
        );

        if (autenticado) {
            $state.go('app.noticias');
        } else {
            $scope.erro = 'Matrícula ou senha incorretos.';
        }
    };

});
