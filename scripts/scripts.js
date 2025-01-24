$(document).ready(escritorioFn);
var Librerias
var Desktop

function escritorioFn(jQuery) {

    Librerias = {
        Lib1: ["<div class='desktop'><button class='button_add'>Add App</button></div>",
            "<div class='contenedor'><div class='aplicacion'><button class='button_add'>Add Mod</button><div></div></div></div>",
            "<div class='modulo'><button class='button_add'></button></div>",
            "<div class='contenedor'><div class='aplicacion'><div class='app-bar'><button class='button_add'>Add Mod</button><div><i onclick='' class='btn-max material-icons m-0 text-black pt-1'>fullscreen</i><i onclick='' class='btn-min material-icons m-0 text-black pt-1'>close_fullscreen</i></div></div><div class='app-modules'></div></div></div>",
            ("<div class='contenedor'><div class='modulo'>" +
                "</div></div>"),
        ],
        Lib2: []
    }

    Desktop = {
        Aplicaciones: [],
        Modulos: [],
        Librerias: Librerias,
        Logs: [],
        add_app: function () {
            let select_1 = new panel_control("contenedor", "aplicacion");
            Desktop.Aplicaciones.push(select_1.innerHTML)
           // select_1.className+=" d-flex"

            document.body.append(select_1)

            Desktop.Logs.push(["Aplicaciones",select_1])
            add_listen();
            console.log("Desktop", Desktop)
         //  Run01("222")


        },
        add_mod: function () {
            let select_1 = new panel_control("panel", "modulo");
            Desktop.Modulos.push(select_1)

            document.getElementsByClassName("aplicacion")[0].append(select_1)
            add_listen();
       
        }

    }
    Run01=function(text){
        alert(text)
    }
}

function panel_control(clase1, clase2) {
    const element = document.createElement("div");
    element.innerHTML = "<div class='m-2 " + clase2 + "'>" + clase2 + "</div>"
    element.className = clase1
    //step 2
    Object.setPrototypeOf(element, panel_control.prototype);
  //  Run01(element.innerHTML)
    return element;

}

function add_listen(){
    $(".contenedor").draggable();
    $(".contenedor").resizable();
    
}
Object.setPrototypeOf(panel_control.prototype, HTMLDivElement.prototype);








