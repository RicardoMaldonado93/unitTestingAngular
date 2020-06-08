import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { empty, throwError} from 'rxjs';
import { from } from 'rxjs';


describe("Pruebas unitarias con 'spyOn'", () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it ("verificamos tener inicializado el array de medicos", () => {
        expect ( componente.medicos ).toBeDefined();
    });

    it("verificamos que 'ngOnInit' deber cargar los medicos", () => {
        const medicos = ["medico1", "medico2", "medico3"];

        spyOn( servicio, 'getMedicos').and.callFake(()=>{
            return from([medicos])
        });

        componente.ngOnInit();
        expect( componente.medicos.length ).toBeGreaterThan(0);
   
    });

    it("verificamos que llama al server para agregar un medico", () => {

        const espia = spyOn( servicio, "agregarMedico").and.callFake(medico =>{
            return empty();
        })

       componente.agregarMedico();
       expect( espia ).toHaveBeenCalled();
   
    });

    it("verificamos que debe de agregar un nuevo medico al arreglo de medicos",()=>{
        const medico = { id: 1, nombre: "Juan"};

        spyOn(servicio, "agregarMedico").and.returnValue( from([medico]) );

        componente.agregarMedico();

        expect( componente.medicos.indexOf(medico) ).toBeGreaterThanOrEqual(0)
    })

    it("verificamos que si falla la adicion, la propiedad mensaje de error, debe ser igual al error del mensaje", ()=>{
        const miError = "No se puedo agregar el medico";

        spyOn(servicio, "agregarMedico").and.returnValue( throwError(miError) );

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe(miError);
    })

    it("verificamos qe deebe de llamar al servidor para borrar un medico", ()=>{

        //Aqui emulamos la interaccion del usuario en un evento prompt
        spyOn(window, "confirm").and.returnValue(true); 

        const espia = spyOn(servicio, "borrarMedico").and.returnValue(empty());

        componente.borrarMedico("1");

        expect( espia ).toHaveBeenCalledWith("1");
    })

    it("verificamos que no debe de llamar al servidor para borrar un medico", ()=>{

        spyOn(window, "confirm").and.returnValue(false);

        const espia = spyOn(servicio, "borrarMedico").and.returnValue(empty());

        componente.borrarMedico("1");

        expect( espia ).not.toHaveBeenCalledWith("1");
    })

});
