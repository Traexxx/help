const usuarios = require('../databases/usuarios.json')
const fs = require('fs')
const bcrypt = require('bcrypt')
const  services = require('./UsuariosServices')


function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
        let verifyIndex = usuarios.findIndex(user=> user.id === idUsuario)
        usuarios[verifyIndex].enderecos[posicaoDoEndereco] = novoEndereco
                 
        
        fs.writeFileSync('./databases/usuarios.json',JSON.stringify(usuarios, null, 4))
        ;// USANDO A FUNÇÃO NÃO ESTÁ FUNCIONANDO
    }
let dados = {
        nome: 'lucas',
        email: 'baladadegames3.0@gmail.com',
        senha: '354'
        
}
alterarEndereco(0, 'minha casa', 2)


