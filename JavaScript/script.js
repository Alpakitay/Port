//Funcion que me aplica el estilo a la opcion seleccionada que le quita previamente :)
function seleccionar(link)
{
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"
    //establecemos el menu en modo responsivo, desapareciendolo
    var x = document.getElementById("nav");
    x.className = "";
}


//funcion que muestra menu responsivo
function responsiveMenu()
{
    var x = document.getElementById("nav")
    if (x.className === "")
    {
        x.className = "responsive";
    } else
    {
        x.className = "";
    }
}

//Detectamos el scrolling para la animacion de las barra de habilidades
window.onscroll = function ()
{
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades()
{
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300)
    {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}