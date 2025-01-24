class Panel extends HTMLDivElement {
    constructor(Desktop) {
        super(Desktop);

        this.className = "contenedor"
        this.onclick = function(event) {
            ;event.stopImmediatePropagation();
        }

        this.style = "width:100px;height:100px;display:block;border:solid;"
    }
}
customElements.define("panel-div", Panel, {
    extends: "div"
});

class PanelApp extends Panel {
    constructor() {
        super();
        this.innerHTML = "<div class='aplicacion'><button>Modulo</button></div>"
        this.style = "width:200px;height:200px;display:block;border:solid;"
        // this.onclick=function(event){alert(this.getElementsByTagName("div")[0].className);this.getElementsByTagName("button")[0].addEventListener("click",this.run(9) );      event.stopImmediatePropagation();}
        this.getElementsByTagName("div")[0].getElementsByTagName("button")[0].onclick = function(event) {

            var control2 = Array.from(document.getElementsByClassName("aplicacion")).indexOf(this.parentElement)

            // alert(control2)
            event.stopImmediatePropagation();
            var elem = new PanelMod();
            //  elem.onclick=function(){alert(99)}
            console.log("elem", elem)
            document.body.getElementsByClassName("aplicacion")[control2].append(elem)

            $(".contenedor").draggable();
            $(".contenedor").resizable();
        }
        // this.onclick=function(){alert("pan") }
        this.run = function(val_01) {
            //alert(444);
            var control2 = Array.from(document.getElementsByClassName("aplicacion")).indexOf(this.getElementsByTagName("div")[0])

            //  alert(control2)
            event.stopImmediatePropagation();
            var elem = new PanelMod();
            //  elem.onclick=function(){alert(99)}
            console.log("elem", elem)
            document.body.getElementsByClassName("aplicacion")[control2].append(elem)

        }

    }
}
customElements.define("app-div", PanelApp, {
    extends: "div"
});
class PanelMod extends Panel {
    constructor() {
        super();
        this.innerHTML = "<div class='modulo'>"+"</div>"
        //   this.className="modulo"
        this.style = "width:100px;height:100px;display:block;border:solid;"
        this.onclick = function(event) {
            ;event.stopImmediatePropagation();
        }
        //  this.onclick=function(event){alert("Modulo");event.preventDefault();}

        //    this.onclick=function(event){alert(this.getElementsByTagName("div")[0].className);}

    }
}
customElements.define("mod-div", PanelMod, {
    extends: "div"
});

//new LoadingIndicator(); // Uncaught TypeError: Illegal constructor
export {Panel, PanelApp, PanelMod}
