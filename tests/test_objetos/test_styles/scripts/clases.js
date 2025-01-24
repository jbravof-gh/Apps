class Panel2 {
    /* Contenido de la clase */
    constructor(name, age, order, template) {
        this.name = name;
        this.age = age;
        this.order = order;
        this.template = template;
        this.config = {};

    }
    get panel_order() {
        return this.order;
    }
    run(name, order) {
        return this.name + "-" + this.order;

    }
    maximiza(order) {
        var panel_destino = document.getElementsByClassName("id-div")[this.order]
        const sit_ini = "top:" + panel_destino.style.top + ";left:" + panel_destino.style.left + ";width:" + panel_destino.style.width + ";height:" + panel_destino.style.height
        panel_destino.setAttribute("style", "z-index:10;position:absolute !important;top:" + document.body.offsetTop + "px !important;width:" + document.body.offsetWidth + "px;height:" + document.body.offsetHeight + "px;left:0 !important ;");
        //alert(temo_destino.style);
        panel_destino.setAttribute("old", sit_ini)

    }
    minimiza(order) {
        var panel_destino = document.getElementsByClassName("id-div")[this.order]
        panel_destino.setAttribute("style", panel_destino.getAttribute("old"))

    }
    pinta(age, order, template) {
        //  alert(this.order)
        panel_seleccionado = this.order
        document.body.innerHTML += document.getElementsByTagName("template")[0].innerHTML;

        var Panel_destino = document.getElementsByClassName("id-div")[this.order]
        Panel_destino.getElementsByClassName("panel")[0].className = Panel_destino.getElementsByClassName("panel")[0].className + (" bg-" + colores[this.age][1])
        // alert([this.template])
        Panel_destino.getElementsByClassName("panel")[0].innerHTML = document.getElementsByTagName("template")[this.template].innerHTML

        Panel_destino.getElementsByClassName("bt-maxim")[0].setAttribute("name", this.order)
        Panel_destino.getElementsByClassName("bt-minim")[0].setAttribute("name", this.order)
        Panel_destino.getElementsByClassName("titulo")[0].innerHTML = this.name;
        $('.bt-maxim').click(function() {
            var Panel_destino = this.getAttribute("name")
            paneles[Panel_destino].maximiza();
        })
        $('.bt-minim').click(function() {
            var Panel_destino = this.getAttribute("name")
            paneles[Panel_destino].minimiza();
        })
        $('.titulo').click(function() {
            // alert(this.parentElement.parentElement.parentElement.getAttribute("name"))
            //alert(paneles[this.parentElement.parentElement.parentElement.getAttribute("name")].run())

            const div_panel = this.parentElement.parentElement.getElementsByClassName("panel")[0]
            try {
                if (div_panel.style.display == "") {
                    div_panel.style = "display:none !important;";
                    div_panel.parentElement.style.height = "80px !important"
                } else {
                    div_panel.style = "";
                    div_panel.parentElement.style = "";
                }
            } catch {
                div_panel.style = "display:none !important;"
                div_panel.parentElement.style.height = "80px !important"

            }

        })

    }

}

//customElements.define("expanding-list", Applicacion, { extends: "div" });
//customElements.define('my-Panel', Panel);

class Panel3 extends HTMLDivElement {
    constructor(classe, ide) {
        super(classe);
        // Other things
        this.id = "border";
        this.style = "color:red;"
    }
    testea() {
        alert(23)
    }
    valor = 34;
}
//window.customElements.define('my-custom-element', Panel);

class Panel extends HTMLDivElement {
    constructor(Tipo, Text) {
        super(Tipo);
        this.tipo = Tipo;
        this.textContent = "";
        this.align = "left";
        this.className = " ";
        this.className += Tipo;

        this.style = "font-Weight:bold;font-Style:italic;";
        this.contentEditable = "true";
        //this.innerHTML += "<p style=color:blue;>aaaaaaaaaaa</p>";
        this.innerHTML += document.getElementsByTagName("template")[Text].innerHTML;
        this.getElementsByClassName("titulo")[0].innerHTML = fname.value

    }

