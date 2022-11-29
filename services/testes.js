const usuarios = require('../databases/usuarios.json')
const fs = require('fs')
const bcrypt = require('bcrypt')
const  services = require('./UsuariosServices')


function alterar(novosDados, idUsuario){
        let verifyIndex = usuarios.findIndex(user => user.id === idUsuario)
        usuarios[verifyIndex].nome = novosDados.nome
        usuarios[verifyIndex].email = novosDados.email
        usuarios[verifyIndex].senha = novosDados.senha
        fs.writeFileSync('./databases/usuarios.json',JSON.stringify(usuarios, null, 4))
        ;// USANDO A FUNÇÃO NÃO ESTÁ FUNCIONANDO
    }
let dados = {
        nome: 'lucas',
        email: 'baladadegames3.0@gmail.com',
        senha: '254'
        
}
alterar(dados, 2)


