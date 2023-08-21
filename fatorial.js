function fatorial(n) {

    if (n <= 1) {
        return 1;
    }
        return n * fatorial(n - 1);
}
n = parseInt(prompt("informe n: "))
alert(fatorial(n))
