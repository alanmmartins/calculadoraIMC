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
    let classificacaoImc = classificarImc(imc);

    let dadosUsuarioAtualizado =  organizarDados(dadosUsuario,imc,classificacaoImc );
    cadastrarUsuario(dadosUsuarioAtualizado);

 

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
//passo 4 -organizar informacion

function organizarDados(dadosUsuario,valorImc,classificacaoImc) {
    let dataHoraAtual = Intl.DateTimeFormat('pt-BR',{timeStyle: 'long',dateStyle: 'short'}).format(Date.now())

    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        imc:valorImc.toFixed(2),
        classificacao : classificacaoImc,
        dataCadastro : dataHoraAtual
    }
    console.log( dadosUsuarioAtualizado);

    return dadosUsuarioAtualizado;
}

//passo 5 -Salvar os dados na lista
function cadastrarUsuario(usuario) {
    let listaUsuarios = [];
    if (localStorage.getItem('usuariosCadastrados')) {
        listaUsuarios = JSON.parse(localStorage.getItem('usuariosCadastrados'));
    }

    listaUsuarios.push(usuario);
    localStorage.setItem("usuariosCadastrados",JSON.stringify(listaUsuarios));

    
}