const esseSoma = (numero1, numero2) => {
    console.log("A soma do número", numero1, "com o número", numero2, "é igual a =", numero1 + numero2)
}

esseSoma(3,5)

const verdadeiroOuFalso = (numero1, numero2) => {
    console.log("O número", numero1, "é maior que o número", numero2, "?", numero1 >= numero2)
}

verdadeiroOuFalso(8,6)

const parOuImpar = (numero1) => {
    const verificarPar = numero1 % 2
    console.log("O número", numero1, "é par?", verificarPar === 0)
}

parOuImpar(2)
parOuImpar(3)

const salario = (salarioBruto) => {
    const salarioLiquido = salarioBruto * 0.9
    return salarioLiquido
}

console.log("Seu salário liquido é", salario(5000))