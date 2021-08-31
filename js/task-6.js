
let total = 0;

while (true) {
    let input = prompt('Write a number');
    if (input === null) break;
    total += Number(input);
    console.log(total);
}

