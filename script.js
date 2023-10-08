    console.log("Hello again")

    const list = [1, 2, 3, 4, 5]

    list.push(7);
    list.pop()

    const reversed = list.reverse();
    console.log(reversed, "REVERSED")

    const sorted = list.sort();
    console.log(sorted, "SORTED");

    const fused = list.concat(reversed);
    console.log(fused, "CONCATENATED");

    console.log(list.includes(3), "CHECK IF 3 IS IN THE LIST");
    console.log(list.indexOf(3), "GET INDEX OF 3 IN THE LIST");
    console.log(list.slice(0, 15), "SLICE FIRST 15 VALUES");
    console.log(list, "DELETE RANGE AND ADD NEW VALUES");

    // loop

    list.forEach(function (item) {
        console.log(item, "from for Each");
    });

    const mapped = list.map(function (item) {
        return item + 3;
    });

    // Object methods

    const teacher = {};

    const student = {
        firstName: "John",
        lastName: "Doe",
    };

    console.log(student.firstName);
    console.log(student.lastName);
    listOfKeys = ["firstName", "lastName"];

    listOfKeys.forEach((value) => console.log(student[value]));

    student.firstName = "Jane";
    student.character = "Wild";
    console.log(student);

    // functions

    // step 1 
    function add(a, b) {
        return a+b;
    }

    // step 2 weird but works

    const add2 = function (a,b) {
        return a+b;
    }

    // step 3 the modern day

    const add3 = (a,b) => a+b;

    // Selectors 
    let element = document.getElementById("header");
    console.log(element);

    let paragraph = document.getElementsByClassName("text");
    console.log(paragraph);

    let tag = document.getElementsByTagName("body");

    let selector = document.querySelectorAll(".text");
    console.log(selector);

    let box = document.querySelector("#container");

    // CREATE / APPEND

    const newTextNode = document.createElement("span");
    newTextNode.innerText = "Hello Worlds from JS!";

    box.appendChild(newTextNode);


// Events 

const showMessage = () => {
    element.classList.add("color");
};