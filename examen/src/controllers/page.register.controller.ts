import { IUserRegister, IUserVerification } from "../models/Iregister";

export class UserRegister { 
    async register (url : string, user : IUserRegister) : Promise<void> {

        const response : Response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        });

        window.location.href = "../views/login.html";

        console.log(response);

        alert('usuario registrado exitosamente');
        
    }
}

export class UserVerifcations {

    inputsVerification (user : IUserVerification) : boolean {

        const {name, email, password, passwordConfirmation} = user;

        if(!name || !email || !password || !passwordConfirmation) {
            return false;
        }
        
        return true;
    }

    passwordVerification (user : IUserVerification) : boolean {

        const {password, passwordConfirmation} = user;

        const regex : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

        if(!regex.test(password)){
            return false;
        }

        if (password !== passwordConfirmation) { 
            return false;
        }
        
        return true;
    }

    async emailVerification (user : IUserVerification, url : string) : Promise<boolean> {

        const {email} = user;

        const response : Response = await fetch(url);
        const data : IUserRegister[] = await response.json();

        const emailExistence = data.some(element => element.email === email);
        return emailExistence;
    }
}
