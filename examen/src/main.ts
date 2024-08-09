// Importar el controlador de página
import { PageController } from './controllers/page.login.controllers';

// URL base de la API
const url = 'https://api-posts.codificando.xyz/';

// Seleccionar elementos del DOM y asegurarse de que existan
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#loginForm")         as HTMLFormElement;
    const emailUser = document.querySelector("#emailUser")         as HTMLInputElement;
    const passwordUser = document.querySelector("#passwordUser")   as HTMLInputElement;
    const loading = document.querySelector("#loading")             as HTMLDivElement;

    // Verificar si los elementos fueron seleccionados correctamente
    if (!loginForm || !emailUser || !passwordUser || !loading) {
        console.error("Error al seleccionar los elementos del formulario.");
        return;
    }

    // Asignar el event listener al formulario
    loginForm.addEventListener("submit", async (event: Event) => {
        event.preventDefault();
        loading.style.display = "flex";

        const user = {
            email: emailUser.value,
            password: passwordUser.value
        };

        try {
            const pageController = new PageController(url);
            const token = await pageController.login(user, 'auth/login');

            console.log(token);

            sessionStorage.setItem('token', token.token);

            const getToken = sessionStorage.getItem('token');

            if (getToken) {
                alert('Se inició sesión con éxito');
                window.location.href = '/src/views/home.html';
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Hubo un error al iniciar sesión. Por favor, intenta nuevamente.');
        } finally {
            loading.style.display = "none";
        }
    });
});