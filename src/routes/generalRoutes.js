import express, { request, response } from 'express'


const router = express.Router();

const  saludarVariables = (nombre,hora = new Date())=>
{
    let horas = hora.getHours();
    

    if(nombre === undefined){
        return `No se definido el nombre de la persona a saludar, por favor verifica el llamado de la función`
    }
    else{

    if (horas >= 6 && horas < 12){
        return `Buenos dias, ${nombre}`;
    }
    else if(horas >=12 && horas<19){
        return `Buenas tardes, ${nombre}`;
    }
    else{
        return `Buenas noches, ${nombre}`;
        }
    }
}



router.get('/misDatos', (request, response) => response.render("auth/datos.pug", {
    page: "mis datos",
    nombre: "Jazziel Rodríguez López",
    fechaNacimiento: "2004-01-06",
    matricula: " 220627",
    alumno:"Buen alumno"}
    ))
router.get('/queDia', (request, response) => response.send(saludarVariables("jazziel")));
//router.get('/', (request, response) => response.render("layout/index.pug", {page: "Home"}));
router.get('/quienEres', (request, response) => response.send("i'm youree first app in architecture SOA(Service Object Oriented)"));
router.get('/queUsas', (request, response) => response.send("Estoy construida en el lenguaje de JavaScript, y utilizo el microservidor de Express."));
/*router.get('/misDatos', (req, res) => res.json({
    nombre: "Jazziel",
    fechaNacimiento: "2004-01-06",
    matricula: " 220627"}));*/



    //Rutas deben de ser unicas por verbo

//Rutas a trávez de get
 router.get('/get', (request, response) => response.send("helloweb fron GET verb"));

//Rutas a trávez de post
router.post('/post', (request, response) => response.send("helloweb fron POST verb"));

 //Rutas a trávez de put
 router.put('/put', (request, response) => response.send("you're trying to update some properties of dsata using PUT"));
     //Rutas a trávez de delete
     //Rutas a trávez de patch
 router.patch('/patch', (request, response) => response.send("you're trying to update all data object through PATCH"));
 router.delete('/delete', (request, response) => response.send(" are you sure that you want to DELETE data?"));



   // router.get('/', (req,res) => res.render("Login.pug"))
    // router.get('/', (req,res) => res.render("./login.pug"));

router.get('/', (request, response) => response.render("layout/index.pug", {page: "Home",uihj:"Caro"}));


        
    export default router; //Exportamos las rutas 