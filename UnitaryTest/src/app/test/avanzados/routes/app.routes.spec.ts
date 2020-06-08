import { routes } from "./app.routes";
import { MedicoComponent } from "../../intermedios/testBed/medico.component";

describe("Pruebas unitarias con 'routes'", ()=>{

    it("verificamos que exista la ruta /medico/:id", ()=>{
        expect( routes ).toContain(
            { path: 'medico/:id', component: MedicoComponent }
        );
    });
});