let renderAulasGravadas = async (template, HTML_ID) => {
    let HTMLTemplate ="", content = "<h1 class='page-title'>Aulas Gravadas</h1>";
    HTMLTemplate += await createDisciplina(template,'var(--matematica)','Matemática',"tabler:sum", pseudo_db.aulasGravadas.matematica, 'pseudo_db.aulasGravadas.matematica') ;
    HTMLTemplate += await createDisciplina(template,'var(--biologia)','Biologia', "fa-solid:leaf", pseudo_db.aulasGravadas.biologia, 'pseudo_db.aulasGravadas.biologia') ;
    HTMLTemplate ="<div class='div-disciplina'>" + HTMLTemplate + "</div>";
    content += HTMLTemplate;
    HTMLTemplate="";
    HTMLTemplate += await createDisciplina(template,'var(--matematica)','Matemática',"tabler:sum", pseudo_db.aulasGravadas.matematica, 'pseudo_db.aulasGravadas.matematica') ;
    HTMLTemplate += await createDisciplina(template,'var(--biologia)','Biologia', "fa-solid:leaf", pseudo_db.aulasGravadas.biologia, 'pseudo_db.aulasGravadas.biologia') ;
    HTMLTemplate ="<div class='div-disciplina'>" + HTMLTemplate + "</div>";
    content += HTMLTemplate;
    HTMLTemplate="";
    HTMLTemplate += await createDisciplina(template,'var(--matematica)','Matemática',"tabler:sum", pseudo_db.aulasGravadas.matematica, 'pseudo_db.aulasGravadas.matematica') ;
    HTMLTemplate ="<div class='div-disciplina'>" + HTMLTemplate + "</div>";
    content += HTMLTemplate;
    document.getElementById(HTML_ID).innerHTML = content;
}

let createDisciplina = async (template, color, tituloDisciplina, iconID, db_page, db_page_string) => {
    let disciplina = await template.fetchTemplateHTML('./components/AulasGravadas/aulasGravadas.disciplina.html');
    
    return disciplina
        .replace("@{iconID}", iconID)
        .replaceAll("@{color}", color)
        .replace("@{sublista-disciplina}", createSublistaDisciplina(db_page, color))
        .replace("@{titulo-disciplina}", `${tituloDisciplina}`)
        .replace("@{buttonfn}",`renderCarouselPage(${db_page_string},"aulasGravadas")`);
}

let createSublistaDisciplina = (db_page,color) => {
    let sublista = `<ul style='color:${color}' class='sublista-disciplina'>`;
    let idx_limitador = 0;
    for (let subitem in db_page){
        if(idx_limitador < 4){
            sublista += `<li ><span class="iconify" data-icon="bi:check" data-inline="false"></span>${db_page[subitem].titulo}</li>`;
        }
        idx_limitador += 1;
    }
    sublista+= `<li>...</li></ul>`
    return sublista;
}