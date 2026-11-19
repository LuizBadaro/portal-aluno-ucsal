
angular.module('portalUcsal')

// Controller da lista de notícias e eventos
.controller('NoticiasCtrl', function($scope, NoticiasService) {

    // Categorias disponíveis
    $scope.categorias = [
        'Todas',
        'Acadêmico',
        'Evento',
        'Comunicado'
    ];

    // Categoria selecionada inicialmente
    $scope.categoriaSelecionada = 'Todas';

    // Carrega todas as notícias
    $scope.noticias = NoticiasService.listar();

    // Filtra as notícias por categoria
    $scope.filtrar = function(categoria) {

        $scope.categoriaSelecionada = categoria;

        $scope.noticias =
            NoticiasService.filtrarPorCategoria(categoria);
    };

})

// Controller dos detalhes de uma notícia
.controller('NoticiaDetalheCtrl', function(
    $scope,
    $stateParams,
    NoticiasService
) {

    // Recupera o ID informado na rota
    var id = $stateParams.id;

    // Busca a notícia correspondente
    $scope.noticia = NoticiasService.buscarPorId(id);

});
