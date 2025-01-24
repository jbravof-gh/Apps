var Apps = []
var Modulos = []

var panel_seleccionado = 0;
var old_style = "";
var max_style = "position:absolute !important; width:-webkit-fill-available !important;height:-webkit-fill-available !important;z-index:10 !important;"

var Applicacion = function(Name, Lista_Modulos, old_style, start_style, class_text, panel_seleccionado) {};
//Applicacion.Lista_Modulos = Modulos;
Applicacion.Name = "";
Applicacion.innerHTML="ppppp";
Applicacion.old_style = "";
Applicacion.start_style = "position:absolute !important;";

Applicacion.class_text = "applicacion template bg-white  d-flex flex-column";
Applicacion.crea = function(Name) {
    var valor_applicacion = Name

    Apps.push(Object.create(Applicacion));
    Apps[Apps.length - 1].Name = valor_applicacion;
document.body.innerHTML+=Object.create(Applicacion).innerHTML

   // document.body.innerHTML+=HTMLdivElement.create(Applicacion)
    Applicacion.pinta(Name)
}
Applicacion.pinta = function(Name) {
    document.body.innerHTML += document.getElementById("template_" + prompt('', 3)).innerHTML;
    document.getElementsByClassName("applicacion")[Apps.length - 1].getElementsByClassName("titulo")[0].innerHTML = Name

}
Applicacion.run_name = function(params) {
    alert("Nombre: " + this.Name);
    alert("Nombre: " + params)
}
Applicacion.maximiza = function(params, panel_seleccionado) {
    var panel_destino = document.getElementsByClassName("applicacion")[Apps.length - 1]
    Applicacion.old_style = panel_destino.getAttribute("style")
    panel_destino.setAttribute("style", "position:absolute;width:100%;height:100%;")
}
Applicacion.minimiza = function(params) {
    var panel_destino = document.getElementsByClassName("applicacion")[panel_seleccionado]

    panel_destino.setAttribute("style", Applicacion.old_style)
}

var Modulo = {

    Name: "",
    old_style: "",
    class_text: "modulo",
    Crea_modulo: function(Applicacion, template,class_text) {
        var valor_modulo = template

        Modulos.push(Object.create(Modulo));
        Modulos[Modulos.length - 1].Name = valor_modulo;
        
        Modulo.Pinta_modulo(Applicacion,template,class_text);
        jQuery(".div-paneles").draggable()
        jQuery(".div-paneles").resizable()
        jQuery(".applicacion").resizable()

    },
    Pinta_modulo: function(Applicacion,template,class_text) {
            document.getElementsByClassName('applicacion')[panel_seleccionado].getElementsByClassName('div-panel')[0].innerHTML += document.head.getElementsByTagName("template")[template].innerHTML
alert(88)
    },
    Show_jugador: function(params) {
        // alert(params)
        var panel_destino = document.getElementsByClassName("applicacion")[0].getElementsByClassName("panel")[params]
        Jugador.old_style = panel_destino.getAttribute("style")
        panel_destino.setAttribute("style", "z-index:100;position:absolute;margin-top:0;margin-left:0;width:100%;height:100%;")

        // return "Nombre: " + Jugadores[params].Name + "-" + params
    },
    Hide_jugador: function(params) {
        // alert(params)
        var panel_destino = document.getElementsByClassName("applicacion")[0].getElementsByClassName("panel")[params]
        panel_destino.setAttribute("style", Jugador.old_style)

    }
}

function add_panel(params) {
    Applicacion.crea(params)

    jQuery(".applicacion").draggable()
    jQuery(".applicacion").resizable()
}
async function add_listeners() {
    jQuery(".applicacion").draggable()
    jQuery(".applicacion").resizable()
}
async function cierra_caja(event) {
    // event.parentElement.parentElement.parentElement.style+=";height:auto !important;"
    //  alert(event.parentElement.parentElement.parentElement.getAttribute("style"))
    var texto_titulo = event.getAttribute('name');
    var texto_index = Array.from(document.getElementsByName('titulo')).indexOf(event);
    var panel_destino = document.getElementsByClassName('caja-general')[texto_index];
    var panel_destino2 = document.getElementsByClassName('applicacion')[texto_index];
    if (panel_destino.getAttribute('style') == 'display:none;') {
        panel_destino.setAttribute('style', '');
    } else {
        panel_destino.setAttribute('style', 'display:none;');
        event.parentElement.parentElement.parentElement.style += ";height:auto !important;"
        panel_destino2.style.height = 'auto !important;'
    }
}

function add_menu(params) {
    Modulo.Crea_modulo(Apps[panel_seleccionado],params)
  //  document.getElementsByClassName('div-panel')[0].innerHTML += document.head.getElementsByTagName("template")[params].innerHTML
    jQuery(".applicacion").draggable()
    jQuery(".applicacion").resizable()
}

function openFullscreen() {
    //  alert(panel_seleccionado)
    var elem = document.getElementsByClassName('applicacion')[panel_seleccionado];

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
}
// openFullscreen()

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");
newDiv.testea=function (params) {
    alert(this.tagName)
}
  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div_01");
  document.body.insertBefore(newDiv, currentDiv);
}
customElements.define("expanding-list", Applicacion, { extends: "div" });

function crea_div(params) {
    var div = document.createElement("div");
    div.className="div-1"
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";
    div.onClick=function () {
       alert(66); 
    }

document.getElementById("div_01").appendChild(div);
 document.getElementsByClassName("div-1")[0].onClick()
}