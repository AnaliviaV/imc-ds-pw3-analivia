let btn = document.getElementById('btn')
let div = document.getElementById('resultado')
let arrPessoa = []

function cadastrar() {
    //códigos
    let nomeInput = document.getElementById('nome').value
    let sobrenomeInput = document.getElementById('sobrenome').value
    let categoriaInput = document.getElementById('categoria').value
    let pesoInput = document.getElementById('peso').value
    let alturaInput = document.getElementById('altura').value
    //-----------------------------------------------------------------------------------


    const pessoa = {

        nome: nomeInput,
        sobrenome: sobrenomeInput,
        categoria: categoriaInput,
        peso: pesoInput,
        altura: alturaInput,
        imc: IMC(pesoInput, alturaInput),
        categoriaIMC: categoriaIMC(IMC(pesoInput, alturaInput)),

    }
    arrPessoa.push(pessoa)
    imprimir()
    console.log(arrPessoa);
}

function IMC(peso, altura) {
    //calcular imc
    return peso / Math.pow(altura, 2)
}

function categoriaIMC(imc) {
    //calcular a categoria do imc
    if (imc <= 18.5) {
        return 'Abaixo do normal'
    } else if (imc <= 24.9) {
        return 'Normal'
    } else if (imc <= 29.9) {
        return 'Sobrepeso'
    } else if (imc <= 34.9) {
        return 'Obesidade Grau 1'
    } else if (imc <= 39) {
        return 'Obesidade grau 2'
    } else {
        return 'Obesidade grau 3'
    }
}

function imprimir() {
    div.innerHTML = ''

    for (let i = 0; i < arrPessoa.length; i++) {
    console.log('IMPRIMIR')

        div.innerHTML += `
      <tr>
         <th scope="row">${i + 1}</th>
         <td> ${arrPessoa[i].nome}${arrPessoa[i].sobrenome}</td>
         <td> ${arrPessoa[i].peso}</td>
         <td> ${arrPessoa[i].altura}</td>
         <td> ${arrPessoa[i].imc} - ${arrPessoa[i].categoria}</td>

         
      </tr>

`
    }
}


btn.addEventListener('click', cadastrar)