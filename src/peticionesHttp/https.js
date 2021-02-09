const { getFetch,getURL } = require('./peticiones');


const _URL_ = "https://eventos-pw.herokuapp.com";
const _TOKEN_ = "2158801970";

var http = (url,pagina,metodo,...parameters) =>{
    var url = getURL(url,pagina,...parameters);
    return getFetch(metodo,url)
        .then(resp => resp.json())
            .then(data => data);
}

// http(_URL_,"login","POST","token",_TOKEN_,"username","aula@unmsm.edu.pe","password","64646");
// http(_URL_,"ofertas","GET","token",_TOKEN_);
// http(_URL_,"banner","GET","token",_TOKEN_);

module.exports = {http}