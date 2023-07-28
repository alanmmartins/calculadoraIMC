

























































































































//6 ler a la lista

function carregarUsuarios() {

    let listaUsuarios = [];
    
    if (localStorage.getItem('usuariosCadastrados')) {
        listaUsuarios = JSON.parse(localStorage.getItem('usuariosCadastrados'));
    }

    if (listaUsuarios.length == 0) {
        let tabela = document.getElementById("corpo-tabela");

        tabela.innerHTML = `<tr class="linha-mensagem" >
        <td colspan="6" >nenhum usuario cadastrado!</td>
    </tr>`

    } else {
        montarTabela = (listaUsuarios);
    }
    console.log(listaUsuarios);
}
window.addEventListener('DOMContentLoaded', () => carregarUsuarios());

//passo 7 montar tabela
function montarTabela(listaDeCadastrados) {
    let tabela = document.getElementById('corpo-tabela');
    let template = '';

    console.log(listaDeCadastrados);

    listaDeCadastrados.forEach(pessoa => {
        template += `<tr>
        <td data-cell="nome">${pessoa.nome}</td>
        <td data-cell="altura">${pessoa.altura}</td>
        <td data-cell="peso">${pessoa.peso}</td>
        <td data-cell="valor do IMC">${pessoa.imc}</td>
        <td data-cell="classificação do IMC">${pessoa.classificacao}</td>
        <td data-cell="data de cadastro">${pessoa.dataCadastro}</td>
    </tr>`

    });

    tabela.innerHTML = template;
}
//8 deletar
function deletarRegistros() {
    localStorage.removeItem('usuariosCadastrados');
    window.location.reload();

}