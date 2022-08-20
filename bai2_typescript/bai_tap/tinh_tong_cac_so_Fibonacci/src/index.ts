function fibonacci(n: number): number {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n: number = 5;
let sum = 0;
console.log("Dãy " + n + " số fibonacci đầu tiên là: ");

for (let i = 1; i <= n; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng dãy " + n + " số fibonacci đầu tiên là: " + sum);
