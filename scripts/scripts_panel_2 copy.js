// Initialization for ES Users


$(document).ready(escritorioFn);




function escritorioFn() {
    // console.log("jQuery",new jQuery)
    var panel_destino = document.body

    $(document.body).dblclick(function (event) {
       // alert(Aplicaciones)
      //  event.stopPropagation();
        let contenedor = new panel_contenedor()
        let aplicacion = new panel_aplicacion()
        let aplicaciones = Aplicaciones

        add_app(panel_destino, contenedor, aplicacion, aplicaciones)
        add_listen()


    })
    var Aplicacion = function (panel_control) {
        var Modulos = []
    };
    var Modulo = function (Aplicacion, panel_control) {

    };
    function panel_contenedor() {
        const panel = document.createElement("div");
        // panel.tipo=clase2;
        // panel.order=Paneles_list.length
        // alert(panel.order)
        panel.onclick = function () {

            console.log(" panel_contenedor.onclick", this.offsetParent)
        }
        panel.ondblclick = function (event) {
           // alert(4444444444)
           event.preventDefault();
           event.stopPropagation();
        }
        // panel.setAttribute("tipo",clase2)
        panel.className = "contenedor"
        // panel.innerHTML = "<div class='border-0 border-black m-2 p-0 " + clase2 + "'><div class='border border-black d-flex gap-2 p-1'><div class='border border-black bg-primary ps-2 pe-2'>" + clase2 + "</div></div></div>"
        // panel.innerHTML = innerHTML;
        Object.setPrototypeOf(panel, panel_contenedor.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_contenedor.prototype, HTMLDivElement.prototype);
    function panel_aplicacion() {
        const panel = document.createElement("div");
        panel.ondblclick = function (event) {
            event.preventDefault();
             event.stopPropagation();
          //  let contenedor = new panel_contenedor()
            // let modulo = new panel_modulo()
          //  let aplicaciones = Aplicaciones
  
         let modulo = new panel_modulo()
         add_mod(panel,modulo)
    
           // add_listen()
        }

        panel.className = "aplicacion"
        Object.setPrototypeOf(panel, panel_aplicacion.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_aplicacion.prototype, HTMLDivElement.prototype);
    function panel_modulo() {
        const panel = document.createElement("div");
        panel.ondblclick = function (event) {
            event.preventDefault();
             event.stopPropagation();
             alert(this.offsetParent.className)
        }
        panel.className = "modulo"
        //panel.innerHTML = 1

        Object.setPrototypeOf(panel, panel_modulo.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_modulo.prototype, HTMLDivElement.prototype);
    var Aplicaciones = [
        "app"
    ];
    function add_listen() {
        $("body .contenedor").draggable();
        $("body .contenedor").resizable();


    };
    add_app = function (panel_destino, contenedor, aplicacion, aplicaciones) {
        // alert("AddApp")
        console.log("panel_destino", panel_destino)
        console.log("contenedor", contenedor)
        console.log("aplicacion", aplicacion)
        aplicaciones.push([panel_destino, contenedor, aplicacion])
        aplicaciones.push(new Aplicacion(aplicacion))

        contenedor.append(aplicacion)
        panel_destino.append(contenedor)

    };
    add_mod = function (panel_destino,modulo) {
//alert(panel_destino)
      //  contenedor.append(aplicacion)
        panel_destino.append(modulo)
    }
    // Desktop2 = {

    //     Aplicacion: function (panel_app, order) {
    //         this.selected_modulo = ""
    //         this.Order = order
    //         this.Panel = panel_app;
    //         this.Modulos = [];
    //         this.add_mod = function (event) {

    //             this.Modulos.push(new Desktop2.Modulo(new panel_control("", "modulo"), order, this))
    //             document.getElementsByClassName("aplicacion")[order].append(this.Modulos[this.Modulos.length - 1].Panel)
    //             Paneles_list.push(this.Modulos[this.Modulos.length - 1].Panel)

    //             console.log(" panel.onclickmodulo", this)

    //             add_listen()
    //         }
    //         panel_app.onclick = function () {
    //             console.log(" panel.onclick", panel_app.tipo)
    //         }
    //     },
    //     Modulo: function (panel_mod, order, Aplicacion) {
    //         this.Panel = panel_mod;
    //         this.App = Aplicacion
    //         this.test = "test"
    //         panel_mod.onclick = function () {
    //             console.log(" modulo.onclick", "Mod" + Aplicacion.Order)
    //             console.log(" mod.onclick", this.offsetParent)

    //         }
    //     },
    //     Aplicaciones: [

    //     ],
    //     add_app: function () {
    //         Desktop2.Aplicaciones.push(new Desktop2.Aplicacion(new panel_control("contenedor", "aplicacion"), Desktop2.Aplicaciones.length))
    //         document.body.append(Desktop2.Aplicaciones[Desktop2.Aplicaciones.length - 1].Panel)
    //         document.getElementsByClassName("aplicacion")[document.getElementsByClassName("aplicacion").length - 1].getElementsByTagName("div")[0].innerHTML += ' <button onclick="alert(this.offsetParent); alert(this.offsetParent.tipo); alert(this.parentElement.parentElement.Order); Desktop2.Aplicaciones[' + (Desktop2.Aplicaciones.length - 1) + '].add_mod()" class="btn btn-sm m-0 p-0 bg-warning ps-2 pe-2">Mod</button>'
    //         // document.getElementsByClassName("aplicacion")[Desktop2.Aplicaciones.length - 1].getElementsByTagName("div")[0].innerHTML += ' <button  onclick="Desktop2.borra_app(this,'+(Desktop2.Aplicaciones.length - 1)+')" class="btn btn-sm m-0 p-0 bg-warning ps-2 pe-2">Delete</button>'
    //         //  document.getElementsByClassName("aplicacion")[ document.getElementsByClassName("aplicacion").length-1].getElementsByTagName("div")[0].innerHTML += ' <button  class="boton-add btn btn-sm m-0 p-0 bg-warning ps-2 pe-2">Mod</button>'
    //         document.getElementsByClassName("aplicacion")[Desktop2.Aplicaciones.length - 1].getElementsByTagName("div")[0].innerHTML += ' <button  onclick="Desktop2.borra_app(this,' + (Desktop2.Aplicaciones.length - 1) + ')" class="btn btn-sm m-0 p-0 bg-warning ps-2 pe-2">Delete</button>'
    //         Paneles_list.push(Desktop2.Aplicaciones[Desktop2.Aplicaciones.length - 1].Panel)
    //         $(".boton-add").click(function () {
    //             alert(66)
    //             Desktop2.Aplicaciones[(Desktop2.Aplicaciones.length - 1)].add_mod
    //         })
    //         add_listen()
    //     },
    //     borra_app: function (parameter, valor) {
    //         alert(parameter.parentElement.parentElement.className)
    //         parameter.parentElement.parentElement.parentElement.outerHTML = ""
    //         // document.getElementsByClassName("contenedor")[order].outerHTML=""

    //         //  delete Desktop2.Aplicaciones[valor]
    //         Desktop2.Aplicaciones.splice(valor, 1)
    //         Desktop2.Aplicaciones.forEach(element => {
    //             element.Order = Desktop2.Aplicaciones.indexOf(element)
    //         });
    //     }
    // }
    // Run01 = function (text) {
    //     alert(text)
    // }


}






// const send = document.querySelector("#send");

// send.addEventListener("click", async () => {
//   const formData = new FormData();
//   formData.append("username", "Groucho");
//   formData.append("accountNum", 123456);

//   // A file <input> element
//   const avatar = document.querySelector("#avatar");
//   formData.append("avatar", avatar.files[0]);

//   // JavaScript file-like object
//   const content = '<q id="a"><span id="b">hey!</span></q>';
//   const blob = new Blob([content], { type: "text/xml" });
//   formData.append("webmasterFile", blob);

//   console.log(formData.get("webmasterFile"))
//   console.log(formData.keys)
// //   const response = await fetch("http://example.org/get", {
// //     mode:"no-cors",
// //     method: "GET",
// //   //  body: formData,
// //   });
// //   console.log(await response.json());
// });


$("form").draggable();
$("form").resizable();




