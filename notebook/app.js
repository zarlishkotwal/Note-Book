
 AOS.init();

const mainBox = document.getElementById("mainBox");
let addItem = () => {
    var titleInp = document.getElementById("titleInp");
    var textInp = document.getElementById("textInp");

    if (titleInp.value.length > 2 && textInp.value.length > 2) {
        const box = document.createElement("div");
        box.setAttribute("class", "myBox animate__animated animate__backInUp");
        box.setAttribute("data-aos", "fade-up")
        const section = document.createElement("section");
        section.setAttribute("class", "list");
        box.appendChild(section);
        const h4 = document.createElement("h4");
        let h4Text = document.createTextNode(titleInp.value);
        h4.appendChild(h4Text);
        section.appendChild(h4);
        const para = document.createElement("p");
        let paraText = document.createTextNode(textInp.value);
        para.appendChild(paraText);
        section.appendChild(para);
        section.setAttribute("data-aos", "fade-up")  
        const h6 = document.createElement("h6");
        h6.innerHTML = "<i onclick='dlt(this)' class='fas fa-minus-circle'></i><i onclick='edit(this)' class='fas fa-edit'></i>";
        section.appendChild(h6);
        mainBox.appendChild(box);
        textInp.value = "";
        titleInp.value = "";
    } else {
        alert(" Please Enter value ...!")
    }
}


let dltAll = () => {
    mainBox.innerHTML = "";
}
let dlt = e => {
   
    e.parentNode.parentNode.parentNode.remove();
}
let edit = e => {
   
    let val = e.parentNode.parentNode.firstChild.innerHTML;
    let editTitle = prompt("Edit Title ", val);
    e.parentNode.parentNode.firstChild.innerHTML = editTitle;
    let val2 = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    let editText = prompt("Edit Text ", val2);
    e.parentNode.parentNode.firstChild.nextSibling.innerHTML = editText;


}