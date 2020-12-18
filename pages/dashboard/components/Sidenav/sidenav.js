let renderSidenav = async (template, pageSelection) => {
    let HTMLTemplate = await template.fetchTemplateHTML("./components/Sidenav/dashboard.sidenav.html");
    switch (pageSelection){
        case "inicio":
            HTMLTemplate = HTMLTemplate
                .replace('@{inicio-selection}',"class='side-nav-selected'")
                .replace('@{dados-selection}',"")
                .replace('@{material-selection}',"")
                .replace('@{exercicios-selection}',"")
                .replace('@{avisos-selection}',"");
            break;
        case "dados":
            HTMLTemplate = HTMLTemplate
                .replace('@{inicio-selection}',"")
                .replace('@{dados-selection}',"class='side-nav-selected'")
                .replace('@{material-selection}',"")
                .replace('@{exercicios-selection}',"")
                .replace('@{avisos-selection}',"");
            break;
        case "material":
            HTMLTemplate = HTMLTemplate
                .replace('@{inicio-selection}',"")
                .replace('@{dados-selection}',"")
                .replace('@{material-selection}',"class='side-nav-selected'")
                .replace('@{exercicios-selection}',"")
                .replace('@{avisos-selection}',"");
            break;
        case "exercicios":
            HTMLTemplate = HTMLTemplate
                .replace('@{inicio-selection}',"")
                .replace('@{dados-selection}',"")
                .replace('@{material-selection}',"")
                .replace('@{exercicios-selection}',"class='side-nav-selected'")
                .replace('@{avisos-selection}',"");
            break;
        default:
            break;
            
    }
    document.getElementById('sidenav').innerHTML = HTMLTemplate;
}