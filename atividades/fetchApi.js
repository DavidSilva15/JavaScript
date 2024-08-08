const imgs = document.querySelectorAll('img.img');

        // Sua chave de API do Pexels
        const API_KEY = 'UNYw12IO1rT2Hy3gQ8M0h3v8ebWV5thShG4Y6XCSBgCpFgoEInpkFA3w';

        // Variável que é utilizada como parametro para busca das imagens        
        let busca = 'popular';

        // Endpoint para obter fotos populares
        const url = `https://api.pexels.com/v1/${busca}`;

        // Configuração dos headers com a chave de API
        const headers = {
            'Authorization': API_KEY
        };

        fetch(url, { headers })
            .then(res => {
                // Verifica se a solicitação foi bem sucedida
                if (!res.ok) {
                    throw new Error('Erro ao fazer a solicitação: ' + res.status);
                }
                // Processa a resposta (por exemplo, extraindo as URLs das imagens)
                return res.json();
            })
            .then(data => {
                // Processa os dados e exibe a primeira foto no elemento img existente
                if (data.photos.length > 0) {
                    imgs.forEach((img, index) => {
                        const photo = data.photos[index % data.photos.length]; // Usa o operador módulo para garantir que o índice esteja dentro do intervalo de fotos disponíveis
                        console.log(photo)
                        img.src = photo.src.tiny; // Atribui a URL da foto ao elemento img
                    });
                } else {
                    console.log('Nenhuma foto encontrada');
                }
            })
            .catch(error => {
                console.error(error);
            });