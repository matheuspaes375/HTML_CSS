document.addEventListener("DOMContentLoaded", function () {
    const listaAnimais = document.querySelector(".animal-list");

    fetch("https://663c03f917145c4d8c34f82b.mockapi.io/Animal")
        .then((response) => response.json())
        .then((data) => {
            console.log("Dados recebidos da API:", data);

            data.forEach((animal) => {
                console.log("Animal:", animal);

                const id = animal.id || 'Sem ID';
                const nome = animal.Nome || 'Sem Nome';
                const idade = animal.idade || 'Idade desconhecida';
                const apelido = animal.Apelido || 'Sem apelido';
                const raca = animal.Raca || 'Raça desconhecida';

                const item = document.createElement("li");
                item.textContent = `${id} - ${nome} (${idade} anos, apelido: ${apelido}) - ${raca}`;
                listaAnimais.appendChild(item);
            });
        })
        .catch((error) => {
            console.error("Erro ao carregar animais:", error);
        });

    const cadastrarBotao = document.querySelector(".button");
    cadastrarBotao.addEventListener("click", async function () {
        const novoAnimal = {
            Nome: "Bobby",
            idade: 3,
            Apelido: "Bob",
            Raca: "Cachorro"
        };

        try {
            await fetch("https://663c03f917145c4d8c34f82b.mockapi.io/Animal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoAnimal)
            });

            setTimeout(function() {
                location.reload();
            }, 1500);
        } catch (error) {
            console.error("Erro ao cadastrar animal:", error);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botao1 = document.getElementById("botao1");
    const botao2 = document.getElementById("botao2");

    botao1.addEventListener("click", function () {
        botao2.style.display = "inline-block";
        botao1.remove();
    });
});
