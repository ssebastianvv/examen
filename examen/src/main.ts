import { PageController } from './controllers/page.login.controllers';  

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

  sessionStorage.setItem('token', token.token);

  const getToken = sessionStorage.getItem('token');

  if (getToken === token.token) {
    window.location.href = './pages/home.html';
    alert('se inició sesión');
  }
 }
 catch (error) {
  alert(error);
 }

})