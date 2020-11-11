/* Define os parâmetros pro carrossel */
let setupCarousel = (carrosselID) => {
    numberOfFrames = 3;
    $(document).ready(function(){
        $(`#${carrosselID}`).slick({
            slidesToShow: numberOfFrames,
        });
      });
}

let renderCarouselPage = async (template) => {
    document.getElementById("carrossel-container").innerHTML = createBaseCarousel(pseudo_db.matematica);
   renderCarousel(template, "conteudo-carrossel-numerosComplexos", pseudo_db.matematica.numerosComplexos);
   renderCarousel(template, "conteudo-carrossel-funcoes", pseudo_db.matematica.numerosComplexos);
   renderCarousel(template, "conteudo-carrossel-analiseCombinatoria", pseudo_db.matematica.numerosComplexos);
}

/*Cria o HTML com várias divs. Cada div vai receber um carrossel depois*/
let createBaseCarousel = (materia) => {
    let baseCarrossel = '';
    for(let subMateria in materia){
        baseCarrossel +=`<p class="titulo-carrossel">${materia[subMateria].titulo}</p>`;
        baseCarrossel += `<div id="conteudo-carrossel-${subMateria}" class="carrossel"></div>`;
    }
    return baseCarrossel;
}

let renderCarousel = async (template,carrosselID, subMateria) => {

    let HTMLTemplate = "";
    for(let aula in subMateria.aulas){  
        HTMLTemplate += carouselElement(subMateria,aula);
    }

    document.getElementById(carrosselID).innerHTML = HTMLTemplate;
    setupCarousel(carrosselID);
}



let carouselElement = (subMateria, aula) =>{
    let htmlReturned = "";
    htmlReturned += `<p>${subMateria.aulas[aula].titulo}</p>`;
    htmlReturned += `<a><img class="-carrossel-thumb" src="data:image/png;base64,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"></img></a>`
    return `<div class='carrossel-item'>${htmlReturned}</div>`
}

let pseudo_db = {
    matematica: {
        numerosComplexos:{
            titulo:"Numeros complexos",
            aulas:{
                0:{
                    titulo:"Introduction to i and imaginary numbers ",
                    url:"",
                },
                1:{
                    titulo:"Calculating i raised to arbitrary exponents",
                    url:"",
                },
                2:{
                    titulo:"Imaginary roots of negative numbers",
                    url:"",
                },
                3:{
                    titulo:"Introduction to i and imaginary numbers ",
                    url:"",
                },
                4:{
                    titulo:"Calculating i raised to arbitrary exponents",
                    url:"",
                },
                5:{
                    titulo:"Imaginary roots of negative numbers",
                    url:"",
                },
                6:{
                    titulo:"Introduction to i and imaginary numbers ",
                    url:"",
                },
                7:{
                    titulo:"Calculating i raised to arbitrary exponents",
                    url:"",
                },
                8:{
                    titulo:"Ultima",
                    url:"",
                },
            },   
        },
        funcoes:{
            titulo: "Funções",
            aulas:{},
        },
        analiseCombinatoria:{
            titulo: "Analise Combinatória",
            aulas:{},
        },
    },
}