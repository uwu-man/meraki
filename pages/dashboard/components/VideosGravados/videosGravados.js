//src="${getEmbed(url)}"
function renderVideo(url, titulo){
    let videoPage =  `<iframe class="iframe-video" src="${getEmbed(url)}" allowfullscreen></iframe>`;
    videoPage += `<div class="video-info"><h1>${titulo}</h1></div>`
    videoPage = "<div class='video-page-content'>" + videoPage + "</div>"

    videoPage = '<div class="video-page"><a href="./aulas-gravadas.html">voltar</a>' + videoPage+ '</div>'
    document.getElementById("aulasGravadas").innerHTML = videoPage;
}