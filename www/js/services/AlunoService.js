
angular.module('portalUcsal')
.factory('AlunoService', function() {

    // Dados fictícios do aluno
    var aluno = {
        nome: 'João da Silva',
        matricula: '20261001',
        curso: 'Engenharia de Software',
        semestre: '2026.2',
        situacao: 'Ativo',

        email: 'joao.silva@email.com',
        telefone: '(71) 99999-9999',

        cep: '41740-090',
        rua: 'Avenida Professor Pinto de Aguiar',
        bairro: 'Pituaçu',
        cidade: 'Salvador'
    };

    return {

        // Retorna os dados do aluno
        obterAluno: function() {
            return angular.copy(aluno);
        },

        // Atualiza somente os campos permitidos
        atualizarDadosPessoais: function(dados) {

            aluno.email = dados.email;
            aluno.telefone = dados.telefone;
            aluno.cep = dados.cep;
            aluno.rua = dados.rua;
            aluno.bairro = dados.bairro;
            aluno.cidade = dados.cidade;

            return angular.copy(aluno);
        }
    };

});
