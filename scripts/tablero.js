function crear_tablero() {
    //Tablero 2
    alert("tablero")
    document.getElementById("panel_central").innerHTML=""
    crea_elemento("panel_central", "div", "tablero2", " rounded-3 border border-5 m-0 w-100  h-100 d-flex flex-column items-stretch  justify-content-evenly gap-0 p-0", "")
    panel_destino.innerHTML+= texto_final
    //Lineas
    for (let j = 1; j < 4; j++) {
        crea_elemento("tablero2", "div", "tablero_linea_" + j, "tablero-linea border rounded h-100 d-flex flex-row items-stretch  justify-content-evenly m-0 gap-0 p-0", "")
        panel_destino.innerHTML += texto_final
        //Cuadros
        for (let i = 1; i < 4; i++) {
            crea_elemento("tablero_linea_" + j, "div", "tablero_linea_" + j + "_cuadro_" + i, "linea-cuadro border rounded-3 w-100 h-100 p-0 d-flex justify-content-evenly gap-0", "")
            panel_destino.innerHTML += texto_final
        }
    }
    //casa rojas
    crea_elemento("tablero_linea_1_cuadro_1", "div", "tablero_linea_1_cuadro_1_log", "border-0 bg-danger d-flex w-100 rounded-3 p-2 ", "")
    panel_destino.innerHTML += texto_final
    var contador_01 = 1
    for (let l = 1; l < 3; l++) {
        crea_elemento("tablero_linea_1_cuadro_1_log", "div", "tablero_linea_1_cuadro_1_" + l, "border-0 text-white d-flex flex-column w-100 gap-1 p-2", "")
        panel_destino.innerHTML += texto_final

        for (let m = 1; m < 3; m++) {
            //crea_elemento("tablero_linea_1_cuadro_1_" + l, "div", "tablero_linea_1_cuadro_1_" + l, "celda border rounded-5 text-white w-100 h-100", l + "-" + m)

            crea_elemento("tablero_linea_1_cuadro_1_" + l, "div", "danger_casa_" + contador_01, "celda celda-casa border rounded-5 text-danger w-100 h-100 gap-4", 34)

            panel_destino.innerHTML += texto_final
            contador_01 += 1
        }
    }
    //casa azules
    crea_elemento("tablero_linea_1_cuadro_3", "div", "tablero_linea_1_cuadro_3_log", "border-0 bg-primary bg-gradient d-flex w-100 rounded-3 p-2", "")
    panel_destino.innerHTML += texto_final
    var contador_01 = 1
    for (let l = 1; l < 3; l++) {
        crea_elemento("tablero_linea_1_cuadro_3_log", "div", "tablero_linea_1_cuadro_3_" + l, "border-0 text-white d-flex flex-column w-100 gap-1 p-2", "")
        panel_destino.innerHTML += texto_final

        for (let m = 1; m < 3; m++) {
            crea_elemento("tablero_linea_1_cuadro_3_" + l, "div", "primary_casa_" + contador_01, "celda celda-casa border border-outset border-3 rounded-5 text-white w-100 h-100 gap-4", 17)// l + "-" + m)
            panel_destino.innerHTML += texto_final
            contador_01 += 1

        }
    }
    //casa verdes
    crea_elemento("tablero_linea_3_cuadro_1", "div", "tablero_linea_3_cuadro_1_log", "border-0 bg-success bg-gradient d-flex w-100 rounded-3 p-2 ", "")
    panel_destino.innerHTML += texto_final
    contador_01 = 1
    for (let l = 1; l < 3; l++) {
        crea_elemento("tablero_linea_3_cuadro_1_log", "div", "tablero_linea_3_cuadro_1_" + l, "border-0 text-white d-flex flex-column w-100 gap-1 p-2", "")
        panel_destino.innerHTML += texto_final

        for (let m = 1; m < 3; m++) {
            crea_elemento("tablero_linea_3_cuadro_1_" + l, "div", "success_casa_" + contador_01, "celda celda-casa border rounded-5 text-success w-100 h-100 text-center gap-4", 51)
            panel_destino.innerHTML += texto_final
            contador_01 += 1
        }
    }
    //casa amarillas
    crea_elemento("tablero_linea_3_cuadro_3", "div", "tablero_linea_3_cuadro_3_log", "border-0 bg-warning bg-gradient d-flex w-100 rounded-3 p-2", "")
    panel_destino.innerHTML += texto_final
    var contador_01 = 1
    for (let l = 1; l < 3; l++) {
        crea_elemento("tablero_linea_3_cuadro_3_log", "div", "tablero_linea_3_cuadro_3_" + l, "border-0 text-white d-flex flex-column w-100 gap-1 p-2", "")
        panel_destino.innerHTML += texto_final

        for (let m = 1; m < 3; m++) {
            crea_elemento("tablero_linea_3_cuadro_3_" + l, "div", "warning_casa_" + contador_01, "celda celda-casa border rounded-5 text-white w-100 h-100 text-center gap-4", 0)
            panel_destino.innerHTML += texto_final
            contador_01 += 1

        }
    }
    //casillas 1-1
    for (let b = 1; b < 4; b++) {
        crea_elemento("tablero_linea_1_cuadro_2", "div", "tablero_linea_1_cuadro_2_casillas_" + b, "border-0 w-100 h-100 d-flex flex-column", "")
        panel_destino.innerHTML += texto_final

        for (let c = 1; c < 8; c++) {
            crea_elemento("tablero_linea_1_cuadro_2_casillas_" + b, "div", "", "celda border w-100 h-100 ", "")
            panel_destino.innerHTML += texto_final

        }

    }
    document.getElementById("tablero_linea_1_cuadro_2_casillas_2").innerHTML = "<div class='bg-danger h-100 d-flex flex-column'>" + document.getElementById("tablero_linea_1_cuadro_2_casillas_2").innerHTML + "</div>"
    //casillas 3-1
    for (let b1 = 1; b1 < 4; b1++) {
        crea_elemento("tablero_linea_3_cuadro_2", "div", "tablero_linea_3_cuadro_2_casillas_" + b1, "border-0 w-100 h-100 d-flex flex-column", "")
        panel_destino.innerHTML += texto_final

        for (let c = 1; c < 8; c++) {
            crea_elemento("tablero_linea_3_cuadro_2_casillas_" + b1, "div", "", "celda border w-100 h-100 p-0 m-0  ", "")
            panel_destino.innerHTML += texto_final

        }
        // b1+=1
    }
    document.getElementById("tablero_linea_3_cuadro_2_casillas_2").innerHTML = "<div class='bg-warning h-100 d-flex flex-column'>" + document.getElementById("tablero_linea_3_cuadro_2_casillas_2").innerHTML + "</div>"
    //casillas 2-1
    document.getElementById("tablero_linea_2_cuadro_1").innerHTML = "<div id='tablero_linea_2_cuadro_1_log' class='d-flex flex-column w-100'>" + document.getElementById("tablero_linea_2_cuadro_1").innerHTML + "</div>"
    for (let b = 1; b < 4; b++) {
        crea_elemento("tablero_linea_2_cuadro_1_log", "div", "tablero_linea_2_cuadro_1_casillas_" + b, "border-0 w-100 h-100 d-flex ", "")
        panel_destino.innerHTML += texto_final
        // document.getElementById("tablero_linea_2_cuadro_1").innerHTML="<div class='d-flex flex-column'>"+     document.getElementById("tablero_linea_2_cuadro_1").innerHTML+"</div>"
        for (let s = 1; s < 8; s++) {
            crea_elemento("tablero_linea_2_cuadro_1_casillas_" + b, "div", "", "celda border w-100 h-100 p-0 m-0  ", "")
            panel_destino.innerHTML += texto_final
        }
    }
    document.getElementById("tablero_linea_2_cuadro_1_casillas_2").innerHTML = "<div class='bg-success d-flex w-100'>" + document.getElementById("tablero_linea_2_cuadro_1_casillas_2").innerHTML + "</div>"
    //casillas 2-3
    document.getElementById("tablero_linea_2_cuadro_3").innerHTML = "<div id='tablero_linea_2_cuadro_3_log' class='d-flex flex-column w-100'>" + document.getElementById("tablero_linea_2_cuadro_3").innerHTML + "</div>"
    for (let d = 1; d < 4; d++) {
        crea_elemento("tablero_linea_2_cuadro_3_log", "div", "tablero_linea_2_cuadro_3_casillas_" + d, "border-0 w-100 h-100 d-flex ", "")
        panel_destino.innerHTML += texto_final
        // document.getElementById("tablero_linea_2_cuadro_1").innerHTML="<div class='d-flex flex-column'>"+     document.getElementById("tablero_linea_2_cuadro_1").innerHTML+"</div>"
        for (let w = 1; w < 8; w++) {
            crea_elemento("tablero_linea_2_cuadro_3_casillas_" + d, "div", "", "celda border w-100 h-100 p-0 m-0  ", "")
            panel_destino.innerHTML += texto_final
        }
    }
    document.getElementById("tablero_linea_2_cuadro_3_casillas_2").innerHTML = "<div class='bg-primary d-flex w-100'>" + document.getElementById("tablero_linea_2_cuadro_3_casillas_2").innerHTML + "</div>"
    //centro
    document.getElementById("tablero_linea_2_cuadro_2").innerHTML = "<div id='centro_log' class='border-0 d-flex flex-column w-100'>" + document.getElementById("tablero_linea_2_cuadro_2").innerHTML + "</div>"
    for (let f = 1; f < 4; f++) {
        crea_elemento("centro_log", "div", "centro_casillas_" + f, "border-0 w-100 h-100 d-flex ", "")
        panel_destino.innerHTML += texto_final

        for (let o = 1; o < 4; o++) {
            crea_elemento("centro_casillas_" + f, "div", "centro_casillas_" + f + "_" + o, "border w-100 h-100 d-flex flex-column", "")
            panel_destino.innerHTML += texto_final

            for (let p = 1; p < 3; p++) {
                crea_elemento("centro_casillas_" + f + "_" + o, "div", "centro_casillas_" + f + "_" + o + "_" + p, "border-0 w-100 h-100 d-flex  ", "")
                panel_destino.innerHTML += texto_final
            }
        }

    }
}
function crea_elemento(destino_id, tag_local, id_local, class_local, innerHTML_local) {
    contador_tags = document.body.getElementsByTagName("*").length
    texto_final = ""
    panel_destino = document.getElementById(destino_id)

    texto_final += "<"
    texto_final += tag_local
    texto_final += " id='"
    texto_final += id_local
    texto_final += "'"
    texto_final += " class='"
    texto_final += class_local
    texto_final += "'"
    texto_final += "> "
    texto_final += innerHTML_local
    texto_final += "</"
    texto_final += tag_local
    texto_final += ">"

}

