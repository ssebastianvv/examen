import { UserRegister, UserVerifcations } from "../src/controllers/page.register.controller.js";
import { IUserRegister, IUserVerification } from "../src/models/Iregister.js";

const formRegister = document.querySelector("#register-form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userPassword = document.querySelector("#passwordUser") as HTMLInputElement;
const userPasswordConfirmation = document.querySelector("#password-confirmation") as HTMLInputElement;

const url : string = 'https://api-posts.codificando.xyz/users/register';

formRegister.addEventListener("submit", async (event : Event) => { 
    event.preventDefault();
    await verifications();
});

const verifications = async () => {

    const newUser : IUserVerification = {
        name : userName.value,
        email : userEmail.value,
        password : userPassword.value,
        passwordConfirmation : userPasswordConfirmation.value
    }

    const userVerifications = new UserVerifcations;

    const validInputs = userVerifications.inputsVerification(newUser);
    
    if(!validInputs){
        alert('por favor, completa todos los campos');
        return;
    }

    const emailExists = await userVerifications.emailVerification(newUser, url);

    if (emailExists) {
        alert('el correo ya se encuentra registrado');
        return;
     }
 
    const validPasswords = userVerifications.passwordVerification(newUser);
 
    if (!validPasswords) {
        alert('la contraseña no es válida y/o las contraseñas no coinciden');
        return;
    }
    
    await createUser();
}

const createUser = async () => { 

    const newUser : IUserRegister = {
        name : userName.value,
        email : userEmail.value,
        password : userPassword.value
    };

    const createUser = new UserRegister;
    await createUser.register(url, newUser); 
}
