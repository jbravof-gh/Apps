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
        add_listen(aplicacion)



    })
    var Aplicacion = function (panel_control) {
        this.Modulos = [];
         this.add_modulo=function(modulo){this.Modulos.push(modulo)}
    };
    var Modulo = function (Aplicacion, panel_control) {

    };
    function panel_contenedor() {
        const panel = document.createElement("div");
        panel.onmouseleave=function(){
            panel.style.zIndex="0"

        }
        panel.onmouseenter=function(){
            panel.style.zIndex="11"

        }
        panel.onclick = function () {

           // panel.style.zIndex="11"
            console.log(" panel_contenedor.onclick", this.offsetParent)
        }
        panel.ondblclick = function (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        // panel.setAttribute("tipo",clase2)
        panel.className = "contenedor"
        // panel.innerHTML = "<div class='border-0 border-black m-2 p-0 " + clase2 + "'><div class='border border-black d-flex gap-2 p-1'><div class='border border-black bg-primary ps-2 pe-2'>" + clase2 + "</div></div></div>"
        Object.setPrototypeOf(panel, panel_contenedor.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_contenedor.prototype, HTMLDivElement.prototype);
    function panel_aplicacion() {
        const panel = document.createElement("div");
        panel.ondblclick = function (event) {
            // event.preventDefault();
            // event.stopPropagation();

            // let modulo = new panel_modulo()
            // add_mod(panel, modulo)

        }
        panel.innerHTML="<div><button class='add-app'>Run !</button></div>"
        panel.className = "aplicacion"
        panel.getElementsByClassName("add-app")[0].onclick=function(event){
            event.preventDefault();
            event.stopPropagation();

            let modulo = new panel_modulo()
            var valor_1=( Array.from(document.getElementsByClassName( this.offsetParent.className)).indexOf(this.offsetParent)   )
            add_mod(this.parentElement.parentElement, modulo,valor_1)

        }
        $(".add-app").click(function(event){

          //  alert(this.offsetParent.className)
          //  alert(this.parentElement.parentElement.className)

        })
        Object.setPrototypeOf(panel, panel_aplicacion.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_aplicacion.prototype, HTMLDivElement.prototype);
    function panel_modulo() {
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
        panel.className = "modulo"
        //panel.innerHTML = 1

        Object.setPrototypeOf(panel, panel_modulo.prototype);

        return panel;

    };
    Object.setPrototypeOf(panel_modulo.prototype, HTMLDivElement.prototype);
    var Aplicaciones = [
    
    ];
    function add_listen(aplicacion) {
        $("body .contenedor").draggable();
        $("body .contenedor").resizable();


    };
    add_app = function (panel_destino, contenedor, aplicacion, aplicaciones) {
        // alert("AddApp")
        console.log("panel_destino", panel_destino)
        console.log("contenedor", contenedor)
        console.log("aplicacion", aplicacion)
       // aplicaciones.push([panel_destino, contenedor, aplicacion])
        aplicaciones.push(new Aplicacion(aplicacion))

        contenedor.append(aplicacion)
        panel_destino.append(contenedor)
   

    };
    add_mod = function (panel_destino, modulo,Aplicacion_valor) {
        panel_destino.append(modulo)
        Aplicaciones[Aplicacion_valor].add_modulo(modulo)


        
    }



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




