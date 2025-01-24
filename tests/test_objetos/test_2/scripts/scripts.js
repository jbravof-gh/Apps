var Jugadores = []
var array_test_1 = []
const array_test_2 = []

var panel_seleccionado=0;
var old_style="";
var max_style="position:absolute !important; width:-webkit-fill-available !important;height:-webkit-fill-available !important;z-index:10 !important;"

var Templates = []
var Templates_def = []

var Applicacion = {};
Applicacion.Lista_Jugadores = Jugadores;
Applicacion.Name = "Test";
Applicacion.old_style = "";
Applicacion.start_style = "position:absolute !important;";

Applicacion.Class = "applicacion template bg-white  d-flex flex-column";
Applicacion.run_name = function(params) {
    alert("Nombre: " + this.Name);
    alert("Nombre: " + params)
}
Applicacion.maximiza = function(params) {
    var panel_destino = document.getElementsByClassName("applicacion")[panel_seleccionado]
    Applicacion.old_style = panel_destino.getAttribute("style")
    panel_destino.setAttribute("style", "position:absolute;width:100%;height:100%;")
}
Applicacion.minimiza = function(params) {
    var panel_destino = document.getElementsByClassName("applicacion")[panel_seleccionado]

    panel_destino.setAttribute("style", Applicacion.old_style)
}
Applicacion.pinta = function(params) {
    document.body.innerHTML = document.getElementsByTagName("template")[prompt("",0)].innerHTML + document.body.innerHTML 
   // var panel_destino = document.getElementsByClassName("applicacion")[0]

        var panel_destino = document.getElementsByClassName("applicacion")[document.getElementsByClassName("applicacion").length-1]


    Applicacion.start_style=panel_destino.getAttribute("style")
    panel_destino.setAttribute("Class", Applicacion.Class)
    panel_destino.setAttribute("Style", Applicacion.start_style)
    //     panel_destino = document.getElementsByClassName("template")[0].getElementsByClassName("div-panel")[0]
    //  panel_destino.innerHTML += document.getElementsByTagName("template")[3].innerHTML
    //Jugadores.push(JSON.stringify(Array.from(document.getElementsByTagName("template")[3].getElementsByTagName("*"))));
    // Jugadores.push(Object.create(Jugador));
    //   Jugadores[Jugadores.length - 1].Name = document.getElementsByClassName("panel-div")[0].getElementsByClassName("h3")[0].innerHTML;
  jQuery(".applicacion").draggable()
    jQuery(".applicacion").resizable()
    jQuery(".panel").draggable()
    jQuery(".panel").resizable()
}
Applicacion.update = function(params) {
    Applicacion.Class = prompt("Class", Applicacion.Class)
    var panel_destino = document.getElementsByClassName("template")[0]
    panel_destino.setAttribute("Class", Applicacion.Class)
}
Applicacion.update_class = function(params) {

    var panel_destino = document.getElementsByClassName("forma-1")[0]
    panel_destino.innerHTML = document.getElementsByTagName("template")[1].innerHTML
    document.getElementsByClassName("input-class")[0].value = Applicacion.Class
}
Applicacion.update_class_value = function(params) {

    Applicacion.Class = document.getElementsByClassName("input-class")[0].value
    var panel_destino = document.getElementsByClassName("template")[0]
    panel_destino.setAttribute("Class", Applicacion.Class)
}
var Jugador = {

    Name: "",
    old_style: "",
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

    },
    Update_jugador: function(params) {
        //  alert(params)

        var valor_jugador1 = prompt("Nombre", Jugadores[params].Name)
        Jugadores[params].Name = valor_jugador1;
        var panel_destino = document.getElementsByClassName("template")[0]
       // panel_destino.getElementsByTagName("h2")[params].innerHTML = Jugadores[params].Name
        panel_destino.getElementsByClassName("caja")[params].innerHTML += document.getElementsByTagName("template")[prompt()].innerHTML
        jQuery(".panel").draggable()
        jQuery(".panel").resizable()
        jQuery(".div-paneles").draggable()
        jQuery(".div-paneles").resizable()
    },
    Crea_jugador: function name(params) {
        var valor_jugador2 = params

        Jugadores.push(Object.create(Jugador));
        Jugadores[Jugadores.length - 1].Name = valor_jugador2;
        Jugador.Pinta_jugador();
        jQuery(".div-paneles").draggable()
        jQuery(".div-paneles").resizable()
                jQuery(".applicacion").resizable()


    },
    Pinta_jugador: function(params) {
        //  alert(Jugadores[Jugadores.length - 1].Name)
        var panel_destino = document.getElementsByClassName("template")[0].getElementsByClassName("div-panel")[0]
        panel_destino.innerHTML += document.getElementsByTagName("template")[3].innerHTML
        panel_destino.getElementsByClassName("h3")[Jugadores.length - 1].innerHTML = Jugadores[Jugadores.length - 1].Name
        panel_destino.getElementsByClassName("bt-max")[Jugadores.length - 1].setAttribute("name", Jugadores.length - 1)
        panel_destino.getElementsByClassName("bt-min")[Jugadores.length - 1].setAttribute("name", Jugadores.length - 1)
    //    panel_destino.getElementsByClassName("caja")[Jugadores.length - 1].innerHTML += Jugadores.length + document.getElementsByTagName("template")[prompt("","4")].innerHTML
        // panel_destino = document.getElementsByClassName("template")[0].getElementsByClassName("div-paneles")[Jugadores.length - 1]
        //                  panel_destino.getElementsByTagName("div")[1].innerHTML+= document.getElementsByTagName("template")[3].innerHTML
        // panel_destino.innerHTML += document.getElementsByTagName("template")[3].innerHTML

        jQuery(".panel").draggable()
        jQuery(".panel").resizable()

    }
}

