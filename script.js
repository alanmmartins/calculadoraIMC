// algoritmo

// CALCULAR IMC

// 1. Pegar os valores
// 2. Calcular o IMC
// 3. Gerar classficação de IMC
// 4. Organizar as informações
// 5. Salvar os dados na lista
// 6. Ler a lista com os dados
// 7. Renderizar o conteudo do html
// 8. Botão de limpar os registros


// função principal, o html só chama essa função
function calculaImc(event) {
    event.preventDefault()

    console.log("funciono!!!!!!!!!!!!");



    let dadosUsuario = pegarValores();


    let imc = calcular(dadosUsuario.altura, dadosUsuario.peso);


    

    console.log(classificarImc(imc));

}


//passo 1 - pegar valor

function pegarValores() {

    let nomeRecebido = document.getElementById("nome").value.trim()
    // trim corta o espaço vazio no começo e final do valor

    let alturaRecebido = parseFloat(document.getElementById("altura").value)

    let pesoRecebido = parseFloat(document.getElementById("peso").value)

    let dadosUsuario = {
        nome: nomeRecebido,
        altura: alturaRecebido,
        peso: pesoRecebido
    }


    console.log(dadosUsuario);

    return dadosUsuario;

}

//passo 1 - calcular

function calcular(altura, peso) {


    let imc = peso / (altura * altura)

    console.log(imc);

    return imc;

}


//passo 3 - classificar

function classificarImc(imc) {

    if (imc < 18.5) {

        return "FILEZINHO (abaixo do peso)"


    } else if (imc < 25) {

        return "Diliça"


    } else if (imc < 30) {

        return "ta top!"

    } else {

        return "oh la em casa!!!"

    }

}