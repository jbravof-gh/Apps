export class Panel {
    /* Contenido de la clase */
    constructor(name, age, order, template) {
        //super();
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
     //   panel_seleccionado = this.order
        document.body.innerHTML += document.getElementsByTagName("template")[1].innerHTML;

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

//customElements.define("test-panel", Panel, { extends: "div" });
//customElements.define('test-div', Panel);
