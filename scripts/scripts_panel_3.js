// Initialization for ES Users

$(document).ready(escritorioFn);
var Aplicaciones2
function escritorioFn(Aplicaciones2) {
    Aplicaciones2 = this.Aplicaciones
    var panel_destino = document.body

    $(document.body).dblclick(function (event) {

        add_app(prompt("", 2),"Parchis")
        $(".aplicacion .paneles-i  i").click(function (event) {
         //   alert(Aplicaciones[Aplicaciones.length-1].app_order)
            //  this.apps_length=Aplicaciones.length
            // alert("paneles - " + apps_length)
            event.preventDefault();
            event.stopPropagation();
            //  this.add_modulo (this,aplicacion,3) 
            //   alert(event.target.getAttribute("name"))
            Aplicaciones[Aplicaciones.length-1].add_modulo( Aplicaciones[Aplicaciones.length-1], Aplicaciones[Aplicaciones.length-1].aplicacion, event.target.getAttribute("name"))
            //   contenedor.getElementsByClassName("add-mod")[0].click(event,event.target.getAttribute("name"))

            console.log(event)
            //Aplicacion.add_modulo(Aplicacion,aplicacion,prompt("",3))

        })
    });
    // add_app = function (val_template) {

    //     let aplicaciones = Aplicaciones
    //     //  let panel_destino=document.body
    //     let contenedor = new panel_contenedor()
    //     let aplicacion = new panel_aplicacion2(val_template)

    //     aplicaciones.push(new Aplicacion(contenedor, aplicacion, val_template))
    //     aplicaciones[aplicaciones.length - 1].pinta_app(contenedor, aplicacion, aplicaciones,aplicaciones.length, aplicaciones[aplicaciones.length - 1], val_template)
    // }

    add_app = function (val_template,app_name) {

        let aplicaciones = Aplicaciones
        let contenedor = new panel_contenedor()
        let aplicacion = new panel_aplicacion2(val_template)

        aplicaciones.push(new Aplicacion(contenedor, aplicacion, val_template, aplicaciones.length,app_name))
        aplicaciones[aplicaciones.length - 1].pinta_app(contenedor, aplicacion, aplicaciones, aplicaciones.length, aplicaciones[aplicaciones.length - 1], val_template)

    }
    // pinta_app2 = function (contenedor, aplicacion, aplicaciones ,apps_length, Aplicacion, val_template) {
    //     let panel_destino = document.body

    //     contenedor.append(aplicacion)
    //     panel_destino.append(contenedor)

    //     contenedor.getElementsByClassName("add-mod")[0].onclick = function (event) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         //  this.add_modulo (this,aplicacion,3) 
    //         alert("add-mod")
    //         Aplicacion.add_modulo(Aplicacion, aplicacion, prompt("", 3),Aplicacion.Modulos.length)

    //     }
    //     $(".paneles-i  i").click(function (event) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         //  this.add_modulo (this,aplicacion,3) 
    //         //   alert(event.target.getAttribute("name"))
    //         Aplicacion.add_modulo(Aplicacion, aplicacion, event.target.getAttribute("name"))

    //         console.log(event)
    //         //Aplicacion.add_modulo(Aplicacion,aplicacion,prompt("",3))

    //     })
    //     $("select").click(function (event) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         alert(Aplicaciones)
    //         alert(Aplicaciones[0].Modulos)

    //     })
    //     contenedor.getElementsByClassName("titulo")[0].innerHTML += aplicaciones.length

    //     contenedor.getElementsByClassName("titulo")[0].className += color_bg[document.getElementsByClassName("contenedor").length - 1]
    //     contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function (event) {
    //         var element = this.offsetParent.getElementsByClassName("div-panel")[0];
    //         element.classList.toggle("visible-no");
    //     });

    //     contenedor.getElementsByClassName("close-app")[0].setAttribute("name", contenedor.modulo)
    //     contenedor.getElementsByClassName("close-app")[0].onclick = function (event, modulo) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         delete Aplicaciones[apps_length-1]
    //         contenedor.outerHTML=""
    //     }
    //     add_listen()

    //     console.log(Aplicaciones)
    //     this.testf("pinta_app2")

    // }
    class Aplicacion {constructor(contenedor, aplicacion, val_template, apps_length,app_name) {
            this.contenedor = contenedor;
            this.aplicacion = aplicacion;
            this.val_template = val_template
            this.Modulos = [];
            // this.apps_length=apps_length
            this.plantilla = val_template
            this.app_order = apps_length

            this.pinta_app_old = function (contenedor, aplicacion, aplicaciones, apps_length, Aplicacion, val_template, plantilla) {
                //    alert("pinta_app - " + apps_length)
                // const temp_val= prompt("", 3)
                let panel_destino = document.body
                //   let contenedor = new panel_contenedor()
                // let aplicacion = new panel_aplicacion2(val_template)

                contenedor.append(aplicacion)
                panel_destino.append(contenedor)

                contenedor.getElementsByClassName("add-mod")[0].onclick = function (event, apps_length) {
                    //  alert(apps_length)
                    event.preventDefault();
                    event.stopPropagation();
                    //  this.add_modulo (this,aplicacion,3) 
                    // alert("add-mod pinta-app")
                    Aplicacion.add_modulo(Aplicacion, aplicacion, prompt("", 3))

                }
                $(".paneles-i  i").click(function (event) {
                    //  this.apps_length=Aplicaciones.length
                    // alert("paneles - " + apps_length)
                    event.preventDefault();
                    event.stopPropagation();
                    //  this.add_modulo (this,aplicacion,3) 
                    //   alert(event.target.getAttribute("name"))
                    aplicaciones[apps_length - 1].add_modulo(Aplicacion, aplicacion, event.target.getAttribute("name"))
                    //   contenedor.getElementsByClassName("add-mod")[0].click(event,event.target.getAttribute("name"))

                    console.log(event)
                    //Aplicacion.add_modulo(Aplicacion,aplicacion,prompt("",3))

                })
                $("select").click(function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    alert(Aplicaciones)
                    alert(Aplicaciones[0].Modulos)

                })
                contenedor.getElementsByClassName("titulo")[0].innerHTML += aplicaciones.length

                contenedor.getElementsByClassName("titulo")[0].className += color_bg[document.getElementsByClassName("contenedor").length - 1]
                contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function (event) {
                    var element = this.offsetParent.getElementsByClassName("div-panel")[0];
                    element.classList.toggle("visible-no");
                });
                contenedor.getElementsByClassName("close-app")[0].onclick = function (event, modulo) {
                    event.preventDefault();
                    event.stopPropagation();
                    delete Aplicaciones[apps_length - 1]
                    sessionStorage.setItem("Apps",JSON.stringify(Aplicaciones))
                    contenedor.outerHTML = ""
                }
                add_listen()
                // ------ auto start ---------- //
                // this.add_modulo (this,aplicacion,
                // this.add_modulo (this,aplicacion,4) 
                // this.add_modulo (this,aplicacion,2) 

                //  alert(JSON.stringify(Array.from(aplicaciones)))
                console.log(Aplicaciones)
                // this.testf("pinta_app")

            }
            this.pinta_app = function (contenedor, aplicacion, aplicaciones, apps_length, Aplicacion, val_template, plantilla, app_order) {
                //  alert("app_order - " + this.app_order)
                // const temp_val= prompt("", 3)
                let panel_destino = document.body
                //   let contenedor = new panel_contenedor()
                // let aplicacion = new panel_aplicacion2(val_template)

                contenedor.append(aplicacion)
                panel_destino.append(contenedor)

                contenedor.getElementsByClassName("add-mod")[0].onclick = function (event) {
                    //   alert( Aplicacion.app_order)
                    event.preventDefault();
                    event.stopPropagation();
                    //  this.add_modulo (this,aplicacion,3) 
                    // alert("add-mod pinta-app")
                    Aplicacion.add_modulo(Aplicacion, aplicacion, prompt("", 3))

                }

                $("select").click(function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    alert(Aplicaciones)
                    alert(Aplicaciones[0].Modulos)

                })
           //     contenedor.getElementsByClassName("titulo")[0].innerHTML ="App - " + aplicaciones.length

                contenedor.getElementsByClassName("titulo")[0].className += color_bg[document.getElementsByClassName("contenedor").length - 1]
                contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function (event) {
                    var element = this.offsetParent.getElementsByClassName("div-panel")[0];
                    element.classList.toggle("visible-no");
                });
                contenedor.getElementsByClassName("close-app")[0].onclick = function (event, modulo) {
                    event.preventDefault();
                    event.stopPropagation();
                    delete Aplicaciones[apps_length - 1]
                    contenedor.outerHTML = ""
                }
                add_listen()
                // ------ auto start ---------- //
                // this.add_modulo (this,aplicacion,
                // this.add_modulo (this,aplicacion,4) 
                // this.add_modulo (this,aplicacion,2) 

                //  alert(JSON.stringify(Array.from(aplicaciones)))
                console.log(Aplicaciones)
                // this.testf("pinta_app")

            }
            this.add_modulo = function (Aplicacion, aplicacion, val_template, numero) {
                let contenedor = new panel_contenedor()
                let modulo = panel_modulo2(val_template)
                Aplicacion.Modulos.push(new Modulo(Aplicacion, aplicacion, contenedor, modulo, val_template,Aplicacion.Modulos.length));
                sessionStorage.setItem("Mods",JSON.stringify(Array.from(Aplicacion.Modulos).contenedor) )

                Aplicacion.pinta_modulo(Aplicacion, aplicacion, this.Modulos, this.Modulos.length, contenedor, modulo, numero);
                //  Object.setPrototypeOf(modulo.prototype, HTMLDivElement.prototype);

            };
            this.pinta_modulo = function (Aplicacion, aplicacion, Modulos, mod_length, contenedor, modulo, numero) {

                contenedor.append(modulo)
                aplicacion.getElementsByClassName("div-panel")[0].append(contenedor);
             //   contenedor.getElementsByClassName("titulo")[0].innerHTML = "Mod - " + mod_length

                contenedor.getElementsByClassName("titulo")[0].className += color_bg[document.getElementsByClassName("contenedor").length - 1]
                contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function (event) {

                    var element = this.offsetParent.getElementsByClassName("div-panel")[0];
                    element.classList.toggle("visible-no");

                });
                // contenedor.getElementsByTagName("select")[0].addEventListener("click", function(event){
                //     event.preventDefault();
                //     event.stopPropagation();
                //     alert(Aplicaciones.length)
                //     alert(Aplicaciones)
                //     alert(Aplicaciones[0].Modulos)
                // })
                // contenedor.getElementsByTagName("select")[1].addEventListener("click", function(event){
                //     event.preventDefault();
                //     event.stopPropagation();
                //     alert(Aplicaciones.length)
                //     alert(Aplicaciones)
                //     alert(Aplicaciones[0].Modulos)
                // })
                contenedor.getElementsByClassName("add-mod")[0].onclick = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    //  this.add_modulo (this,aplicacion,3) 
                    //  alert(this.offsetParent.getElementsByClassName("modulo")[0].outerHTML)
                    //  alert("add-control")
                    // Aplicacion.add_modulo(Aplicacion,this.offsetParent.getElementsByClassName("modulo")[0],prompt("",3))
                    Aplicacion.Modulos[mod_length - 1].add_control(Aplicacion, this.offsetParent.getElementsByClassName("modulo")[0], prompt("", 3), Aplicacion.Modulos[mod_length - 1].Controles, Aplicacion.Modulos[mod_length - 1].Controles.length, numero)

                }
                contenedor.getElementsByClassName("close-app")[0].onclick = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    // alert(event)
                    console.log("event", event)

                    console.log("Aplicacion", Aplicacion)
                    console.log("Modulos", Modulos[mod_length - 1])
                         sessionStorage.setItem("Mods",JSON.stringify(Array.from(Modulos).order) )
                    delete Modulos[mod_length - 1]
               

                    //  Modulos.splice(Modulos[mod_length], 1)
                    contenedor.outerHTML = ""

                }
                add_listen()
                console.log(Aplicaciones)
               // crear_tablero()
            };
        }
        testf(texto) {
            alert(texto)
        }
        panel_modulo3(val_template) {
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
            panel.innerHTML = document.getElementsByTagName("template")[val_template].innerHTML
            // panel.getElementsByClassName("add-mod")[0].onclick = function (event) {
            //     event.preventDefault();
            //     event.stopPropagation();

            //     let contenedor = new panel_contenedor()
            //    // let aplicacion = new panel_aplicacion2()

            //     let modulo =new panel_modulo2()
            //     var valor_1=this.offsetParent.getElementsByClassName("modulo").length
            //     var valor_2 = (Array.from(document.getElementsByClassName(this.offsetParent.className)).indexOf(this.offsetParent))
            //     add_mod(this.parentElement.parentElement,contenedor, modulo, valor_1,valor_2)

            //     Aplicaciones[valor_2].add_modulo(modulo)
            //     add_listen(modulo)


            // }
            panel.getElementsByClassName("max-app")[0].onclick = function (event) {
                event.preventDefault();
                event.stopPropagation();

                var valor_1 = (Array.from(document.getElementsByClassName(this.offsetParent.className)).indexOf(this.offsetParent))
                this.offsetParent.setAttribute("old-style", this.offsetParent.getAttribute("style"))
                //    alert(this.offsetParent.getAttribute("max-style"))
                //    alert(this.offsetParent.getAttribute("old-style"))
                this.offsetParent.setAttribute("style", this.offsetParent.getAttribute("max-style"))

            }
            panel.getElementsByClassName("min-app")[0].onclick = function (event) {
                this.offsetParent.setAttribute("style", this.offsetParent.getAttribute("old-style"))

            }
            Object.setPrototypeOf(panel, this.prototype);

            return panel;

        }

    };

    class Modulo {constructor(Aplicacion, aplicacion, contenedor, modulo, val_template, mods_length) {
            this.Aplicacion = Aplicacion;
            this.aplicacion = aplicacion;
            this.contenedor = contenedor;
            this.modulo = modulo;
            this.Controles = [];
            this.val_template=val_template
            this.order = Aplicacion.Modulos.length
            this.control_order=this.Controles.length    
            modulo.onclick = function (event, contenedor) {
                event.preventDefault();
                event.stopPropagation();
                //  alert(event.target.className)
                //  alert(event.target.offsetParent.className)
                //    alert(this.offsetParent.className)
                // event.target.getOrder()

            }
            this.add_control = function (Aplicacion, aplicacion, val_template, Controles, order, numero) {
                // alert("order" + order)
                // alert("numero" + numero)

                let contenedor = new panel_contenedor()
                let modulo = new panel_modulo2(val_template)
                Controles.push(new Control(Aplicacion, aplicacion, contenedor, modulo,Modulo,val_template, Modulo.order));
                // alert("length" + order)
              //  Aplicacion.pinta_modulo(Aplicacion, aplicacion, Aplicacion.Modulos, Aplicacion.Modulos.length, contenedor, modulo,1);
               Controles[Controles.length-1].pinta_control(Aplicacion,Modulo,contenedor,aplicacion,modulo,Controles.length-1)
               
                console.log(Aplicaciones)
                //  Aplicacion.Modulos[Aplicacion.Modulos.length-1].getOrder(Aplicacion,Aplicacion.Modulos[Aplicacion.Modulos.length-1],Aplicacion.Modulos.length)
      

            };
            this.add_jugador = function (Aplicacion, aplicacion, val_template, Controles, order, numero) {
                // alert("order" + order)
                // alert("numero" + numero)

                let contenedor = new panel_contenedor()
                let modulo = new panel_modulo2(val_template)
                Controles.push(new Control(Aplicacion, aplicacion, contenedor, modulo,Modulo,val_template, Modulo.order,"rtttt"));
                // alert("length" + order)
              //  Aplicacion.pinta_modulo(Aplicacion, aplicacion, Aplicacion.Modulos, Aplicacion.Modulos.length, contenedor, modulo,1);
               Controles[Controles.length-1].pinta_control(Aplicacion,Modulo,contenedor,aplicacion,modulo,Controles.length-1,texto_val)
               
                console.log(Aplicaciones)
                //  Aplicacion.Modulos[Aplicacion.Modulos.length-1].getOrder(Aplicacion,Aplicacion.Modulos[Aplicacion.Modulos.length-1],Aplicacion.Modulos.length)
      

            };
            this.getOrder = function (Aplicacion, modulo, numero) {
                alert("getorder" + Aplicacion.Modulos[numero - 1].getAttribute("order"))
                var valor_text = Array.from(Aplicacion.Modulos).indexOf(modulo)
                alert("valor_text - " + numero)
            }


        }
    }

    class Control {constructor(Aplicacion, aplicacion, contenedor, modulo,Modulo, val_template, mods_length,texto_val) {
        this.Aplicacion = Aplicacion;
        this.Modulo=Modulo
        this.aplicacion = aplicacion;
        this.contenedor = contenedor;
        this.modulo = modulo;
        this.Controles = [];
        this.val_template=val_template
        this.order = Aplicacion.Modulos.length
        this.texto_val=texto_val
       // this.control_order=this.Modulo.Controles.length  
        this.pinta_control = function (Aplicacion, Modulo,contenedor,aplicacion,modulo,order,texto_val) {

            contenedor.append(modulo)
            aplicacion.getElementsByClassName("div-panel")[0].append(contenedor);
            contenedor.getElementsByClassName("titulo")[0].innerHTML = texto_val +" - " + order

            contenedor.getElementsByClassName("titulo")[0].className += color_bg[document.getElementsByClassName("contenedor").length - 1]
            contenedor.getElementsByClassName("titulo")[0].addEventListener("click", function (event) {

                var element = this.offsetParent.getElementsByClassName("div-panel")[0];
                element.classList.toggle("visible-no");

            });
            // contenedor.getElementsByTagName("select")[0].addEventListener("click", function(event){
            //     event.preventDefault();
            //     event.stopPropagation();
            //     alert(Aplicaciones.length)
            //     alert(Aplicaciones)
            //     alert(Aplicaciones[0].Modulos)
            // })
            // contenedor.getElementsByTagName("select")[1].addEventListener("click", function(event){
            //     event.preventDefault();
            //     event.stopPropagation();
            //     alert(Aplicaciones.length)
            //     alert(Aplicaciones)
            //     alert(Aplicaciones[0].Modulos)
            // })
            contenedor.getElementsByClassName("add-mod")[0].onclick = function (event) {
                event.preventDefault();
                event.stopPropagation();
                //  this.add_modulo (this,aplicacion,3) 
                //  alert(this.offsetParent.getElementsByClassName("modulo")[0].outerHTML)
                //  alert("add-control")
                // Aplicacion.add_modulo(Aplicacion,this.offsetParent.getElementsByClassName("modulo")[0],prompt("",3))
                Aplicacion.Modulos[mod_length - 1].add_control(Aplicacion, this.offsetParent.getElementsByClassName("modulo")[0], prompt("", 3), Aplicacion.Modulos[mod_length - 1].Controles, Aplicacion.Modulos[mod_length - 1].Controles.length, numero)

            }
            contenedor.getElementsByClassName("close-app")[0].onclick = function (event,Modulo) {
                event.preventDefault();
                event.stopPropagation();
               // alert(order)
                // alert( Aplicacion.Modulos[0].Controles)
                console.log("event", event)

                console.log("Aplicacion", Aplicacion)
            //    console.log("Modulos", Aplicacion.Modulos[mod_length - 1])
                delete Aplicacion.Modulos[0].Controles[order]
                //  Modulos.splice(Modulos[mod_length], 1)
                contenedor.outerHTML = ""

            }
            add_listen()
            console.log(Aplicaciones)

        };
    }
}
 
    var Aplicaciones = [

    ];

    function add_listen() {
        $(" .contenedor").draggable();
        $(" .contenedor").resizable();


    };


    testf = function (texto) {
        alert(texto)
    }
    $(".paneles-i  i").click(function (event) {
        alert(Aplicaciones[Aplicaciones.length-1].app_order)
        //  this.apps_length=Aplicaciones.length
        // alert("paneles - " + apps_length)
        event.preventDefault();
        event.stopPropagation();
        //  this.add_modulo (this,aplicacion,3) 
        //   alert(event.target.getAttribute("name"))
        Aplicaciones[Aplicaciones.length-1].add_modulo( Aplicaciones[Aplicaciones.length-1], aplicacion, event.target.getAttribute("name"))
        //   contenedor.getElementsByClassName("add-mod")[0].click(event,event.target.getAttribute("name"))

        console.log(event)
        //Aplicacion.add_modulo(Aplicacion,aplicacion,prompt("",3))

    })
    add_app(2);


}






