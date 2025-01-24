var objeto_1

//objeto_1.innerHTML ="<div>45678</div>"
function Stack() {
    const element = document.createElement("div");
    //step 2
    Object.setPrototypeOf(element, Stack.prototype);
    //step 3
    element.setAttribute("name", "pepe")
    element.onclick = function() {
        alert("Main - " + this.innerHTML)
    }
    this.onload = function() {
        alert("load - " + element.innerHTML)
    }
    return element;
}

Object.setPrototypeOf(Stack.prototype, HTMLDivElement.prototype);//step 1
let stack1 = Stack();
//or new Stack() if you prefer
stack1.innerHTML = "222"
document.body.append(stack1)
stack1.onclick = function() {
    alert("Stack - " + this.innerHTML)
}
//   stack1.onload=function(){
//  alert("load1 - "+this.innerHTML)
//}

let stack2 = Stack();
//or new Stack() if you prefer
stack2.innerHTML = "22233333"
stack1.append(stack2)
