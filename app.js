function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Calculador de IMC');
//------------------------------------------------

// Variável de controle
let jaDefiniuAltura = false;
let jaDefiniuPeso = false;

// Variáveis
let peso;
let altura;
let IMC;

// Altura do usuário
function alturaUsuario() {
    if (jaDefiniuAltura) {
        alert('Você já definiu sua altura, se deseja definir novamente recarregue a página!');
        return;
    }
    altura = parseFloat(prompt('Qual é a sua altura? EX: 1.75'));
    console.log(altura);
    jaDefiniuAltura = true;
    return altura;
}

// Peso do usuário
function pesoUsuario() {
    if (jaDefiniuPeso) {
        alert('Você já definiu seu peso, se deseja definir novamente recarregue a página!');
        return;
    }
    peso = parseFloat(prompt('Quanto você pesa? EX: 75'));
    console.log(peso);
    jaDefiniuPeso = true;
    return peso;
}

// Cálculo do IMC - Níveis
function calcularIMC() {
    if (peso && altura) {
        IMC = peso / (altura * altura);
        alert(`Seu IMC é de: ${IMC.toFixed(1)}!`);
        if (IMC > 18.5 && IMC < 24.9) {
            alert('Seu IMC está no nível normal (18.5 a 24.9), parabéns!');
        } else if (IMC > 24.9 && IMC < 30) {
            alert('Seu IMC está no nível SOBREPESO, cuidado!');
        } else if (IMC > 29.9 && IMC < 35) {
            alert('Seu IMC está no nível OBESIDADE I, é preocupante!');
        } else if (IMC > 34.9 && IMC < 40) {
            alert('Seu IMC está no nível OBESIDADE II, é bem preocupante!');
        } else if (IMC < 18.5) {
            alert('Seu IMC está no nível MAGREZA, é preocupante!');
        } else {
            alert('Seu IMC está no nível OBESIDADE III, é extremamente preocupante!');
        }
    } else {
        alert("Por favor, defina o peso e a altura primeiro");
    }
}