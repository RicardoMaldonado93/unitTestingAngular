import { IncrementadorComponent } from "./incrementador.component";

describe("Pruebas de nomeclatura para hacer pruebas unitarias dentro de las pruebas de integracion", ()=>{
    let component: IncrementadorComponent;

    beforeEach( ()=> component = new IncrementadorComponent() );

    it("verificamos que el progreso no debe de pasar los 100", ()=>{
        component.cambiarValor(200);
        
        expect( component.progreso ).toBe(100);
    })
});