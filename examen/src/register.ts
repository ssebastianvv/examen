import { UserRegister, UserVerifications } from "../src/controllers/page.register.controller.ts";
import { IUserRegister, IUserVerification } from "../src/models/Iregister.ts";

const formRegister = document.querySelector("#register-form") as HTMLFormElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userPassword = document.querySelector("#password") as HTMLInputElement;

const url : string = 'https://api-posts.codificando.xyz/users/register';

formRegister.addEventListener("submit", async (event : Event) => { 
    event.preventDefault();
    await verifications();
});

const verifications = async () => {

    const newUser : IUserVerification = {
        email : userEmail.value,
        password : userPassword.value,
    }

    const userVerifications = new UserVerifications;

    const validInputs = userVerifications.inputsVerification(newUser);
    
    if(!validInputs){
        alert('por favor, completa todos los campos');
        return;
    }

    await createUser();
}

const createUser = async () => { 

    const newUser : IUserRegister = {
        email : userEmail.value,
        password : userPassword.value
    };

    const createUser = new UserRegister;
    await createUser.registerUser(url, newUser); 
}