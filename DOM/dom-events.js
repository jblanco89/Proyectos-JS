// launching "Hello" from alert event //

const btnsayhello = document.getElementById('btn-sayhello');
btnsayhello.addEventListener('click',sayhello);
function sayhello(){
    alert('Hello User');   
}
//-------------------------------------------------------- //


// Creating element inside de DOM (boxes) by clickin button

const createBox = document.getElementById('createBox');
const container = document.getElementById('container-divs');
createBox.addEventListener('click',createBoxf);

 function createBoxf (){
    let box = document.createElement('div');
    container.appendChild(box);
    box.className = 'boxDOM';
    box.id = "newBoxes"
 }
// ---------------------------------------------------- //

// deleting one box at once by clickin a button --- //

const deleteBox = document.getElementById('deleteBox');
deleteBox.addEventListener('click', deleteBoxf);
function deleteBoxf(){
    let newboxes = document.getElementById('newBoxes');
    container.removeChild(newboxes);
}
// --------------------------------------------------- //

// deleting all boxes in one click   //
const clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click',clearAllf);

function clearAllf(){
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
}
// --------------------------------------------------//


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