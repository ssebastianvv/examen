export class UserLogout {

    logout (key : string) {

        sessionStorage.removeItem(key); 

        window.location.href = "../index.html";
    }
}
