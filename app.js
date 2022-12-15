//servidor

/**importar express
 * 
 * crir servidor
 * 
 * definir de uma rota neste servidor
 * endereço, método função callback  (a ação que que o servidor vai realizar quando a req chegar) 
 *
 * 
 * por o servidor no modo aguardando requisição
 * 
 * 
 */

const express = require('express')

const servidor = express();

servidor.get('/usuarios', (req, res)=>{
    console.log("chegou uma requisição");
    res.send("Vou te mandar uma lista de usuarios... ATUALIZADO")
} );

servidor.listen(3000)