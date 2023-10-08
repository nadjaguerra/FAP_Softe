const calculadoraMedia = {
  notas: [],
  excecaoOcorreu: false,
  calcularMedia: function() {
    let soma = 0;

    for (let i = 0; i <= 2; i++) {
      try {
        let nota = parseFloat(prompt(`Informe a ${i + 1}ª nota: `));
        if (isNaN(nota)) {
          throw new Error('Informe apenas números.');
        }
        soma += nota;
      } catch (error) {
        console.error(error.message);
        i--;
        this.excecaoOcorreu = true;
      } finally {
        if (!this.excecaoOcorreu) {
          console.log(`
          Nota adicionada.
          `);
        }
      }
    }
    return soma / 3;
  }
};

const mediaCalculada = calculadoraMedia.calcularMedia();
console.log(`------------------------
A média do aluno é ${mediaCalculada.toFixed(2)}`);
