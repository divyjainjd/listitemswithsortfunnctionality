const courses = [
    {
        name:"Complete React Js course",
        price: "2.3"
    },
    {
        name:"Complete Angullar Js course",
        price: "2.1"
    },
    {
        name:"Complete Mern course",
        price: "2.7"
    },
    {
        name:"Complete C++  course",
        price: "2.8"
    }
];
// we are accessing this array through for each loop,it accepts the value as a callback.
function  generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course =>{
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);

    });
}

window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn");

button.addEventListener("click",() => {
    courses.sort( (a,b) => a.price - b.price );
    generateLIST();
});