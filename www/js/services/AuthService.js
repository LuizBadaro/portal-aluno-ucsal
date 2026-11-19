
angular.module('portalUcsal')

.factory('AuthService', function() {

    var aluno = {
        matricula: '20261001',
        senha: '123456',
        nome: 'Aluno UCSal'
    };

    var usuarioLogado = null;

    return {
        login: function(matricula, senha) {
            if (matricula === aluno.matricula &&
                senha === aluno.senha) {

                usuarioLogado = {
                    matricula: aluno.matricula,
                    nome: aluno.nome
                };

                return true;
            }

            return false;
        },

        logout: function() {
            usuarioLogado = null;
        },

        estaLogado: function() {
            return usuarioLogado !== null;
        },

        getUsuario: function() {
            return usuarioLogado;
        }
    };
});
