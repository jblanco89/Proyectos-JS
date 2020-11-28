//----------- DOM INTRODUCTION ------------

const boxes = document.getElementsByTagName('div');
boxes[1].innerHTML = "<p>DOM Introduction</p>";
boxes[2].innerHTML = "<button>Submit</button>";
boxes[3].innerHTML = "<h3>Good Bye</h3>";

// ----------------------------------------

const box1 = document.getElementById('box1');
box1.innerHTML = '<u> Hello 2 </u>';

//-----------------------------------------

// ---- Creating Nodes for JavaScript -----

const OrangeBox = document.createElement('div');

// ---- Creating text for nodes ------

const OrangeContent = document.createTextNode("New Block");

// ---- Adding text content to created node ------

OrangeBox.appendChild(OrangeContent);
// ---- performing attributes for new node ------

OrangeBox.setAttribute('class', 'box orange');
OrangeBox.setAttribute('id', 'box5');

// ------ Adding new element to DOM -------

const container = document.getElementById('container');
container.appendChild(OrangeBox);

// ----- Creating another block (node in red) ------

const RedBox = document.createElement('div');
const RedContent = document.createTextNode("New Block in Red");
RedBox.appendChild(RedContent);
RedBox.setAttribute('class', 'box red');
RedBox.setAttribute('id', 'box6');
container.appendChild(RedBox);

// ---- Adding new node and setting in position -----

const GreenBox = document.createElement('div');
const GreentContent = document.createTextNode('New Block in Green');
GreenBox.appendChild(GreentContent);
GreenBox.id = "box6"; // This is another way to set attributes in JS
GreenBox.className = "box green";

// ---- Finding out the parent element -----

const parentSection = box1.parentNode;
parentSection.insertBefore(GreenBox, boxes[1]);

// ---- Replacing existint blocks ----

parentSection.replaceChild(RedBox,boxes[3]);

// ---- Removing block (node) ------

parentSection.removeChild(box[4]);