const pizzas = require('../databases/pizzas.json')
const fs = require('fs')
const UsuariosServices = require('./UsuariosServices')


function listar(){
    let pizzas = []
    for(let i = 0; i < pizzas.length; i++){
        let pizza = {
            id: pizza[i].id,
            nome: pizza[i].nome,
            ingredientes: pizza[i].ingredientes
        }
        pizzas.push(pizza)
    }
    console.table(pizzas)
     

}

function adicionar(objeto){
    let pizza = {
        id: pizzas.at(-1),
        nome: objeto.nome,
        ingredientes: [objeto.ingredientes],
        preco: objeto.preco,
        img: /img/calabresa.jpg
    }

}

function remover(idDapizza){
    let verifyIndex = pizzas.findIndex(pizza => pizza.id === idDapizza)
    let pizza = usuarios.splice(verifyIndex, 1)
    usuarios.push(pizza)

}

function alterar(novosDados,idDapizza){
    let verifyIndex = pizzas.findIndex(pizza => pizza.id === idDapizza)
    pizza[verifyIndex.nome = novosDados.nome]
    pizzas[verifyIndex].ingredientes = [novosDados.ingredientes]
    pizzas[verifyIndex].preco = novosDados.preco
}

function adicionarIngrediente(novoIngrediente, idDapizza){
    let verifyIndex = pizzas.findIndex(pizza => pizza.id === idDapizza)
    pizza[verifyIndex].ingredientes.push(novoIngrediente)

}

function removerIngrediente(posicaoDoIngrediente, idDapizza){
    let verifyIndex = pizzas.findIndex(pizza => pizza.id === idDapizza)
    pizzas[verifyIndex].ingredientes.slice(posicaoDoIngrediente)
}

function alterarIngrediente(posicaoDoIngrediente, novoIngrediente, idDapizza){
    let verifyIndex = pizzas.findIndex(pizza => pizza.id === idDapizza)
    pizzas[verifyIndex].ingredientes[posicaoDoIngrediente] = novoIngrediente
}

const PizzasService = {
    listar, adicionar, remover, alterar, adicionarIngrediente, removerIngrediente, alterarIngrediente
}

module.exports = PizzasService;