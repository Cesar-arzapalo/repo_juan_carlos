const URL_BASE = 'https://eventos-pw.herokuapp.com';
const TOKEN = '2158801970';

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
var getFetch = (metodo,url) => fetch(url,{method: metodo, mode: 'cors'});

var http = (url,pagina,metodo,...parameters) =>{
    var url = getURL(url,pagina,...parameters);
    return getFetch(metodo,url)
        .then(resp => resp.json())
            .then(data => data)
            .catch(err => console.log(err))
        .catch(err => console.log(err))
}

var login =  async(username,password) => {
    console.log(username,password)
    var resp = await http(URL_BASE,"login","POST","token",TOKEN,"username",username,"pasword",password);
    console.log(resp);
};

var registrar = async(username,password) => {
    console.log(username,password);
    var resp = await http(URL_BASE,"registrar","POST","token",TOKEN,"username",username,"pasword",password);
    console.log(resp);
};