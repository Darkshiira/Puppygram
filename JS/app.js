let menu = document.querySelector(".blurryswitchmenu");
let switches = document.querySelector("#switches");
let surrounding = document.querySelector("#surrounding");
let amountlikes1 = document.querySelector("#amountlikes1");
let amountlikes2 = document.querySelector("#amountlikes2");
let amountlikes3 = document.querySelector("#amountlikes3");
let amountlikes4 = document.querySelector("#amountlikes4");
let amountlikes5 = document.querySelector("#amountlikes5");
let checkboxlikes5 = document.querySelector ("#checkboxlikes5");
let checkboxlikes1 = document.querySelector ("#checkboxlikes1");
let checkboxlikes2 = document.querySelector ("#checkboxlikes2");
let checkboxlikes3 = document.querySelector ("#checkboxlikes3");
let checkboxlikes4 = document.querySelector ("#checkboxlikes4");
let comments1 = document.querySelector("#comments1");
let form1 = document.querySelector("#form1");
let post1 = document.querySelector("#post1");
let commentfield1 = document.querySelector("#commentfield1");
let comment1 = document.querySelector("#comment1");
let messagebox5 = document.querySelector("#messagebox5");
let messagebox1 = document.querySelector("#messagebox1");
let messagebox2 = document.querySelector("#messagebox2");
let messagebox3 = document.querySelector("#messagebox3");
let commentwindow = document.querySelector(".commentwindow");
let surrounding2 = document.querySelector("#surrounding2");
let surrounding3 = document.querySelector("#surrounding3");
let dotmenu = document.querySelector(".dotmenu");
let checkbox2 = document.querySelector(".checkbox2");
let articleimg = document.querySelector("#articleimg");
let puppy1 = document.querySelector("#puppy1");


let dogemoji = document.querySelector("#dogemoji");
let faceemoji = document.querySelector("#faceemoji");
let blindemoji = document.querySelector("#blindemoji");
let serviceemoji = document.querySelector("#serviceemoji");
let poodleemoji = document.querySelector("#poodleemoji");
let boneemoji = document.querySelector("#boneemoji");
let poopemoji = document.querySelector("#poopemoji");




switches.addEventListener("click", e =>{
    e.preventDefault();
    menu.style.visibility = "visible";
    surrounding.style.visibility ="visible";
    
});

surrounding.addEventListener("click", e =>{
    e.preventDefault();
    menu.style.visibility = "hidden";
    surrounding.style.visibility ="hidden";
});

checkboxlikes5.addEventListener("change", e =>{
    e.preventDefault();
    if (checkboxlikes5.checked){
        amountlikes1.innerHTML = "1 likes";;
    }
    else {
   amountlikes1.innerText = " likes";
}});

checkboxlikes1.addEventListener("change", e =>{
    e.preventDefault();
    if (checkboxlikes1.checked){
      amountlikes2.innerHTML = "1 likes";;
    }
     else {
    amountlikes2.innerText = " likes";
 }}); 

checkboxlikes2.addEventListener("change", e =>{
    e.preventDefault();
     if (checkboxlikes2.checked){
         amountlikes3.innerHTML = "1 likes";;
    }
    else {
     amountlikes3.innerText = " likes";
}}); 

checkboxlikes3.addEventListener("change", e =>{
    e.preventDefault();
    if (checkboxlikes3.checked){
        amountlikes4.innerHTML = "1 likes";;
    }
    else {
        amountlikes4.innerText = " likes";
}}); 

// checkboxlikes4.addEventListener("change", e =>{
//     e.preventDefault();
//     if (checkboxlikes4.checked){
//          amountlikes5.innerHTML = "1 likes";;
//     }
//     else {
//         amountlikes5.innerText = " likes";
// }}); 

messagebox5.addEventListener("click", e =>{
    e.preventDefault();
    commentwindow.style.visibility = "visible";
    surrounding2.style.visibility ="visible";
    articleimg.innerHTML = "<img src = `url:https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`></img>";
});

messagebox1.addEventListener("click", e =>{
    e.preventDefault();
    commentwindow.style.visibility = "visible";
    surrounding2.style.visibility ="visible";
});

messagebox2.addEventListener("click", e =>{
    e.preventDefault();
    commentwindow.style.visibility = "visible";
    surrounding2.style.visibility ="visible";
});

messagebox3.addEventListener("click", e =>{
    e.preventDefault();
    commentwindow.style.visibility = "visible";
    surrounding2.style.visibility ="visible";
});

surrounding2.addEventListener("click", e =>{
    e.preventDefault();
    commentwindow.style.visibility = "hidden";
    surrounding2.style.visibility ="hidden";
});

form1.addEventListener("submit", e =>{
e.preventDefault();
let h6 = document.createElement("h6");
comment.appendChild(h6);
h6.textContent = commentfield1.value;
form1.reset();
});

dogemoji.addEventListener("click", e =>{
    e.preventDefault();
    commentfield1.value +=  "🐕";
   
});

faceemoji.addEventListener("click", e =>{
    e.preventDefault();
    commentfield1.value +=  "🐶";
   
});

blindemoji.addEventListener("click", e =>{
    e.preventDefault();
    commentfield1.value +=  "🦮";  
});

serviceemoji.addEventListener("click", e =>{
    e.preventDefault();
    commentfield1.value +=  "🐕‍🦺";  
});

poodleemoji.addEventListener("click", e =>{
    e.preventDefault();
    commentfield1.value +=  "🐩";  
});

boneemoji.addEventListener("click", e =>{
    e.preventDefault();
    commentfield1.value +=  "🦴";  
});

poopemoji.addEventListener("click", e =>{
    e.preventDefault();
    commentfield1.value +=  "💩";  
});

checkbox2.addEventListener("click", e => {
    surrounding3.style.visibility = "visible";
});

surrounding3.addEventListener("click", e =>{
    e.preventDefault();
    surrounding3.style.visibility ="hidden";
});