// testing conditionals in JS

const age = 20;

if (age >= 18) {

    console.log('you are an adult');
    
}else {
    console.log('your are under-age')
}

// Using Switch
const country = 'Costa Rica';

switch (country) {
    case 'Mexico':
        document.write('You are mexican');
        break;
    case 'Spain':
        document.write('You are spanish');
        break;
    case 'United States':
        document.write('You are american');
        break;
    default:
        document.write('Sorry but we do not know where you are!');
        break;
}