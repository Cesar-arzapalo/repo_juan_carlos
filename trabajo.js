const {http} = require("./peticionesHttp/https") 

var listaBanner;
var listaOfertas;
var contador = 1;
const URL_BASE = 'https://eventos-pw.herokuapp.com';
const token = '?token=2158801970';
const TOKEN = '2158801970';
var elegirBanner = () => {
    const urlBanner = listaBanner[contador % 4].url;
    document.getElementById('banner').setAttribute("src", urlBanner);
    contador++;
};

var ponerOferta = () => {

    const odes10 = listaOfertas[0].url;
    const tdes10 = listaOfertas[0].texto;
    const ides10 = document.getElementById('imgdes10');
    const ddes10 = document.getElementById('divdes10');
    ides10.setAttribute("src",odes10);
    ddes10.innerHTML = tdes10;

    const o2x1 = listaOfertas[1].url;
    const t2x1 = listaOfertas[1].texto;
    const i2x1 = document.getElementById('img2x1');
    const d2x1 = document.getElementById('div2x1');
    i2x1.setAttribute("src",o2x1);
    d2x1.innerHTML = t2x1;

    const odes20 = listaOfertas[2].url;
    const tdes20 = listaOfertas[2].texto;
    const ides20 = document.getElementById('imgdes20');
    const ddes20 = document.getElementById('divdes20');
    ides20.setAttribute("src",odes20);
    ddes20.innerHTML = tdes20;

    return ides10, i2x1, ides20, ddes10, d2x1, ddes20;
}


var cargarBanner = () => {
    const promesa = fetch(
        URL_BASE+'/banner'+token,
        {
            method : 'GET',
            mode: 'no-cors'
        }
    );
    
    promesa.then((respBanner) => {
        respBanner.json().then((data) => {
            listaBanner = data;
        })
    });

    promesa.catch((error) => {
        console.error(error);
    });
}

var cargarOferta = () => {
    const promesa = fetch(
        URL_BASE+'/ofertas'+token,
        {
            method : 'GET',
            mode: 'no-cors'
        }
    );

    promesa.then((respOferta) => {
        respOferta.json().then((data) => {
            listaOfertas = data;
        })
    });

    promesa.catch((error) => {
        console.error(error);
    });
}


const crearOption = (ess) => {
    const option = document.createElement('option');
    option.innerHTML = ess;
    return option;
}

const cargarPais = () => {
    fetch(`https://restcountries.eu/rest/v2/all`, 
    {
        method : 'GET',
        mode: 'no-cors'
    }).then((respPais)=>{
        respPais.json().then((data) => {
            const select = document.getElementById('pais');
            for (var i=0; i < data.length; i++) {
                const opais = crearOption(data[i].translations.es);
                select.appendChild(opais);
        }
        })
    }).catch((error)=>{
        console.error(error);
    });
}

function createAddItemWindow() {

    // Create a new window
    addItemWindown = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add Item',

        // The lines below solved the issue
        webPreferences: {
            nodeIntegration: true
        }
})}

var main = () => {
    cargarBanner();
    cargarOferta();
    cargarPais();
    ponerOferta();
    window.setInterval(elegirBanner, 3000);
    window.set;
    document.querySelector("#");
    createAddItemWindow();
}


window.addEventListener("load", main);
var login = async(username,password) => {
    var resp = await http(URL_BASE,"login","POST","token",TOKEN,"username",username,"pasword",password);
    console.log(resp);

};

var registrar = async(username,password) => {
    var resp = await http(URL_BASE,"registrar","POST","token",TOKEN,"username",username,"pasword",password);
    console.log(resp);
};

console.log(5);
login("abc@gmail.com","12435");