class Stack {

  get length() {
    return this.top;
  };

  get peek() {
    return this.data[this.top - 1];
  }

  get isEmpty() {
    return this.top === 0;
  }

  constructor() {
    this.data = [];
    this.top = 0;
  }
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  pop() {
    if (this.isEmpty) return;

    this.top = this.top - 1;
    return this.data.pop(); // removes the last element
  }

  print() {
    let top = this.top - 1; // because top points to index where new element to be inserted

    while (top >= 0) { // print upto 0th index
      console.log(this.data[top]);
      top--;
    }
  }
}



const stack = new Stack();
stack.config=[];
stack.push("A");
stack.push("B");
stack.push("C");
stack.__proto__.protoProp = 'value';
console.log("===== Before pop =====");

stack.print();

stack.pop();

console.log("===== After pop =====");
//************************************
stack.print();
for (const key in stack) {
    const value = stack[key];

    // The hasOwnProperty() method returns a boolean indicating whether
    // the object has the specified property as its own property (as opposed to inheriting it).
    if (Object.hasOwnProperty.call(stack, key)) {
        console.log('An own property: ', `${key} - ${value}`);
    } else {
        console.log('No an own property', `${key} - ${value}`);
    }
}
//*************************************
function checkCondition(value, callback) {
  if (value >= 0) {
    callback('value >= 0');
  } else {
    callback('value < 0');
  }
}

const log = (msg) => console.log(msg);

function volver(params) {
  //alert( "valor: "+ params)
}

checkCondition(1, log); // value >= 0
checkCondition(0, log); // value >= 0
checkCondition(-1, log); // value < 0
checkCondition(-1, volver); // value < 0


//// Promise
function time(number) {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      setTimeout(() => {
        resolve(`${number} sec`)
      }, number * 1000)
    } else {
      reject('Error: number <= 0');
    }
  })
}
/*
time(prompt())
  .then(msg => {
    console.log(msg); // 1 sec
  })
  .catch(msg => {
    console.log(msg); // Error: number <= 0
  })


time(-2)
  .catch(msg => {
    console.log(msg); // Error: number <= 0
  })
  */

///****************Async

async function lsExample() {
  const { stdout, stderr } = await time(1);

  console.log("stdout:", stdout);
 // console.error("stderr:", stderr);
}


lsExample();

///*********************Set
const set = new Set();

// value is any types
set
  .add(["numero",'1'])  // string
  .add(1)    // number
  .add(true) // boolean
  .add({ k: 1 }); // object


set.forEach(value => console.log(value));

console.log(set.size); // 4

set.add(1); // we try to add exist element

console.log(set.size); // 4

console.log("1-",set.has(1)); // true
console.log("2-", set.has(2)); // false
console.log("3-", set.has(true)); // true
console.log("4-", set.has(false)); // false



set.delete(1);
//set.delete(2);

// clear set
//set.clear();
