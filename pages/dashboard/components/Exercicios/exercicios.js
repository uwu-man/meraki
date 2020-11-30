let renderExerciciosDisplay = async (template) => {
    let htmlTemplate = await template.fetchTemplateHTML('./components/Exercicios/exercicios.display.html');
    console.log(htmlTemplate);
    document.getElementById("data-content").innerHTML = htmlTemplate

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var questions = this.nextElementSibling;
            if (questions.style.display === "block") {
                questions.style.display = "none";
            } else {
                questions.style.display = "block";
            }
        });
    }
}

let renderExercicios = async (template) => {
    renderExerciciosDisplay(template);
}
