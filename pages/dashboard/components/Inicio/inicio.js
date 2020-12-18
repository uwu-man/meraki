let renderInicio = async (template, user_data) => {
    let HTMLTemplate = await template.fetchTemplateHTML("./components/Inicio/dashboard.inicio.html");
    
    document.getElementById("content").innerHTML = HTMLTemplate
        .replace("@{userName}", user_data.nomeUsuario)
        .replace("@{aulasInfo}", aulasInfo(user_data))
        .replace("@{avisosInfo}", avisosInfo(user_data));
}   

let aulasInfo = (user_data) => {
    let auxStr = "";
    auxStr+= "<h2>Suas próximas aulas ao vivo são: </h2><br/>";

    auxStr += "<div class='aulas-seguintes'>";

    for(item in user_data.aulasSeguintes){
        auxStr += `${aulasDoDia(user_data.aulasSeguintes[item])}<br>`
    }
    auxStr += "</div>"

    return auxStr
}

let aulasDoDia = (dadosDoDia) => {
    let aux = `<p>${dadosDoDia.data}</p>`
    aux+= "<div class='aula-dia'>";
    for(aula in dadosDoDia.aulas){
        aux += `<p><span class="iconify icone" data-icon="bi:dot" data-inline="false"></span>${dadosDoDia.aulas[aula].horario} - ${dadosDoDia.aulas[aula].voluntario} - ${dadosDoDia.aulas[aula].titulo} </p>` 
    }
    aux += '</div>';
    return aux;
}

let avisosInfo = (user_data) => {
    let auxStr = "";
    auxStr += "<h2>Avisos: </h2><br/>";

    auxStr += "<div class='avisos-container'><ul class='avisos'>";
    for(aviso in user_data.avisos){
        auxStr += `<li><span class="iconify icone" data-icon="bi:dot" data-inline="false"></span>${user_data.avisos[aviso].content}</li>`
    }
    auxStr += "</ul></div>"

    return auxStr;
}