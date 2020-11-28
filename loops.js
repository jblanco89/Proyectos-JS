// Testing lopps in JS

// For loops

const months = ['January', 'February', 'March','April','May','Jun','July','Agost','September','October','November','December'];

// Method 1

for (let i = 0; i < months.length; i++) {
    document.write(i+1 + '.- '+ months[i]);
    document.write('</br>');
}

// Method 2

let i = 0;
for (const month in months) {
    document.write(i+1 + '.- '+ months[month]);
    document.write('</br>');
    i++;
}

// While loops

let j=0;
while (j <= 50 ) {
    console.log(j);
    j=j+1;
    //j++
}


let x = 101;
do {
    console.log(x);
    x++
} while (x<=100);