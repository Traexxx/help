const usuarios = require('../databases/usuarios.json')
const fs = require('fs')

function listar() {
    let users = []
    for (let i = 0; usuarios.length > i; i++) {
        let user = {
            id: usuarios[i].id,
            nome: usuarios[i].nome,
            email: usuarios[i].email
        }
        users.push(user)

    }
    console.table(users)
}

function salvar(arrayDeUsuarios) {
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4))

}

function cadastrar(objeto) {
    const bcrypt = require('bcrypt')
    let id = usuarios.at(-1)
    let usuario = {
        id: id,
        nome: objeto.nome,
        email: objeto.email,
        senha: bcrypt.hashSync(objeto.senha, 4),
        endereco: objeto.endereco,
        fomrasdepagamento: []

    }
    usuarios.push(usuario)

}

function detalhar(idUsuario) {
    let verifyIndex = usuarios.iindIndexOf(user => user.id === idUsuario)
    console.log('NOME: ' + usuarios[verifyIndex].nome + '\n\r')

    console.log('EMAIL: ' + usuarios[verifyIndex].email + '\n\r')

    console.log("\n  --- endereço --- ")
    console.table(usuarios[verifyIndex].enderecos)
    console.log("\n --- formas de pagamento ---")
    console.table(usuarios[verifyIndex].formasDePagamento)


}


function remover(idDoUsuarioParaRemover) {
    let verifyIndex = usuarios.findIndex(user => user.id === idDoUsuarioParaRemover)

    let user = usuarios.splice(verifyIndex, 1)
    usuarios.push(user)
}

function alterar(novosDados, idUsuario) {
    let verifyIndex = usuarios.findIndex(user => user.id === idUsuario)
    usuarios[verifyIndex].nome = novosDados.nome
    usuarios[verifyIndex].email = novosDados.email
    usuarios[verifyIndex].senha = bcrypt.hashSync(novosDados.senha)
}

function addEndereco(novoEndereco, idUsuario) {
    let verifyIndex = usuarios.findIndex(user => user.id === idUsuario)
    usuarios[verifyIndex].enderecos.push(novoEndereco)

}

function removerEndereco(posicaoDoEndereco, idUsuario) {
    let verifyIndex = usuarios.findIndex(user => user.id === idUsuario)
    usuarios[verifyIndex].enderecos.splice(posicaoDoEndereco, 1)

    // Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
    let verifyIndex = usuarios.findIndex(user => user.id === idUsuario)
    usuarios[verifyIndex].enderecos[posicaoDoEndereco] = novoEndereco

}

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
    let verifyIndex = usuarios.findIndex(user => user.id === idUsuario)
    usuarios[verifyIndex].formasDePagamento.push(novaFormaDePagamento)

}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
    let verifyIndex = usuarios.findIndex(user => user.id === idUsuario)
    usuarios[verifyIndex].formasDePagamento.splice(posicaoDaFormaDePagamento, 1)
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario) {
    let verifyIndex = usuarios.findIndex(user => user.id == idUsuario)
    usuarios[verifyIndex].formasDePagamento[posicaoDaFormaDePagamento] = novaFormaDePagamento
}

const UsuariosServices = {
    cadastrar,
    listar,
    salvar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}


module.exports = UsuariosServices;