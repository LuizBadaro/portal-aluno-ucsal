
angular.module('portalUcsal')

.factory('FinanceiroService', function() {

    // Dados financeiros fictícios
    var mensalidades = [
        {
            id: 1,
            semestre: '2026.1',
            mes: 'Janeiro',
            vencimento: '10/01/2026',
            valor: 850.00,
            status: 'Pago',
            codigoBarras: '00190000000000850000000000000000000000000001'
        },
        {
            id: 2,
            semestre: '2026.1',
            mes: 'Fevereiro',
            vencimento: '10/02/2026',
            valor: 850.00,
            status: 'Pago',
            codigoBarras: '00190000000000850000000000000000000000000002'
        },
        {
            id: 3,
            semestre: '2026.1',
            mes: 'Março',
            vencimento: '10/03/2026',
            valor: 850.00,
            status: 'Pago',
            codigoBarras: '00190000000000850000000000000000000000000003'
        },
        {
            id: 4,
            semestre: '2026.2',
            mes: 'Julho',
            vencimento: '10/07/2026',
            valor: 900.00,
            status: 'Pago',
            codigoBarras: '00190000000000900000000000000000000000000004'
        },
        {
            id: 5,
            semestre: '2026.2',
            mes: 'Agosto',
            vencimento: '10/08/2026',
            valor: 900.00,
            status: 'Pago',
            codigoBarras: '00190000000000900000000000000000000000000005'
        },
        {
            id: 6,
            semestre: '2026.2',
            mes: 'Setembro',
            vencimento: '10/09/2026',
            valor: 900.00,
            status: 'Pendente',
            codigoBarras: '00190000000000900000000000000000000000000006'
        },
        {
            id: 7,
            semestre: '2026.2',
            mes: 'Outubro',
            vencimento: '10/10/2026',
            valor: 900.00,
            status: 'Pendente',
            codigoBarras: '00190000000000900000000000000000000000000007'
        },
        {
            id: 8,
            semestre: '2026.2',
            mes: 'Novembro',
            vencimento: '10/11/2026',
            valor: 900.00,
            status: 'Pendente',
            codigoBarras: '00190000000000900000000000000000000000000008'
        }
    ];

    return {

        // Retorna todas as mensalidades
        listar: function() {
            return angular.copy(mensalidades);
        },

        // Retorna os semestres disponíveis
        listarSemestres: function() {
            return ['2026.1', '2026.2'];
        },

        // Filtra mensalidades por semestre
        filtrarPorSemestre: function(semestre) {

            return mensalidades.filter(function(mensalidade) {
                return mensalidade.semestre === semestre;
            });

        }

    };

});
