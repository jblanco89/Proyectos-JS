const btnsayhello = document.getElementById('btn-sayhello');
btnsayhello.addEventListener('click',sayhello);
function sayhello(){
    alert('Hello');   
}

const createBox = document.getElementById('createBox');
const container = document.getElementById('container-divs');
createBox.addEventListener('click',createBoxf);

 function createBoxf (){
    let box = document.createElement('div');
    container.appendChild(box);
    box.className = 'boxDOM';
    box.id = "newBoxes"
 }

const deleteBox = document.getElementById('deleteBox');
deleteBox.addEventListener('click', deleteBoxf);
function deleteBoxf(){
    let newboxes = document.getElementById('newBoxes');
    container.removeChild(newboxes);
}

const clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click',clearAllf);

function clearAllf(){
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
}
  

// some events to check
/*
- open
- keydown
- keypress	
- keyup
- click
- focus
- blur
- change
- onload
- mouseover
- mouseout
- resize
- submit

see more in https://www.w3schools.com/jsref/dom_obj_event.asp
https://developer.mozilla.org/en-US/docs/Web/Events

*/