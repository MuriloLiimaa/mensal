document.addEventListener("DOMContentLoaded", function() {
    const statesList = document.getElementById("states-list");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => response.json())
        .then(states => {
            statesList.innerHTML = "<ul>" +
                states.map(state => `<li>${state.sigla} - ${state.nome}</li>`).join("") +
                "</ul>";
        })
        .catch(error => {
            statesList.innerHTML = "Erro ao carregar os estados.";
            console.error("Erro ao carregar os estados:", error);
        });
});
