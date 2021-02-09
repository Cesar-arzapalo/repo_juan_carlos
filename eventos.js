const URL_BASE = 'https://eventos-pw.herokuapp.com';
const token = '?token=2158801970';
var listTipo;

const crearOption = (idd, nomb) => {
    const option = document.createElement('option');
    option.setAttribute("value", idd);
    option.innerHTML = nomb;
    return option;
}

const cargarTipo = () => {
    fetch(URL_BASE+'/tipos'+token, 
    {
        method : 'GET',
        mode: 'no-cors'
    }).then((respTipo)=>{
        respTipo.json().then((data) => {
            //listTipo = data;
            const select = document.getElementById('tipo');
            for (var i=0; i < data.length; i++) {
                const otipo = crearOption(data[i].id, data[i].nombre);
                select.appendChild(otipo);
            }
        })
    }).catch((error)=>{
        console.error(error);
    });
}

const cargarCategoria = () => {
    fetch(URL_BASE+'/categorias'+token, 
    {
        method : 'GET',
        mode: 'no-cors'
    }).then((respCategoria)=>{
        respCategoria.json().then((data) => {
            //listTipo = data;
            const select = document.getElementById('categoria');
            for (var i=0; i < data.length; i++) {
                const ocategoria = crearOption(data[i].id, data[i].nombre);
                select.appendChild(ocategoria);
            }
        })
    }).catch((error)=>{
        console.error(error);
    });
}

var main = () => {
    cargarTipo();
    cargarCategoria();
}

window.addEventListener("load", main);