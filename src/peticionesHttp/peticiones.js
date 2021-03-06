const fetch = require('node-fetch');
var construirKeyValueParameters = (...paramaters) =>{
    var keyValueParameters = []
    for(let i= 0; i<paramaters.length/2;i+=1){
        keyValueParameters.push({key: paramaters[i*2], value: paramaters[i*2+1]});
    }
    return keyValueParameters;
}
var getQuerys = (...paramaters) => {
    if(paramaters.length===0) return '';
    var query = `?`;
    var keyValueParameters = construirKeyValueParameters(...paramaters);
    keyValueParameters.map((element,idx) => query+=(idx===0)?`${element["key"]}=${element["value"]}`:`&${element["key"]}=${element["value"]}`);
    return query;
} 
var getURL = (url,pagina,...parameters) => `${url}/${pagina}${getQuerys(...parameters)}`;
var getFetch = (metodo,url) => fetch(url,{method: metodo, mode: 'no-cors'});

module.exports = {getURL,getFetch}

