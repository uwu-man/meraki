let renderAulasGravadas = async (template, HTML_ID) => {
    let HTMLTemplate ="";
    HTMLTemplate += await createDisciplina(template,'var(--matematica)','Matemática',"tabler:sum", pseudo_db.aulasGravadas.matematica, 'pseudo_db.aulasGravadas.matematica') ;
    
    HTMLTemplate += await createDisciplina(template,'var(--biologia)','Biologia', "fa-solid:leaf", pseudo_db.aulasGravadas.biologia, 'pseudo_db.aulasGravadas.biologia') ;
    
    document.getElementById(HTML_ID).innerHTML = HTMLTemplate;
}

let createDisciplina = async (template, color, tituloDisciplina, iconID, db_page, db_page_string) => {
    let disciplina = await template.fetchTemplateHTML('./components/AulasGRavadas/aulasGravadas.disciplina.html');
    
    return disciplina
        .replace("@{iconID}", iconID)
        .replaceAll("@{color}", color)
        .replace("@{sublista-disciplina}", createSublistaDisciplina(db_page))
        .replace("@{titulo-disciplina}", `${tituloDisciplina}`)
        .replace("@{buttonfn}",`renderCarouselPage(${db_page_string},"aulasGravadas")`);
}

let createSublistaDisciplina = (db_page) => {
    let sublista = "";
    for (let subitem in db_page){
        sublista += `<p>${db_page[subitem].titulo}</p>`;
    }
    return sublista;
}