function add(){
let num1 = document.getElementById('num1').value;
let num2 = document.getElementById('num2').value;
num1 = parseFloat(num1);
num2 = parseFloat(num2);
result = num1 + num2;
//return result;

document.getElementById('result').value = result;
};

// I need to make another solution for clearing fields because this one is impractical
function clr(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('result').value="";

};