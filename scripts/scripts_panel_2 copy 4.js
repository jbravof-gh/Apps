// Initialization for ES Users

$(document).ready(escritorioFn);
var Aplicaciones2
function escritorioFn(Aplicaciones2) {
    Aplicaciones2=this.Aplicaciones
    // console.log("jQuery",new jQuery)
    var panel_destino = document.body

    $(document.body).dblclick(function (event) {
        // alert(Aplicaciones)
        //  event.stopPropagation();
        // let contenedor = new panel_contenedor()
        // let aplicacion = new panel_aplicacion2()
        // let aplicaciones = Aplicaciones

      //  add_app(panel_destino, contenedor, aplicacion, aplicaciones)
      add_app_2()
        

      //  console.log("Aplicaciones", Aplicaciones)



    });
    class Aplicacion {
        constructor() {
            this.Modulos = [];
            
            this.pinta_app=function (aplicaciones,Aplicacion) {
                let panel_destino=document.body
                let contenedor = new panel_contenedor()
                let aplicacion = new panel_aplicacion2()

                contenedor.append(aplicacion)
                panel_destino.append(contenedor)

                contenedor.getElementsByClassName("add-mod")[0].onclick = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    alert("add-mod")
                    Aplicacion.add_modulo(Aplicacion,aplicacion)

                }
                contenedor.getElementsByClassName("titulo")[0].innerHTML+=aplicaciones.length
        
                contenedor.getElementsByClassName("titulo")[0].className+=color_bg[document.getElementsByClassName("contenedor").length -1 ]
                contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function(event){
                  //  alert(this.offsetParent.getElementsByClassName("div-panel")[0].innerHTML)
                    var element = this.offsetParent.getElementsByClassName("div-panel")[0];
                    element.classList.toggle("visible-no");
                });
                add_listen()

            }
            this.add_modulo = function (Aplicacion,aplicacion) {
                
                Aplicacion.Modulos.push(new Modulo(Aplicacion));     
                Aplicacion.pinta_modulo(Aplicacion,aplicacion,this.Modulos,this.Modulos.length);   
               // add_listen()
            };
            this.pinta_modulo = function (Aplicacion,aplicacion,Modulos,mod_length) {
                let contenedor = new panel_contenedor()     
                 let modulo =new panel_modulo2()
                 contenedor.append(modulo)
                aplicacion.getElementsByClassName("div-panel")[0].append(contenedor); 
                contenedor.getElementsByClassName("titulo")[0].innerHTML+=mod_length

                contenedor.getElementsByClassName("titulo")[0].className+=color_bg[document.getElementsByClassName("contenedor").length -1 ]
                contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function(event){
                 //   alert(this.innerHTML  +  " - " +this.offsetParent.getElementsByClassName("div-panel")[0].innerHTML)
        
                    var element = this.offsetParent.getElementsByClassName("div-panel")[0];
                    element.classList.toggle("visible-no");
                
                });       
               add_listen()
            };
        }
    };
    class Modulo {
        constructor(Aplicacion) {
            this.Aplicacion = Aplicacion;
          //  this.panel_control = panel_control;

        }
    }
 
    function panel_contenedor() {
        const panel = document.createElement("div");
        panel.onmouseleave = function () {
            panel.style.zIndex = "0"

        }
        panel.onmouseenter = function () {
            panel.style.zIndex = "11"

        }
        panel.onclick = function () {

            // panel.style.zIndex="11"
            console.log(" panel_contenedor.onclick", this.offsetParent)
        }
        panel.ondblclick = function (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        panel.setAttribute("max-style","top:0;left:0;width:-webkit-fill-available;;height:-webkit-fill-available;;z-index:20;")
        panel.setAttribute("old-style","")
        panel.className = "contenedor"
        panel.className+=color_bg[document.getElementsByClassName("contenedor").length]
        // panel.innerHTML = "<div class='border-0 border-black m-2 p-0 " + clase2 + "'><div class='border border-black d-flex gap-2 p-1'><div class='border border-black bg-primary ps-2 pe-2'>" + clase2 + "</div></div></div>"
        Object.setPrototypeOf(panel, panel_contenedor.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_contenedor.prototype, HTMLDivElement.prototype);

    function panel_aplicacion2() {
        const panel = document.createElement("div");
        panel.ondblclick = function (event) {
          

        }
        panel.innerHTML=document.getElementsByTagName("template")[prompt("",2)].innerHTML
        // panel.innerHTML = "<div><button class='add-app'>Add Mod</button><button class='max-app'>Max</button></div>"
        // panel.innerHTML += "<div class='overflow-auto'></div>"
        panel.className = "aplicacion bg-white"
        // panel.getElementsByClassName("add-app")[0].onclick = function (event) {
        //     event.preventDefault();
        //     event.stopPropagation();

        //     let contenedor = new panel_contenedor()
        //    // let aplicacion = new panel_aplicacion2()

        //     let modulo =new panel_modulo2()
        //      var valor_1 = (Array.from(document.getElementsByClassName(this.offsetParent.className)).indexOf(this.offsetParent))
        //   //  var valor_1 = this.offsetParent.getElementsByClassName("modulo").length-1
        //     var valor_2=document.getElementsByClassName("contenedor").length-1
        // Aplicaciones[valor_1].add_modulo(modulo)
        //     add_mod(this.parentElement.parentElement,contenedor, modulo, valor_1,valor_2)
        //     add_listen(panel)


        // }
        panel.getElementsByClassName("max-app")[0].onclick = function (event) {
            event.preventDefault();
            event.stopPropagation();

            var valor_1 = (Array.from(document.getElementsByClassName(this.offsetParent.className)).indexOf(this.offsetParent))
            this.offsetParent.setAttribute("old-style",this.offsetParent.getAttribute("style"))
        //    alert(this.offsetParent.getAttribute("max-style"))
        //    alert(this.offsetParent.getAttribute("old-style"))
           this.offsetParent.setAttribute("style",this.offsetParent.getAttribute("max-style"))

        }
        panel.getElementsByClassName("min-app")[0].onclick = function (event) {
            this.offsetParent.setAttribute("style",this.offsetParent.getAttribute("old-style"))

        }

        Object.setPrototypeOf(panel, panel_aplicacion2.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_aplicacion2.prototype, HTMLDivElement.prototype);

    function panel_modulo2() {
        const panel = document.createElement("div");
        panel.onclick = function (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        panel.ondblclick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            //   alert(this.parentElement.className)
        }
        panel.className = "modulo bg-white "
        panel.innerHTML=document.getElementsByTagName("template")[prompt("",3)].innerHTML
        panel.getElementsByClassName("add-app")[0].onclick = function (event) {
            event.preventDefault();
            event.stopPropagation();

            let contenedor = new panel_contenedor()
           // let aplicacion = new panel_aplicacion2()

            let modulo =new panel_modulo2()
            var valor_1=this.offsetParent.getElementsByClassName("modulo").length
            var valor_2 = (Array.from(document.getElementsByClassName(this.offsetParent.className)).indexOf(this.offsetParent))
            add_mod(this.parentElement.parentElement,contenedor, modulo, valor_1,valor_2)
            
            Aplicaciones[valor_2].add_modulo(modulo)
            add_listen(modulo)


        }
        panel.getElementsByClassName("max-app")[0].onclick = function (event) {
            event.preventDefault();
            event.stopPropagation();

            var valor_1 = (Array.from(document.getElementsByClassName(this.offsetParent.className)).indexOf(this.offsetParent))
            this.offsetParent.setAttribute("old-style",this.offsetParent.getAttribute("style"))
        //    alert(this.offsetParent.getAttribute("max-style"))
        //    alert(this.offsetParent.getAttribute("old-style"))
           this.offsetParent.setAttribute("style",this.offsetParent.getAttribute("max-style"))

        }
        panel.getElementsByClassName("min-app")[0].onclick = function (event) {
            this.offsetParent.setAttribute("style",this.offsetParent.getAttribute("old-style"))

        }
        Object.setPrototypeOf(panel, panel_modulo2.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_modulo2.prototype, HTMLDivElement.prototype);
    var Aplicaciones = [

    ];
    var color_bg=[" bg-warning"," bg-success"," bg-primary"," bg-danger"," bg-secondary"," bg-warning"," bg-success"," bg-primary"," bg-danger"," bg-secondary"]
    function add_listen() {
        $(" .contenedor").draggable();
        $(" .contenedor").resizable();


    };
    add_app = function (panel_destino, contenedor, aplicacion, aplicaciones) {
        // alert("AddApp")
        // console.log("panel_destino", panel_destino)
        // console.log("contenedor", contenedor)
        // console.log("aplicacion", aplicacion)
        // aplicaciones.push([panel_destino, contenedor, aplicacion])

        aplicaciones.push(new Aplicacion(aplicacion))

        contenedor.append(aplicacion)
        panel_destino.append(contenedor)
        contenedor.getElementsByClassName("titulo")[0].innerHTML+=aplicaciones.length

        contenedor.getElementsByClassName("titulo")[0].className+=color_bg[document.getElementsByClassName("contenedor").length -1 ]
        contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function(event){
          //  alert(this.offsetParent.getElementsByClassName("div-panel")[0].innerHTML)
            var element = this.offsetParent.getElementsByClassName("div-panel")[0];
            element.classList.toggle("visible-no");
        });
       
    };
    add_mod = function (panel_destino,contenedor, modulo, Aplicacion_valor,Aplicacion_valor2) {
        contenedor.append(modulo)
        panel_destino.offsetParent.getElementsByClassName("div-panel")[0].append(contenedor)
        contenedor.getElementsByClassName("titulo")[0].innerHTML+=Aplicacion_valor2

        contenedor.getElementsByClassName("titulo")[0].className+=color_bg[document.getElementsByClassName("contenedor").length -1 ]
        contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function(event){
         //   alert(this.innerHTML  +  " - " +this.offsetParent.getElementsByClassName("div-panel")[0].innerHTML)

            var element = this.offsetParent.getElementsByClassName("div-panel")[0];
            element.classList.toggle("visible-no");
        
        });

          add_listen()
        Aplicaciones[Aplicacion_valor+1].add_modulo(modulo)
        //add_listen(aplicacion) 
      



    }
    add_app_2=function () {
    
        let aplicaciones = Aplicaciones
        
        aplicaciones.push(new Aplicacion())
        aplicaciones[aplicaciones.length -1 ].pinta_app(aplicaciones, aplicaciones[aplicaciones.length -1 ])
    }



}