Applicacion.pinta();
//  document.getElementsByClassName("applicacion")[1].innerHTML= document.getElementsByTagName("template")[18].innerHTML
//  document.getElementsByClassName("applicacion")[2].innerHTML= document.getElementsByTagName("template")[17].innerHTML
//  document.getElementsByClassName("applicacion")[3].innerHTML= document.getElementsByTagName("template")[16].innerHTML
//  document.getElementsByClassName("applicacion")[4].innerHTML= document.getElementsByTagName("template")[6].innerHTML
//  document.getElementsByClassName("applicacion")[5].innerHTML= document.getElementsByTagName("template")[8].innerHTML


jQuery(".applicacion").draggable()
jQuery(".applicacion").resizable()
jQuery(".applicacion2").draggable()
jQuery(".applicacion2").resizable()

$("window").on("resizeTo", function() {
    console.log("resss: ");
});
$(".template").on("mouseclick", function() {
    console.log("mouseleave: ");
});
$(".template").on("click", function() {
    console.log("Click: " + $(this).text());
});

async function get_arrays(event) {
    event.parentElement.parentElement.getElementsByClassName('array-list')[0].innerHTML += document.getElementsByClassName('div-paneles').length;
    event.parentElement.parentElement.getElementsByClassName('array-list')[0].innerHTML += "Length: " + document.all.length
    //           this.parentElement.parentElement.getElementsByClassName('array-list')[0].innerHTML+=Object.getOwnPropertyNames(window)
     var texto_add=""
    for (var o of Object.getOwnPropertyNames(window)) {
   
   // for (var o of window.all) {

        if (o == 'Array') {
                    texto_add+= '<div class="bg-warning">Array: ' +  o + ' </div><br>'

                                texto_add+= '<div class="bg-primary">Array: ' + o[2] + ' </div><br>'


           // event.parentElement.parentElement.getElementsByClassName('array-list')[0].innerHTML += '<div>Array: ' + o.tagName + ' </div><br>'

        } else {
                                texto_add+= '<div>other: ' + o + ' </div><br>'

           // event.parentElement.parentElement.getElementsByClassName('array-list')[0].innerHTML += '<div>other: ' + o.tagName + ' </div><br>'

        }

        
    }
                event.parentElement.parentElement.getElementsByClassName('array-list')[0].innerHTML += texto_add;


}

