// Variável para armazenar o modal
        var modal = document.getElementById("myModal");

        // Função para inicializar o modal
        function inicializarModal(closeClass) {
            // Obtém o elemento <span> que fecha o modal
            var span = document.getElementsByClassName(closeClass)[0];

            // Quando o usuário clicar em <span> (x) ou fora do modal, fecha o modal
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            // Quando o usuário clicar em <span> (x), fecha o modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // Quando o usuário clicar fora do modal, fecha o modal
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }

        // Função para preencher a tabela
        function preencherTabela(dados) {
            const tabela = document.getElementById("infoTable").getElementsByTagName('tbody')[0];

            // Limpa a tabela antes de preencher (caso já tenha dados)
            tabela.innerHTML = '';

            // Percorre o array de dados e cria uma linha para cada objeto
            dados.forEach(item => {
                const linha = document.createElement("tr");

                // Cria uma célula para cada propriedade
                const celNome = document.createElement("td");
                celNome.textContent = item.nome;
                linha.appendChild(celNome);

                const celIdade = document.createElement("td");
                celIdade.textContent = item.idade;
                linha.appendChild(celIdade);

                const celEmail = document.createElement("td");
                celEmail.textContent = item.email;
                linha.appendChild(celEmail);

                // Cria a célula para os botões Acessar e Deletar
                const celAcao = document.createElement("td");
                const btnAcessar = document.createElement("button");
                btnAcessar.textContent = 'Acessar';
                btnAcessar.classList.add('btnAcessar');
                btnAcessar.addEventListener('click', () => {
                    // Preenche o modal com as informações correspondentes
                    document.getElementById("nome").value = item.nome;
                    document.getElementById("idade").value = item.idade;
                    document.getElementById("email").value = item.email;

                    // Exibe o modal
                    modal.style.display = "block";
                });
                celAcao.appendChild(btnAcessar);
                linha.appendChild(celAcao)

                const btnDelete = document.createElement("button");
                btnDelete.textContent = 'Delete';
                btnDelete.classList.add('btnDelete');
                btnDelete.addEventListener('click', () => {
                    // Remove a linha correspondente
                    linha.remove();
                });
                celAcao.appendChild(btnDelete);

                linha.appendChild(celAcao);

                // Adiciona a linha à tabela
                tabela.appendChild(linha);
            });

            // Inicializa o modal após preencher a tabela para garantir que todos os botões existam
            inicializarModal("close");
        }

        // Array de dados
        var data = []

        // Chama a função para preencher a tabela ao carregar a página
        document.addEventListener("DOMContentLoaded", () => preencherTabela(data));

        // Adiciona evento ao botão de novo cadastro
        document.querySelector('.btnNovoCadastro').addEventListener('click', () => {
            // Preenche o modal com campos vazios
            document.getElementById("formCadastro").reset();

            // Exibe o modal
            modal.style.display = "block";
        });

        // Adiciona evento de submissão do formulário de cadastro
        document.getElementById("formCadastro").addEventListener('submit', function (event) {
            event.preventDefault(); // Evita o envio do formulário

            // Obtém os valores dos campos de entrada
            var nome = document.getElementById("nome").value;
            var idade = document.getElementById("idade").value;
            var email = document.getElementById("email").value;

            // Validação básica (pode ser expandida conforme necessário)
            if (!nome || !idade || !email) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Cria um novo objeto com os dados do formulário
            var novoCadastro = { nome: nome, idade: idade, email: email };

            // Adiciona o novo cadastro aos dados existentes
            data.push(novoCadastro);

            // Preenche a tabela com os novos dados
            preencherTabela(data);

            // Fecha o modal
            modal.style.display = "none";
        });