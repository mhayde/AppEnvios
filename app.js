require('dotenv').config()
const Server =require('./models/servers')
const server = new Server ();
server.listen();
server.routes();

/*app.get('/',function(req,res){
    res.send('Hello World')
})

app.listen(process.env.PORT, ()=>{
    console.log("El puerto esta corriendo el puerto TCP"+process.env.PORT)
    }
)*/
//MAriahh