function carga_document() {
     var panel_destino = document.getElementsByClassName("template")[0].getElementsByClassName("caja")[Jugadores.length-1]

    for (let valor of Array.from(document.getElementsByTagName("*"))) {
        panel_destino.innerHTML+=valor.tagName +"<br>"
    }
}
function carga_window() {
     var panel_destino = document.getElementsByClassName("template")[0].getElementsByClassName("caja")[Jugadores.length-1]
var texto_suma=""
    for (let valor of Object.getOwnPropertyNames(window) ) {
        texto_suma+=valor +"<br>"
       // window.valor
    }
            panel_destino.innerHTML+=texto_suma
   panel_destino.innerHTML+= Object.getOwnPropertyNames(window)[5].prototype
    

}
function carga_visor() {
     var panel_destino = document.getElementsByClassName("template")[0].getElementsByClassName("caja")[Jugadores.length-1]

  
        panel_destino.innerHTML+=document.getElementsByTagName("template")[8].innerHTML
    
}
function carga_aplicacion() {
    var iframe = document.getElementsByTagName("iframe")[0]

    console.log("CC iFrame Loaded");
    //  alert(this.src)
    //  console.log(this.contentDocument.head.innerHTML)
    var colleccion = Array.from(iframe.contentDocument.head.getElementsByTagName("template"))
    for (let item of colleccion) {
        console.log("item", item)

        console.log("item Name: ", item.getAttribute("name"))
        console.log("item Content: ", item.content)
        console.log("item Content Nodes: ", item.content.cloneNode(true).children.length)
        console.log("item Content outerHTML: ", item.content.cloneNode(true).children[0].outerHTML)
        Templates_def.push([["name", item.getAttribute("name")], ["outer", item.content.cloneNode(true).children[0].outerHTML]])
    }
    console.log("Array", Array.from(iframe.contentDocument.head.getElementsByTagName("template")))
    Templates = Array.from(iframe.contentDocument.head.getElementsByTagName("template"))
 document.getElementsByClassName("select-templates")[0].innerHTML=""
    carga_templates()

     var panel_destino = document.getElementsByClassName("template")[0]//.getElementsByClassName("caja")[Jugadores.length-1]

    for (let valor of Array.from(panel_destino.childNodes)) {
        panel_destino.getElementsByClassName("caja")[Jugadores.length-1].innerHTML+=valor.outerHTML +"<hr>"
    }
}

function carga_templates() {
    var colleccion = Templates_def
    for (let item of colleccion) {
 document.getElementsByClassName("select-templates")[0].innerHTML+=
     "<option>" + item[0][1] +"</option"

       
    }
    
    
}


                function carga_tag_names(event) {
                  //  alert(event.className)
                    var panel_destino = event.getElementsByTagName("select")[0]
panel_destino.innerHTML =""

                    for (let valor of Array.from(document.getElementsByTagName("*"))) {
                        panel_destino.innerHTML +="<option class='bg-warning bg-gradient border m-1 rounded-3 p-1 ps-2'>" + valor.tagName + "</option>"
                    }

                }
                function carga_selected_tag_names(event,nombre_pass) {
                  //  alert(event.className)
                    var panel_destino = event.getElementsByTagName("select")[0]
panel_destino.innerHTML =""
                    for (let valor of Array.from(document.getElementsByTagName(nombre_pass))) {
                        panel_destino.innerHTML +="<option class='bg-warning bg-gradient border m-1 rounded-3 p-1 ps-2'>" + valor.tagName + "</option>"
                    }

                }
                function select_change(event){
                    var panel_destino = document.getElementsByClassName("visor-texto")
                  //  alert( Array.from(document.getElementsByTagName("*"))[event.selectedIndex].innerHTML)
                    panel_destino[0].innerHTML= Array.from(document.getElementsByTagName("*"))[event.selectedIndex].outerHTML
                    panel_destino[1].innerHTML= Array.from(document.getElementsByTagName("*"))[event.selectedIndex].innerHTML

                
                }


var valor_add;

function templates_fun(e) {
    try {
        // e.parentElement.parentElement.getElementsByClassName("panel")[0].innerHTML += e.innerHTML
        valor_add = Array.from(document.head.getElementsByTagName("template"))

        //e.parentElement.parentElement.getElementsByClassName("panel")[0].innerHTML += valor_add
        valor_add.forEach(element => {
            e.parentElement.parentElement.getElementsByClassName("panel")[0].innerHTML += "<div class='temp-link border'>" + element.id + "</div><br>"

        }
        )

    } catch (error) {
        alert(error)
    }
    $('.temp-link').click(function() {
        //  alert(document.getElementById(this.innerHTML).id)
        e.parentElement.parentElement.parentElement.getElementsByClassName("right")[0].innerHTML = document.getElementById(this.innerHTML).innerHTML

    })
}

/* Get the element you want displayed in fullscreen mode (a video in this example): */
var contador=0

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  //  alert(panel_seleccionado)
    var elem = document.getElementsByClassName('applicacion')[panel_seleccionado] ;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
            // openFullscreen()

function add_menu(params) {
     document.getElementsByClassName('div-panel')[0].innerHTML+=document.head.getElementsByTagName("template")[params].innerHTML
            jQuery(".applicacion").draggable()
        jQuery(".applicacion").resizable()
}

