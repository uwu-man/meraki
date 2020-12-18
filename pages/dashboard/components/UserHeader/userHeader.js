let renderUserHeader = async (template, user_data) => {
    let HTMLTemplate = await template.fetchTemplateHTML("./components/UserHeader/dashboard.userHeader.html");
    HTMLTemplate = HTMLTemplate.replace('@{userName}', user_data.nomeUsuario)
    document.getElementById("content-header").innerHTML = HTMLTemplate;
}   