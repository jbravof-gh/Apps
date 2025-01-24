//import { Panel } from "./clases.js";
import {PanelAplicacion} from "./clases.js";
//import { PanelModulo } from "./clases.js";

const params = {}

customElements.define("test-div", PanelAplicacion, {
    extends: "div"
});

$("form").submit(function() {
    alert(9898)
});

$("#input_submit").click(function() {
    
    Paneles.push(new PanelAplicacion("aplicacion",ftemplate.value,Paneles.length))
    Aplicaciones.push(Paneles[Paneles.length-1])
    Control.pinta_app(Aplicaciones[Aplicaciones.length-1])
   // Control.crea_app()
  //  document.body.append(Paneles[Paneles.length - 1]);
  //  document.getElementsByClassName("contenedor")[Paneles.length - 1].getElementsByTagName("div")[0].innerHTML = document.head.getElementsByTagName("template")[2].innerHTML;
//Paneles[Paneles.length - 1].pinta_app()
    $(".menu-add").click(Paneles[Paneles.length - 1].add_menu2(Aplicaciones[Aplicaciones.length-1]))

    $(".contenedor").draggable();
    $(".contenedor").resizable();
})
function add_panel(params) {
    Paneles.push(new Panel("left","xxxxxxxxxxxxxxxxxxxx"))
  //  document.body.prepend(Paneles[Paneles.length - 1]);
   // $(".menu-add").click(add_menu)

}
function add_menu(params) {
    alert(555555)
    Paneles.push(new PanelAplicacion("modulo",3,Paneles.length))
        Modulos.push(Paneles[Paneles.length-1])
    Control.pinta_mod(Modulos[Modulos.length-1])
    
   // Paneles[Paneles.length - 1].pinta_modulo()

  //  var origen = Array.from(document.getElementsByClassName(this.className)).indexOf(this)
    //  alert(Array.from(document.getElementsByClassName(this.className)).indexOf(this))
 //   document.getElementsByClassName("div-panel")[origen].append(Paneles[Paneles.length - 1]);
    //   Modulo.Crea_modulo(Apps[panel_seleccionado],params)
   // document.getElementsByClassName('modulo')[document.getElementsByClassName('modulo').length - 1].innerHTML = document.head.getElementsByTagName("template")[prompt("Panel", 3)].innerHTML
    jQuery(".contenedor").draggable()
    jQuery(".contenedor").resizable()
//alert("origen",origen)
  //  const el = document.getElementsByClassName("contenedor")[origen].getElementsByClassName("menu-add")[0];
    7//alert("el",el.name)
    //el.addEventListener("click", function (e) {
 //add_menu(el)
//});
    //   $(".menu-add").click(add_menu)

    //   $("i").click(function(){
    // alert(document.getElementsByClassName(this.className).length)
    // })
    //    $(".maximiza").click(function(){

    //alert(document.getElementsByClassName(this.className).length)
    //   alert(Array.from(document.getElementsByClassName(this.className)).indexOf(this))
    //})

}


$(".forma").draggable();
$(".forma").resizable();
