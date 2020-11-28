// Testing some methods in Javascript 

// firstly I'll set some arrays

const names = ['Joseph', 'Gabriel', 'Harimar', 'María', 'Oriana','Pepe'];
const names2 = ['Marnie', 'Jesus', 'Damian', 'Javier','Ainhoa','Samanta', 'Patricia'];

// ----------- Length Method -----------

console.log(names.length);
alert(names2.length);

// ---------- Join Method --------------

const joining = names.join(' -  ');
const joining2 = names2.join(' ** ');

console.log(joining);
alert(joining2);

// ------ pop and push methods ------

// pop deletes last one element of array

const namesPop = names.pop();
console.log(names);

//push adds new element at the last space of array

const namesPush = names2.push('Luis');
console.log(names2);


// ---- Shift and unshift ----- -

// shift deletes first element of array

const namesShift = names2.shift();
console.log(names2);


// unshift adds element at first place in array

const namesUnshift = names.unshift('Manuel');
console.log(names);



// ------- Concat Method ---------

// concats two or more arrays

const allNames = names.concat(names2);
console.log(allNames);


// ----- Sort and reverse methods -----

// Sort method sorts alphabetically text within an array (does not apply for sorting numbers)

const nameSorted = names2.sort();
console.log(nameSorted);

// Reverse method does opposite of sort

const nameReverse = names.reverse();
console.log(nameReverse);

// ---- END OF METHODS LESSON ----