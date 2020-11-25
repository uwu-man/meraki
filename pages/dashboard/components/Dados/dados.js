let renderDadosDisplay = async (template) => {
    let htmlTemplate = await template.fetchTemplateHTML('./components/Dados/dados.display.html');
    console.log(htmlTemplate);
    document.getElementById("data-content").innerHTML = htmlTemplate
        .replace("@{userName}", "Fernanda Monteiro")
        .replace("@{userEmail}","fernanda_monteiro@gmail.com")
        .replace("@{userPhone}","11 9 1234-5678")
        .replace("@{userGrad}","Psicologia");
}

let renderDadosEdit= async (template) => {
    let htmlTemplate = await template.fetchTemplateHTML('./components/Dados/dados.edit.html');
    document.getElementById("data-content").innerHTML = htmlTemplate
        .replace("@{userName}", "Fernanda Monteiro")
        .replace("@{userEmail}","fernanda_monteiro@gmail.com")
        .replace("@{userPhone}","11 9 1234-5678")
        .replace("@{userGrad}","Psicologia");
}

let renderDados = async (template) => {
    let edit = false;
    if (!edit){
        renderDadosDisplay(template);
    }
    else {
        renderDadosEdit(template);
    }
}