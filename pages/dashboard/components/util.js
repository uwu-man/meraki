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