// testing break an continue


const names = ['Marnie', 'Jesus', 'Damian', 'Javier','Ainhoa','Samanta', 'Patricia'];

for (const name in names) {
    document.write(names[name] + '</br>');
    if (names[name] == 'Samanta') {
        break;  // loop broke in Samanta. Patricia was not shown
    }
}

for (const name2 in names) {
    if (names[name2] == 'Damian') {
        continue; // loop pass from Jesus to Javier. Ignoring Damian
    }
    console.log(names[name2]);
}