import User from "../models/user.js";
import { check, validationResult } from "express-validator";
import { generateToken } from "../lib/tokens.js";
import { emailRegister, emailPasswordRecovery } from "../lib/emails.js";


const formLogin = (request, response) => {
    
    response.render("../views/auth/login.pug", {
        isLogged: false,
        page: "Login",
        
    })
}

const formPasswordUpdate = (request, response) => {
    
    response.render("../views/auth/password-update.pug", {
        isLogged: false,
        page: "Password update",
        
    })
}

const formRegister = (request, response) => {

    response.render("auth/register.pug", {
        page: "Creating a new account...",
        
    })
}

const formPasswordRecovery = (request, response) => {

    response.render("auth/recovery.pug", {
        page: "Password Recovery",
        
    })
}

const insertUser = async (req, res) => {

    console.log("Intentando registrar los datos del nuevo usuario en la Base de Datos");
    console.log(`Nombre: ${req.body.name}`);
    //*Validando
    await check("name").notEmpty().withMessage("YOUR NAME IS REQUIRED").run(req) //* Express checa el nombre que no venga vacio AHORA MISMO
    await check("email").notEmpty().withMessage("YOUR EMAIL IS REQUIRED").isEmail().withMessage("THIS ISN'T EMAIL FORMAT").run(req)
    await check("password").notEmpty().withMessage("YOUR PASSWORD IS REQUIRED").isLength({ min: 8 })    .withMessage("YOUR PASSWORD MUST HAVE 8 CHARACTERS AT LEAST").run(req)
    await check("confirmPassword").notEmpty().withMessage("YOUR PASSWORD IS REQUIRED").isLength({
        min: 8
    }).withMessage("YOUR PASSWORD MUST HAVE 8 CHARACTERS AT LEAST").equals(req.body.password).withMessage("BOTH PASSWORDS FIELDS MUST BE THE SAME").run(req)
    // res.json(validationResult(req));//*PARA VER EL JSON

    console.log(`El total de errores fueron de: ${validationResult.length} errores de validación`)
    let resultValidate = validationResult(req);
    const userExists = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    const { name, email, password } = req.body;

    if (userExists) {
        
        res.render("auth/register.pug", ({
            page: "New account",
            errors: [{ msg: `the user ${req.body.email} already exist` }],
            user: {
                name: req.body.name,
                email: req.body.email
            },
             

        }))
    }
    else if (resultValidate.isEmpty()) {
        const token = generateToken();
        //*Creando usuario */

        let newUser = await User.create({
            name, email, password, token
        });
        res.render("templates/message.pug", {
            page: "create account successfull",
            message: email,
            type:"success"
             
        }) //* Esta linea es la que inserta

        emailRegister({
            email,
            name,
            token
        });

    }

    else {
        res.render("auth/register.pug", ({
            page: "New account",
            errors: resultValidate.array(), user: {
                name: req.body.name,
                email: req.body.email
            },
             
        }))
    }


}

const confirmAccount = async (req, res) => {
   
    const tokenRecived = req.params.token
    const userOwner = await User.findOne({
        where: {
            token: tokenRecived
        }
    })
    if (!userOwner) {
        
        console.log("El token no existe")
        res.render('auth/confirm-account', {
            page: 'Status verification.',
            error: true,
            msg: 'We have found some issues and could not verify your account.',
            button:'Access denied'
            
        })
    }
    else {
        console.log("El token existe");
        userOwner.token = null;
        userOwner.verified = true;
        await userOwner.save();
        // ESTA OPERACION REALIZA EL UPDATE EN LA BASE DE DATOS.
        res.render('auth/confirm-account', {
            page: 'Status verification.',
            error: false,
            msg: 'Your account has been confirmed successfuly.',
            button:'Now you can login',
             
        });

    };


}

const updatePassword = (req, res) =>{
 
return 0;
} //!Sin empezar

const emailChangePassword = async  (req, res) =>{
    console.log(`El usuario ha solicitado cambiar su contraseña por lo que se le enviara un correo electronico a ${req.body.email} con la liga para actualizar su contraseña.`)
    await check("email").notEmpty().withMessage("YOUR EMAIL IS REQUIRED").isEmail().withMessage("THIS IS NOT EMAIL FORMAT").run(req);
    let resultValidate = validationResult(req);
    const { name, email } = req.body;

    if (resultValidate.isEmpty()) {
        const userExists = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(!userExists){ //Si no existe
            console.log(`El usuario: ${email} que esta intentando recuperar su contraseña no existe`);
            res.render("templates/message.pug", {
                page: "User not found",
                message: `The user associated with: ${email} does not exist in database.`,
                type:"error"
             
            });
        }
        else {
            console.log("envio de correo");
            const token = generateToken();
            userExists.token = token;
            userExists.save();

           //TODO: enviar el correo con el nuevo token
          
           emailPasswordRecovery({name:userExists.name, email:userExists.email, token:userExists.token})
           
           res.render('templates/message', {
            page: 'Email Send',
            msg: `We have sent an email to account: ${email}`,
            type:"success"
            
            // button:'Now you can login',
             
        });
        }
    }
    else{
             res.render('auth/recovery', {
            page: 'Status verification.',
            error: false,
            msg: 'Your account has been confirmed successfuly.',
            button:'Now you can login',
            errors: resultValidate.array(), user: {
                    name: req.body.name,
                    email: req.body.email
                },
                 
            
            
             
        });
    }

    
    
    
return 0;
}


export { formLogin, formRegister, formPasswordRecovery,formPasswordUpdate, insertUser, confirmAccount, updatePassword, emailChangePassword};
