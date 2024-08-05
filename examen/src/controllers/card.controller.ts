import { IpostResponse } from "../models/Ipost";

export const printpost = (post: IpostResponse) : HTMLElement => {

    const {id, Titulo, plataforma, fechaPublicacion, image} = post;

    const cardContainer = document.createElement('article') as HTMLElement;
    cardContainer.className = 'card-container';

    const cardImage = document.createElement('img') as HTMLImageElement;
    cardImage.className = 'card-image';

    const cardInformation = document.createElement('div') as HTMLElement;
    cardInformation.className = "card-information";

    const cardTitle = document.createElement('h3') as HTMLHeadElement;
    cardTitle.className = 'card-title';

    const cardDepartment = document.createElement('p') as HTMLParagraphElement;
    const cardDescription = document.createElement('p') as HTMLParagraphElement;

    cardImage.src = image;
    cardTitle.innerText = Titulo;
    cardDepartment.innerText = plataforma;
    cardDescription.innerHTML = fechaPublicacion;

    cardInformation.append(cardTitle, cardDepartment, cardDescription);

    const buttonContainer = document.createElement('div') as HTMLDivElement;
    buttonContainer.className = 'button-container';

    const editButton = document.createElement('button') as HTMLButtonElement;
    editButton.innerText = 'edit';
    editButton.className = 'editButton';
    editButton.setAttribute('data-id', id);

    const deleteButton = document.createElement('button') as HTMLButtonElement;
    deleteButton.innerText = 'delete';
    deleteButton.className = 'deleteButton';
    deleteButton.setAttribute('data-id', id);

    buttonContainer.append(editButton, deleteButton);

    cardContainer.append(cardImage, cardInformation, buttonContainer);

    return cardContainer;
}