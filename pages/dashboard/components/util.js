let createTemplate = () => {
    return {
        fetchTemplateHTML: async function (url) {

            try {
                let data = await fetch(url);
                let html = await data.text();
                return html;
            }
            catch(error){
                console.log('Error!', error);
            }
        },
    };
};


//Suported URL styles:
// http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index
// http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o
// http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0
// http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
// http://www.youtube.com/embed/0zM3nApSvMg?rel=0
// http://www.youtube.com/watch?v=0zM3nApSvMg
// http://youtu.be/0zM3nApSvMg
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function getThumbnail(url){

    return `https://img.youtube.com/vi/${youtube_parser(url)}/0.jpg` 
}

function getEmbed (url){
    return `http://www.youtube.com/embed/${youtube_parser(url)}`
}