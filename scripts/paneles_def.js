var color_bg = [" bg-warning", " bg-success", " bg-primary", " bg-danger", " bg-secondary", " bg-warning", " bg-success", " bg-primary", " bg-danger", " bg-secondary"]

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
    panel.setAttribute("max-style", "top:0;left:0;width:-webkit-fill-available;;height:-webkit-fill-available;;z-index:20;position:absolute !important")
    panel.setAttribute("old-style", "")
    panel.className = "contenedor"
    panel.className += color_bg[document.getElementsByClassName("contenedor").length]
    // panel.innerHTML = "<div class='border-0 border-black m-2 p-0 " + clase2 + "'><div class='border border-black d-flex gap-2 p-1'><div class='border border-black bg-primary ps-2 pe-2'>" + clase2 + "</div></div></div>"
    Object.setPrototypeOf(panel, panel_contenedor.prototype);

    return panel;

};
Object.setPrototypeOf(panel_contenedor.prototype, HTMLDivElement.prototype);

function panel_aplicacion2(val_template) {
    const panel = document.createElement("div");
    panel.ondblclick = function (event) {


    }
    panel.innerHTML = document.getElementsByTagName("template")[val_template].innerHTML
    panel.className = "aplicacion bg-white"

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


    Object.setPrototypeOf(panel, panel_aplicacion2.prototype);

    return panel;

};
Object.setPrototypeOf(panel_aplicacion2.prototype, HTMLDivElement.prototype);

function panel_modulo2(val_template) {
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
    Object.setPrototypeOf(panel, panel_modulo2.prototype);

    return panel;

};
Object.setPrototypeOf(panel_modulo2.prototype, HTMLDivElement.prototype);