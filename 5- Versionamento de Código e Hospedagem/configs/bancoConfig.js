var sequelize = require("sequelize")

var conexao = new sequelize("progweb","postgres","12345678",{
    host: "progweb.c9t3tg5oqeut.sa-east-1.rds.amazonaws.com",
    dialect: "postgres"
})

conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco com sucesso!")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar: "+erro)
    }
)

module.exports = conexao