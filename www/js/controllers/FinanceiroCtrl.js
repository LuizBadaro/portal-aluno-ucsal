
angular.module('portalUcsal')

.controller('FinanceiroCtrl', function(
    $scope,
    $window,
    FinanceiroService
) {

    // Lista de semestres disponíveis
    $scope.semestres = FinanceiroService.listarSemestres();

    // Semestre selecionado inicialmente
    $scope.semestreSelecionado = '2026.2';

    // Mensalidades do semestre
    $scope.mensalidades = [];

    // Totais financeiros
    $scope.totalPago = 0;
    $scope.totalPendente = 0;

    // Mensagem apresentada ao usuário
    $scope.mensagem = '';

    // Carrega as mensalidades do semestre selecionado
    $scope.carregarMensalidades = function() {

        $scope.mensalidades =
            FinanceiroService.filtrarPorSemestre(
                $scope.semestreSelecionado
            );

        $scope.totalPago = 0;
        $scope.totalPendente = 0;
        $scope.mensagem = '';

        // Calcula os totais
        angular.forEach($scope.mensalidades, function(mensalidade) {

            if (mensalidade.status === 'Pago') {
                $scope.totalPago += mensalidade.valor;
            }

            if (mensalidade.status === 'Pendente') {
                $scope.totalPendente += mensalidade.valor;
            }

        });

    };

    // Copia o código de barras fictício
    $scope.copiarCodigo = function(mensalidade) {

        var codigo = mensalidade.codigoBarras;

        // Utiliza a API de clipboard quando disponível
        if ($window.navigator.clipboard &&
            $window.navigator.clipboard.writeText) {

            $window.navigator.clipboard.writeText(codigo)
                .then(function() {

                    $scope.$applyAsync(function() {
                        $scope.mensagem =
                            'Código de barras copiado com sucesso!';
                    });

                })
                .catch(function() {

                    $scope.$applyAsync(function() {
                        $scope.mensagem =
                            'Não foi possível copiar o código.';
                    });

                });

        } else {

            // Alternativa para navegadores sem Clipboard API
            var campo = $window.document.createElement('textarea');

            campo.value = codigo;
            campo.style.position = 'fixed';
            campo.style.opacity = '0';

            $window.document.body.appendChild(campo);
            campo.select();

            var copiado = $window.document.execCommand('copy');

            $window.document.body.removeChild(campo);

            $scope.mensagem = copiado
                ? 'Código de barras copiado com sucesso!'
                : 'Não foi possível copiar o código.';
        }

    };

    // Carregamento inicial
    $scope.carregarMensalidades();

});
