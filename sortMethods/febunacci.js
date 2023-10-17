
let fibonacci = [];

let a = 0, b = 1;
let i = 0;
while (i < 10) {
    fibonacci.push(a);
    [a, b] = [b, a + b];
    i++;
}

console.log(fibonacci);