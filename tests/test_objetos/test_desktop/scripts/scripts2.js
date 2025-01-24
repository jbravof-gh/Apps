import {Panel, PanelApp, PanelMod} from "./clases2.js";

$(document).ready(escritorioFn);

var panel_seleccionado
var valor_template = 1

function escritorioFn(jQuery) {
    var Librerias
    var Desktop

    Librerias = {
        Lib1: ["<div class='desktop'><button class='button_add'>Add App</button></div>", "<div class='contenedor'><div class='aplicacion'><button class='button_add'>Add Mod</button><div></div></div></div>", "<div class='modulo'><button class='button_add'></button></div>", "<div class='contenedor'><div class='aplicacion'><div class='app-bar'><button class='button_add'>Add Mod</button><div><i onclick='' class='btn-max material-icons m-0 text-black pt-1'>fullscreen</i><i onclick='' class='btn-min material-icons m-0 text-black pt-1'>close_fullscreen</i></div></div><div class='app-modules'></div></div></div>", ("<div class='contenedor'><div class='modulo'>" + (document.getElementsByTagName('template')[valor_template].innerHTML) + "</div></div>"), ],
        Lib2: []
    }
    Desktop = new class {
        constructor() {
            this.Aplicaciones = new class {
                constructor() {

                    this.Modulos = new class {
                        constructor() {
                            this.listado = [];

                        }
                    }
                    ;

                    this.listado = [];
                    this.alerta = function() {
                        alert("new app")
                    }
                    this.add_modulo = function() {
                        //alert(this)
                        let valor_1 = Array.from(document.getElementsByClassName("aplicacion")).indexOf(this.parentElement.parentElement)
                        Desktop.Aplicaciones.Modulos.listado.push([document.getElementsByClassName("modulo").length, Desktop.config.Lib1[2]], valor_1)

                        // alert(valor_1)
                        document.getElementsByClassName("aplicacion")[valor_1].getElementsByTagName("div")[0].innerHTML += Desktop.config.Lib1[2]
                        //+  document.getElementsByClassName("aplicacion")[valor_1].innerHTML
                        $(".contenedor").draggable();
                        $(".contenedor").resizable();
                        //      $(".aplicacion .button_add").click( Desktop.Aplicaciones.add_modulo)

                    }
                    this.add_modulo2 = function() {
                        //alert(this)
                        let valor_1 = Array.from(document.getElementsByClassName("aplicacion")).indexOf(this.parentElement.parentElement)
                        //    Desktop.Aplicaciones.Modulos.listado.push([valor_1, Desktop.config.Lib1[3]])
                        Desktop.Aplicaciones.Modulos.listado.push(new Panel("Modulo",0,1,1))
                        console.log(Desktop.Aplicaciones.Modulos.listado)

                        // alert("valor_1-"+valor_1)
                        //valor_template=prompt()
                        // alert(valor_template)
                        //  Librerias.Lib1.re
                        document.getElementsByClassName("aplicacion")[valor_1].getElementsByClassName("app-modules")[0].innerHTML = Desktop.config.Lib1[4] + document.getElementsByClassName("aplicacion")[valor_1].getElementsByClassName("app-modules")[0].innerHTML

                        let valor_3 = document.getElementsByClassName("aplicacion")[valor_1].getElementsByClassName("modulo").length
                        //  alert("valor_3"+valor_3)
                        //+  document.getElementsByClassName("aplicacion")[valor_1].innerHTML
                        $(".contenedor").draggable();
                        //  this.parentApp=valor_1
                        $(".contenedor").resizable();
                        //  document.getElementsByClassName("aplicacion")[valor_1].getElementsByClassName("modulo")[valor_3-1].getElementsByClassName("bt-max")[0].addEventListener("click",Desktop.max_contenedor2)
                        //    document.querySelectorAll(".modulo > i").addEventListener("click", Desktop.max_contenedor2)
                        //   $(".modulo>.bt-max").click(Desktop.max_contenedor2)
                        // document.getElementsByClassName("aplicacion")[valor_1].getElementsByClassName("modulo")[ document.getElementsByClassName("aplicacion")[valor_1].getElementsByClassName("modulo").length-1].getElementsByClassName("bt-max")[0].addEventListener("click", Desktop.max_contenedor2)
                        //    document.getElementsByClassName("bt-max")[document.getElementsByClassName("aplicacion").length-1].addEventListener("click", Desktop.max_contenedor)

                        //      $(".aplicacion .button_add").click( Desktop.Aplicaciones.add_modulo)
                        const nodeList = document.querySelectorAll("div.modulo .bt-max");
                        // alert(nodeList.length)
                        for (let i = 0; i < nodeList.length; i++) {
                            nodeList[i].addEventListener("click", Desktop.max_contenedor2)
                        }
                    }
                }
            }
            ;
            this.config = Librerias;
            this.alerta = function() {
                alert("new desktop")
            }
            this.pinta_escritorio = function() {
                document.body.innerHTML = this.config.Lib1[0]
                document.getElementsByClassName("button_add")[0].addEventListener("click", this.add_aplicacion4)
                   
                $(".contenedor").draggable();
                $(".contenedor").resizable();

            }

            this.add_aplicacion3 = function() {
                Desktop.Aplicaciones.listado.push(new Panel("App",0,1,1))
                console.log(Desktop.Aplicaciones.listado)
                document.getElementsByClassName("desktop")[0].innerHTML += Desktop.config.Lib1[3]
                document.getElementsByClassName("button_add")[0].addEventListener("click", Desktop.add_aplicacion3)
                $(".aplicacion .button_add").click(Desktop.Aplicaciones.add_modulo2)
                const nodeList = document.querySelectorAll("div.aplicacion .btn-max");
                // alert(nodeList.length)
                for (let i = 0; i < nodeList.length; i++) {
                    nodeList[i].addEventListener("click", Desktop.max_contenedor)
                }
                // $(".aplicacion .bt-max").click(Desktop.max_contenedor)

                $(".contenedor").draggable();
                $(".contenedor").resizable();

                //  Desktop.Aplicaciones.listado.push([document.getElementsByClassName("aplicacion").length, Desktop.config.Lib1[1]])
            }
            this.add_aplicacion4 = function() {
                var elem = new PanelApp();
              //  elem.onclick=function(){alert(99)}
                console.log("elem", elem)
                document.body.getElementsByClassName("desktop")[0].append(elem)

               //   elem = new PanelMod();
              //  elem.onclick=function(){alert(99)}
              //  console.log("elem", elem)
             //4   document.body.getElementsByClassName("aplicacion")[ document.body.getElementsByClassName("aplicacion").length-1].append(elem)
                
                
                $(".contenedor").draggable();
                $(".contenedor").resizable();
              //  document.getElementsByClassName("button_add")[0].addEventListener("click", Desktop.add_aplicacion4)
                console.log("Desktop", Desktop)

            }
            this.max_contenedor = function() {
                //alert(this)
                let valor_1 = Array.from(document.getElementsByClassName("aplicacion")).indexOf(this.parentElement.parentElement.parentElement)
                alert("cpntnedor-1-" + valor_1)
                document.getElementsByClassName("aplicacion")[valor_1].parentElement.style = "position:absolute !important;height:-webkit-fill-available;width:-webkit-fill-available;top:50px;;left:0;margin-right:15px;margin-bottom:10px;"

            }
            this.max_contenedor2 = function() {
                //  alert(this)
                let valor_2 = Array.from(document.getElementsByClassName("modulo")).indexOf(this.parentElement.parentElement.parentElement.parentElement)
                alert("cpntnedor-2-" + (valor_2))

            }
        }
    }
    // Code to run when the document is ready.
    console.log("Desktop", Desktop)
    // console.log("Desktop", Desktop.Aplicaciones)

    console.log("Aplicaciones", Desktop.Aplicaciones)
    console.log("Modulos", Desktop.Aplicaciones.Modulos)

    Desktop.pinta_escritorio()
    $(".contenedor").draggable();
    $(".contenedor").resizable();

}
