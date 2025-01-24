    const array_1 = ["uno", "dos", "tres"]

function Select_uno(array_1) {
    const browsers = ["cuatro", "cinco", "seis"]

    const element = document.createElement("select");
    //step 2
    Object.setPrototypeOf(element, Select_uno.prototype);
    //step 3
    element.size = "5"
    element.innerHTML = document.getElementsByTagName("datalist")[0].innerHTML
    element.onclick = function() {//   alert("Main_select - " + this.value)
    }
    $("option").click(function() {
        alert("Main_select - ")
    })

    this.onload = function(array_1) {
        this.Array_1 = array_1
        alert("load_select - " + Array_1[1])
         alert(array_1.length)
        //alert(Array_1[1])
        //this.list=array_1
        $("option").click(function() {
            alert("Main_select - " + this.innerHTML)
        })
    }
    return element;
}
Object.setPrototypeOf(Select_uno.prototype, HTMLSelectElement.prototype);
//step 1
let select_1 = Select_uno(array_1);
//or new Stack() if you prefer
document.body.append(select_1)
