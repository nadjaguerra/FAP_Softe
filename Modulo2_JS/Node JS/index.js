function fatorial(n) {

    if (n <= 1) {
        return 1;
    }
        return n * fatorial(n - 1);
}
n = 4
console.log(fatorial(n))