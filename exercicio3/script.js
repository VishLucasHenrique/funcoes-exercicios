const adicao = (numero1, numero2) => {
    const soma = numero1 + numero2
    return soma
}

const subtracao = (numero1, numero2) => {
    const deducao = numero1 - numero2
    return deducao
}

const multiplicacao = (numero1, numero2) => {
    const vezes = numero1 * numero2
    return vezes
}

const divisao = (numero1, numero2) => {
    const partes = numero1 / numero2
    return partes
}

const numero1DoUsuario = prompt("Insira um número")
const numero2DoUsuario = prompt("Insira o segundo número")

const nossoNumero1 = Number(numero1DoUsuario)
const nossoNumero2 = Number(numero2DoUsuario)

adicao(nossoNumero1, nossoNumero2)
subtracao(nossoNumero1, nossoNumero2)
multiplicacao(nossoNumero1, nossoNumero2)
divisao(nossoNumero1, nossoNumero2)

// Não consigo ver a necessidade de chamar a função, passando paramêtros, e depois guarda-la em uma variável, uma vez que após chamada, se eu a guardo na variável sem os paramêtros ele retorna como NaN;
// Exemplo: const adicaoFinal = adicao() - O console.log disso retorna "NaN";
// Desta forma seria mais prático chama-la direto dentro da constante, sendo assim desconsiderando as linhas 27 até 30 que não estão fazendo nada no código.

const adicaoFinal = adicao(nossoNumero1, nossoNumero2)
console.log("A adição dos números", nossoNumero1, "e", nossoNumero2, "é igual a", adicaoFinal)
const subtracaoFinal = subtracao(nossoNumero1, nossoNumero2)
console.log("A subtração dos números", nossoNumero1, "e", nossoNumero2, "é igual a", subtracaoFinal)
const multiplicacaoFinal = multiplicacao(nossoNumero1, nossoNumero2)
console.log("A multiplicação dos números", nossoNumero1, "e", nossoNumero2, "é igual a", multiplicacaoFinal)
const divisaoFinal = divisao(nossoNumero1, nossoNumero2)
console.log("A divisão dos números", nossoNumero1, "e", nossoNumero2, "é igual a", divisaoFinal)