    maxima(text) {
        alert(text)
    }
}
;//customElements.define("test-div",Panel,{extends:"div"});
export class PanelAplicacion extends HTMLDivElement {
    constructor(Tipo, Text, Order) {
        super(Tipo);
        this.tipo = Tipo;
        this.textContent = "";
        this.order = Order;
        this.align = "left";
        this.className = "contenedor";
        this.style_old = "";
        this.style_max = "position:absolute !important;width:100%;height:-webkit-fill-available;left:0px;z-index:100";
        this.style = "font-Weight:bold;font-Style:italic;";
        this.contentEditable = "true";
        this.innerHTML += "<div class='" + Tipo + "'>-</div>"

    }

    maximiza(Order, style_max, style_old) {
        this.style_old = Paneles[this.order].getAttribute("style")
        Paneles[this.order].setAttribute("style", this.style_max)
    }
    minimiza(Order, style_old) {
        Paneles[this.order].setAttribute("style", this.style_old)
    }
    close(Order) {
         Paneles.splice(this.order, 1)
        document.getElementsByClassName("contenedor")[this.order].outerHTML = ""
        //Paneles[this.order].outerHTML = ""
      
    }
    pinta_app(Order){
            document.body.prepend(Paneles[this.order]);
    document.getElementsByClassName("contenedor")[Paneles.length - 1].getElementsByTagName("div")[0].innerHTML = document.head.getElementsByTagName("template")[2].innerHTML;

    }
    pinta_modulo(Order,valpass){
      //  document.body.prepend(Paneles[this.order]);
       alert(valpass)
         document.getElementsByClassName("div-panel")[valpass].prepend(Paneles[this.order]);
                    // document.getElementsByClassName('modulo')[document.getElementsByClassName('modulo').length - 1].innerHTML = document.head.getElementsByTagName("template")[prompt("Panel", 3)].innerHTML
  
                                 document.getElementsByClassName("contenedor")[valpass].getElementsByClassName('modulo')[0].outerHTML = document.head.getElementsByTagName("template")[prompt("Panel", 3)].innerHTML

        //$(".menu-add").click(Paneles[Paneles.length - 1].add_menu2)
           $(".contenedor").draggable();
    $(".contenedor").resizable();

        try{       document.getElementsByClassName('menu-add')[ Array.from(document.getElementsByClassName(this.className)).indexOf(this)].addEventListener("click", this.add_menu2);
}
        catch{}

       // $(".menu-add").click(this.add_menu2)
 

        
    }
     add_menu2(Applicacion) {
 //alert( Array.from(document.getElementsByClassName(this.className)).indexOf(this))
             Paneles.push(new PanelAplicacion("modulo",3,Paneles.length))

                 Modulos.push(Paneles[Paneles.length-1])
    Control.pinta_mod(Applicacion,Modulos[Modulos.length-1])
                   alert(Array.from(document.getElementsByClassName("menu-add")).indexOf(this))


    //Paneles[Paneles.length - 1].pinta_modulo(Array.from(document.getElementsByClassName(this.className)).indexOf(this),Array.from(document.getElementsByClassName("menu-add")).indexOf(this))
     }
}
class PanelModulo extends HTMLDivElement {
    constructor(Tipo, Text) {
        super(Tipo);
        this.tipo = Tipo;
        this.textContent = "";
        this.align = "left";
        this.className = "contenedor";
        //this.className+=Tipo;
        this.max_style = "div";
        this.style = "font-Weight:bold;font-Style:italic;";
        this.contentEditable = "true";
        //this.innerHTML += "<p style=color:blue;>aaaaaaaaaaa</p>";
        this.innerHTML += "<div class='" + Tipo + "'>-</div>"

    }

    maxima(text) {
        alert(6666)
    }
}
