
angular.module('portalUcsal')

.factory('NoticiasService', function() {

    var noticias = [
        {
            id: 1,
            titulo: 'Inscrições abertas para monitoria',
            categoria: 'Acadêmico',
            data: '18/11/2026',
            resumo: 'Estão abertas as inscrições para o programa de monitoria acadêmica.',
            descricao: 'A UCSal informa que estão abertas as inscrições para o programa de monitoria acadêmica. Os estudantes interessados poderão participar do processo seletivo conforme os critérios estabelecidos pela universidade.',
            imagem: 'img/monitoria.jpg'
        },
        {
            id: 2,
            titulo: 'Semana de Tecnologia UCSal',
            categoria: 'Evento',
            data: '20/11/2026',
            resumo: 'Evento reúne palestras e atividades sobre inovação e tecnologia.',
            descricao: 'A Semana de Tecnologia UCSal contará com palestras, oficinas e apresentações sobre desenvolvimento de software, inteligência artificial e inovação.',
            imagem: 'img/tecnologia.jpg'
        },
        {
            id: 3,
            titulo: 'Calendário acadêmico atualizado',
            categoria: 'Comunicado',
            data: '15/11/2026',
            resumo: 'Confira as informações sobre o calendário acadêmico.',
            descricao: 'A universidade disponibilizou informações atualizadas sobre o calendário acadêmico, incluindo períodos de avaliações, atividades e encerramento do semestre.',
            imagem: 'img/calendario.jpg'
        },
        {
            id: 4,
            titulo: 'Feira de Estágios e Carreiras',
            categoria: 'Evento',
            data: '25/11/2026',
            resumo: 'Oportunidades de estágio e networking para estudantes.',
            descricao: 'A Feira de Estágios e Carreiras reunirá empresas e profissionais para apresentar oportunidades de estágio, emprego e desenvolvimento profissional.',
            imagem: 'img/estagios.jpg'
        }
    ];

    return {

        // Retorna todas as notícias
        listar: function() {
            return noticias;
        },

        // Busca uma notícia pelo ID
        buscarPorId: function(id) {
            for (var i = 0; i < noticias.length; i++) {
                if (noticias[i].id === parseInt(id, 10)) {
                    return noticias[i];
                }
            }

            return null;
        },

        // Filtra notícias pela categoria
        filtrarPorCategoria: function(categoria) {
            if (!categoria || categoria === 'Todas') {
                return noticias;
            }

            return noticias.filter(function(noticia) {
                return noticia.categoria === categoria;
            });
        }

    };

});
