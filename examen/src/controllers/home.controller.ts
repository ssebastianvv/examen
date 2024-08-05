import { IPost, IpostResponse } from "../models/Ipost";

export class postCrud {

    async create (url : string, city : IPost, ) : Promise<void> {

        const response : Response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(city)
        });

        console.log(response);

        alert('ciudad creada exitosamente');
    }

    async get (url : string) : Promise<IpostResponse[]> {

        const response : Response = await fetch(url);
        const data : IpostResponse[] = await response.json();

        return data;
    }

    async modify (url : string) : Promise<IpostResponse> {

        const response : Response = await fetch(url);
        const data : IpostResponse = await response.json();

        return data;
    }

    async edit (url : string, city : IPost) : Promise<void> {

        const response : Response = await fetch(url, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(city)
        });

        console.log(response);

        alert('ciudad actualizada exitosamente');
    }

    async remove (url : string, id : string) : Promise<void>  { 

        const response = await fetch(`${url}/${id}`, { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(response);

        alert('ciudad eliminada exitosamente');
    }
}

