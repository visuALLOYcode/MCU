let rows = 10;

// output looks like pyramid , first row is 1, then 2 then 3, perfectly centered pyramid not leaning to any side stars should not be odd or even
for (let i = 1; i <= rows; i++) {
    let stars = '* '.repeat(i);
    let spaces = ' '.repeat(rows - i);
    console.log(spaces + stars);
}