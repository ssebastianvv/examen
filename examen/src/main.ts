import { PageController } from './controllers/page.login.controllers.ts';  

const url = 'https://api-posts.codificando.xyz/';//URL de la API  

const loginForm = document.querySelector("#loginForm") as HTMLFormElement;
const emailUser = document.querySelector("#emailUser") as HTMLInputElement;
const passwordUser = document.querySelector("#passwordUser") as HTMLInputElement;
const loading =document.querySelector("#loading") as HTMLDivElement

loginForm.addEventListener("submit", async (event : Event) => {
  event.preventDefault();

  loading.style.display = "flex";

  const user = {
    email : emailUser.value,
    password : passwordUser.value
  }

 try{
  const pageControoller = new PageController(url);
  const token = await pageControoller.login(user, 'auth/login');// tener en cuenta que aca es la continuacion de la funcion login

  console.log(token);

  sessionStorage.setItem('token', token.token);//Guardamos el token en el localStorage

  const getToken = sessionStorage.getItem('token');

  if (getToken === token.token && getToken !== null) {//Si el token es igual al que obtuvimos y no es null  
    window.location.href = '.views/home.html';//Ir a la página de inicio
    alert('se inició sesión');//Mostramos un mensaje de alerta  
    
  }
 }
 catch (error) {
  alert(error);
 }

})