//** elementleri tanıtma */

let addButton = document.getElementById("liveToastBtn");
let textButton = document.getElementById("task");
let list = document.getElementById("list");
let removeButton = document.getElementById("liveToastBtn2")



addButton.addEventListener('click' , function(){
    let paragraph = document.createElement('li');
    list.appendChild(paragraph);
    paragraph.innerHTML = textButton.value;
    textButton.value = "";

    paragraph.addEventListener('click' , function(){
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick' , function(){
        paragraph.remove();
    })
    
    removeButton.addEventListener('click' , function(){
        list.remove();
    })

})