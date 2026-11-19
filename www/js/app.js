
angular.module('portalUcsal', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

    // Rota da tela de login
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    });

    // Estrutura principal com menu lateral
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
    });

    // Rota do mural de notícias e eventos
    $stateProvider.state('app.noticias', {
        url: '/noticias',
        views: {
            'menuContent': {
                templateUrl: 'templates/noticias.html',
                controller: 'NoticiasCtrl'
            }
        }
    });

    // Rota dos detalhes de uma notícia
    $stateProvider.state('app.noticiaDetalhe', {
        url: '/noticia/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/noticia-detalhe.html',
                controller: 'NoticiaDetalheCtrl'
            }
        }
    });

    // Rota do perfil do aluno
    $stateProvider.state('app.perfil', {
        url: '/perfil',
        views: {
            'menuContent': {
                templateUrl: 'templates/perfil.html',
                controller: 'PerfilCtrl'
            }
        }
    });

    // Rota do financeiro do aluno
    $stateProvider.state('app.financeiro', {
        url: '/financeiro',
        views: {
            'menuContent': {
                templateUrl: 'templates/financeiro.html',
                controller: 'FinanceiroCtrl'
            }
        }
    });

    // Rota inicial do aplicativo
    $urlRouterProvider.otherwise('/login');

})

// Controller responsável pelo menu lateral
.controller('MenuCtrl', function($scope, $state, AuthService) {

    // Encerra a sessão do aluno
    $scope.sair = function() {

        AuthService.logout();

        // Retorna à tela de login
        $state.go('login');
    };

})

// Proteção das rotas internas
.run(function($rootScope, $state, AuthService) {

    // Verifica a autenticação antes de mudar de página
    $rootScope.$on('$stateChangeStart', function(event, toState) {

        // Identifica as páginas protegidas
        var rotaProtegida =
            toState.name === 'app' ||
            toState.name.indexOf('app.') === 0;

        // Impede acesso sem autenticação
        if (rotaProtegida && !AuthService.estaLogado()) {

            event.preventDefault();

            // Redireciona para o login
            $state.go('login');
        }

    });

});
