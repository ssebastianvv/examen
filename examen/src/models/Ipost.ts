export interface IPost {
    Titulo : string, 
    plataforma : string,
    fechaPublicacion : string,
    image : string
}

export interface IpostResponse{
    id : string,
    Titulo : string, 
    plataforma : string,
    fechaPublicacion : string,
    image : string
}

// To parse this data:
//
//   import { Convert, Ibody } from "./file";
//
//   const ibody = Convert.toIbody(json);

// export interface Ibody {
//     title:                    string;
//     body:                     string;
//     creationDate:             Date;
//     creator:                  string;
//     estimatedPublicationDate: Date;
//     status:                   string;
//     approvalPercentage:       number;
//     corrections:              string;  
//     platform:                 string;
//     postUrl:                  string;
//     multimediaUrl:            string;
// }

// // Converts JSON strings to/from your types
// export class Convert {
//     public static toIbody(json: string): Ibody {
//         return JSON.parse(json);
//     }

//     public static ibodyToJson(value: Ibody): string {
//         return JSON.stringify(value);
//     }
// }
