let renderDadosDisplay = async (template, user_data) => {
    let htmlTemplate = await template.fetchTemplateHTML('./components/Dados/dados.display.html');
    console.log(user_data)
    document.getElementById("data-content").innerHTML = htmlTemplate
        .replace("@{userName}", user_data.nomeUsuario)
        .replace("@{userEmail}", user_data.emailUsuario)
        .replace("@{userPhone}", user_data.telefoneUsuario)
        .replace("@{userGrad}", user_data.gradPretendidaUsuario);
}

let renderDadosEdit= async (template) => {
    let htmlTemplate = await template.fetchTemplateHTML('./components/Dados/dados.edit.html');
    document.getElementById("data-content").innerHTML = htmlTemplate
        .replace("@{userName}", user_data.nomeUsuario)
        .replace("@{userEmail}", user_data.emailUsuario)
        .replace("@{userPhone}", user_data.telefoneUsuario)
        .replace("@{userGrad}", user_data.gradPretendidaUsuario);
}

let renderDados = async (template, user_data) => {
    let edit = false;
    if (!edit){
        renderDadosDisplay(template, user_data);
    }
    else {
        renderDadosEdit(template, user_data);
    }
}