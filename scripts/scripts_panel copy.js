$(document).ready(escritorioFn);
var Librerias
var Paneles_list=[]
var Desktop, Desktop2, Modulo

function escritorioFn(jQuery) {

    Librerias = {
        Lib1: [],
        Lib2: []
    }

    Desktop = {
        Aplicaciones: [],
        Modulos: [],
        Librerias: Librerias,
        Logs: [],
        add_app: function () {
            let panel_aplicacion = new panel_control("contenedor", "aplicacion");
            Desktop.Aplicaciones.push(panel_aplicacion.innerHTML)
            // select_1.className+=" d-flex"

            document.body.append(panel_aplicacion)

            Desktop.Logs.push(["Aplicaciones", panel_aplicacion])
            add_listen();
            console.log("Desktop", Desktop)



        },
        add_mod: function (ap_order) {
            let panel_modulo = new panel_control("panel", "modulo");
            Desktop.Modulos.push(panel_modulo)

            document.getElementsByClassName("aplicacion")[0].append(panel_modulo)
            add_listen();

        }

    }
    Desktop2 = {

        Aplicacion: function (panel_app, order) {
            this.Order = order

            this.Panel = panel_app;
            this.Modulos = [];
            this.add_mod = function (event) {
                //   alert(event)

                this.Modulos.push(new Desktop2.Modulo(new panel_control("", "modulo"), order))
                document.getElementsByClassName("aplicacion")[order].innerHTML += (this.Modulos[this.Modulos.length - 1].Panel.outerHTML)
                Paneles_list.push(this.Modulos[this.Modulos.length - 1].Panel)

              //  console.log(" panel.onclickmodulo",this)


                add_listen()
            }
        },
        Modulo: function (panel_mod, order) {
            this.Panel = panel_mod;
            this.App = order
            this.test = "test"
    //         panel_mod.onclick=function(){
    //  console.log(" panel.onclick",444)
    // }
        },
        Aplicaciones: [

        ],
        add_app: function () {
            Desktop2.Aplicaciones.push(new Desktop2.Aplicacion(new panel_control("contenedor", "aplicacion"), Desktop2.Aplicaciones.length))
            document.body.append(Desktop2.Aplicaciones[Desktop2.Aplicaciones.length - 1].Panel)
            document.getElementsByClassName("aplicacion")[Desktop2.Aplicaciones.length - 1].innerHTML += ' <button onclick="Desktop2.Aplicaciones[' + (Desktop2.Aplicaciones.length - 1) + '].add_mod()" class="btn btn-sm">Go</button>'

            Paneles_list.push(Desktop2.Aplicaciones[Desktop2.Aplicaciones.length - 1].Panel)
            add_listen()
        }
    }
    Run01 = function (text) {
        alert(text)
    }


}

function panel_control(clase1, clase2) {
    const panel = document.createElement("div");
    panel.order=Paneles_list.length
   // alert(panel.order)
    // panel.onclick=function(){
    //  console.log(" panel.onclick",this)
    // }
    panel.className = clase1
    panel.innerHTML = "<div class='border m-2 " + clase2 + "'>" + clase2 + "</div>"

    Object.setPrototypeOf(panel, panel_control.prototype);

    return panel;

}

function add_listen() {
    $("body .contenedor").draggable();
    $("body .contenedor").resizable();
    $("body .modulo").resizable();


}
Object.setPrototypeOf(panel_control.prototype, HTMLDivElement.prototype);








