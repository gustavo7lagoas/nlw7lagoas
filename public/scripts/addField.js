// procurar o botão
document.querySelector("#add-time")
.addEventListener("click", cloneField)
// quando clicar no botão

// executar uma acao
function cloneField() {
    // duplicar os campos qual campo
    const newTimeFields = document.querySelector(".schedule-item").cloneNode(true);

    // limpar campos quais campos
    const allTimesInputs = newTimeFields.querySelectorAll("input");

    allTimesInputs.forEach(timeInput => {
        timeInput.value = "";
    });

    // coloca na página onde?
    document.querySelector("#schedule-items").appendChild(newTimeFields);

}

