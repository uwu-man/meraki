let renderCarrossel = async (template, carrosselID) => {
    let HTMLTemplate = await template.fetchTemplateHTML("./components/Carrossel/carrossel.single.html");
    
    document.getElementById(carrosselID).innerHTML = HTMLTemplate;
}

let setupCarrossel = () => {
    ('.carrossel-videos').Slick({
        centerMode: true,
        slidesToShow: 3,
        centerMode:true,
      });
}
