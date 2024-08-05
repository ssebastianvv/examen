import { printpost } from "../src/controllers/card.controller";
import { PostCrud } from "../src/controllers/home.controller";
import { IPost, IpostResponse } from "../src/models/Ipost";         


const Form = document.querySelector("#post-form") as HTMLFormElement;
const Titulo = document.querySelector("#post-title") as HTMLInputElement;
const plataforma = document.querySelector("#plataforma") as HTMLInputElement;
const fecha = document.querySelector("#fecha") as HTMLInputElement;
const image = document.querySelector("#image") as HTMLInputElement;
const cardsContainer = document.querySelector("#cards-container") as HTMLDivElement;
const postId = document.querySelector("#post-id") as HTMLInputElement; 

const url : string = 'https://api-posts.codificando.xyz/posts';//cambiar ahora

Form.addEventListener('submit', async (event : Event) => {

    event.preventDefault();

    if (postId.value) {
       await updatepost(postId.value);
    }
    else {
        await createpost();
    }
})

document.addEventListener('DOMContentLoaded', async () => {
    await getpost();
})

cardsContainer.addEventListener('click', async (event : Event) => {
    await buttonClick(event);
})


const createpost = async () : Promise<void> => { 

    const newpost : IPost = {
        Titulo : Titulo.value,
        plataforma: plataforma.value,
        fechaPublicacion : fecha.value,
        image : image.value
    };

    const createCity = new PostCrud;
    await createCity.create(url, newpost); 

    Form.reset();
}

const getpost = async () : Promise<void> => {

    const postCities = new PostCrud;
    const cities : IpostResponse[] = await postCities.get(url);
    

    console.log(cities);

    cardsContainer.innerHTML = '';

    cities.forEach(post => {
        const renderpost = printpost(post);
        cardsContainer.appendChild(renderpost);
    })
}

const editCity = async (id : string) : Promise<void> => { 

    window.location.href = '#nav-title';

    const getpost= new PostCrud;
    const post : IpostResponse = await getpost.modify(`${url}/${id}`);

    Titulo.value = post.Titulo;
    plataforma.value = post.plataforma;
    fecha.value = post.fechaPublicacion;
    image.value = post.image;
    postId.value = id;
}

const updatepost = async (id : string) : Promise<void> => {

    const newCity : IPost = {
        Titulo : Titulo.value,
        plataforma : plataforma.value,
        fechaPublicacion : fecha.value,
        image : image.value
    }

    const updateCity = new PostCrud;
    await updateCity.edit(`${url}/${id}`, newCity);

    Form.reset();
}

const deleteCity = async (id : string) : Promise<void> => {

    const confirmation = confirm('¿Deseas eliminar esta ciudad?');

    if (confirmation) {

        const deleteCity = new PostCrud;
        await deleteCity.remove(url, id);
    }
}

const buttonClick = async (event : Event) : Promise<void> => {

    const target = event.target as HTMLElement;

    if (target.classList.contains('editButton')) {
        const id = target.getAttribute('data-id');

        if (id !== null) {
            editCity(id);
            return; 
        }
    }

    if (target.classList.contains('deleteButton')) {
        const id = target.getAttribute('data-id');

        if (id !== null) {
            deleteCity(id);
            return;
        }
    }
}
