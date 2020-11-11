/* Define os parâmetros pro carrossel */
let setupCarousel = (carrosselID) => {
    numberOfFrames = 3;
    $(document).ready(function(){
        $(`#${carrosselID}`).slick({
            slidesToShow: numberOfFrames,
        });
      });
}

let renderCarouselPage = async (carouselsContainer, HTML_ID) => {
    document.getElementById(HTML_ID).innerHTML = createBaseCarousel(carouselsContainer);
    for (carouselID in carouselsContainer){
        renderCarousel(`conteudo-carrossel-${carouselID}`, carouselsContainer[carouselID]);
    }
    
}

/*Cria o HTML com várias divs. Cada div vai receber um carrossel depois*/
let createBaseCarousel = (carouselsContainer) => {
    let baseCarrossel = `<button type="button" onclick="renderAulasGravadas(template,'aulasGravadas')" class="button-voltar">Voltar</button>`;
    
    for(let carouselID in carouselsContainer){
        baseCarrossel +=`<p class="titulo-carrossel">${carouselsContainer[carouselID].titulo}</p>`;
        baseCarrossel += `<div id="conteudo-carrossel-${carouselID}" class="carrossel"></div>`;
    }
    return baseCarrossel;
}

/*CUIDADO: O json que deve ser passado só pode ter uma propriedade chamada titulo (que é o titulo do carrossel). 
As demais devem ser sempre um objeto contendo um titulo de aul+thumb */
let renderCarousel = async (carouselID, carouselItems) => {

    let HTMLTemplate = "";
    for(let item in carouselItems){  
        if(item !="titulo"){
            HTMLTemplate += carouselElement(carouselItems,item);
        }
    }

    document.getElementById(carouselID).innerHTML = HTMLTemplate;
    setupCarousel(carouselID);
}



let carouselElement = (carouselItems, item) =>{
    let htmlReturned = "";
    htmlReturned += `<p>${carouselItems[item].titulo}</p>`;
    htmlReturned += `<a><img class="-carrossel-thumb" src=${carouselItems[item].url}></img></a>`
    return `<div class='carrossel-item'>${htmlReturned}</div>`
}