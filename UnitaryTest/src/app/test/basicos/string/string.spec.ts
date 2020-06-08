import { returnMessage } from "./string";
import { throwError } from 'rxjs';

describe("Pruebas unitarias con 'string'",()=>{
    let message:string;

    it("la variable debé contener 'Hola Mundo'",() =>{
        message = "Hola Mundo";

        expect( message ).toBe("Hola Mundo");
    });

    it("verificamos que la funcion 'returnMessage' retorne nuestro mensaje", ()=>{ 
        const miMensaje = "Mensaje de Prueba";
        const msgRecuperado = returnMessage(miMensaje);

        expect( msgRecuperado ).toContain(miMensaje);
     });

     it("verificamos que la funcion 'returnMessage' siempre retorne un string", ()=>{
         const miMensajeErroneo = 35;
         const msgRecuperado = returnMessage(miMensajeErroneo);

         expect( typeof msgRecuperado ).toBe("string");
     });

     it("verificamos que la funcion 'returnMessage' retorne 'ERROR' cuando no recibe parametros", ()=>{
         const msgRecuperado = returnMessage(null);

         expect( msgRecuperado ).toBe("ERROR!!");
     });
})
