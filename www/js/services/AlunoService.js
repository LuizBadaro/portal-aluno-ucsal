
angular.module('portalUcsal')

.factory('AlunoService', function() {

    // Dados fictícios do aluno
    var aluno = {
        nome: 'João da Silva',
        email: 'joao.silva@email.com',
        telefone: '(71) 99999-9999',

        matricula: '20261001',
        curso: 'Análise e Desenvolvimento de Sistemas',
        semestre: '2026.2',
        situacao: 'Ativo'
    };

    return {

        // Retorna os dados do aluno
        obterAluno: function() {
            return angular.copy(aluno);
        },

        // Atualiza apenas os dados pessoais
        atualizarDadosPessoais: function(dados) {

            aluno.nome = dados.nome;
            aluno.email = dados.email;
            aluno.telefone = dados.telefone;

            return angular.copy(aluno);
        }

    };

});
