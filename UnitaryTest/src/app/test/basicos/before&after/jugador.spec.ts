import { Jugador } from "../class/class";

describe("Pruebas unitarias con 'before' y 'after' functions", ()=>{
    let j1: Jugador;
    let msg: string;
    let nroPrueba: number;
    /**
     * Se ejecuta por unica vez antes de todas las pruebas y se imprime el mensaje
     */
    beforeAll(()=>{
        nroPrueba = 1;
        msg = "Se inician todas las pruebas unitarias";
        console.log(msg);
        
    });

    /**
     * Antes de cada prueba se instancia el objeto jugador
     */
    beforeEach(()=>{
        j1 = new Jugador();
        msg = "Se instancia el objeto jugador";
        console.log(msg);
    });


    /**
     * Despues de cada caso de prueba se ejecuta el mensaje
     */
    afterEach(()=>{
        msg = `Se finaliza la prueba unitaria Nro ${nroPrueba}`;
        nroPrueba++;
        console.log(msg);
    });

    /**
     * Despues de ejecutarse todos los casos de prueba se ejecuta el mensaje
     */
    afterAll(()=>{
        msg = "Se finalizan todas las pruebas unitarias";
        console.log(msg);
    })

    /**
     * Se ejecuta el caso de la prueba unitaria
     */
    it("verificamos que la funcion 'damage' debe retornar 50 si recibe 50 de daño",()=>{
       
        msg = `Se ejecuta la prueba unitaria Nro ${nroPrueba}`;
        console.log(msg);

        expect(j1.damage(50)).toBe(50);
    });

    it("verificamos que la funcion 'damage' debe retornar 80 si recibe 20 de daño",()=>{
        
        msg = `Se ejecuta la prueba unitaria Nro ${nroPrueba}`;
        console.log(msg);

        expect(j1.damage(20)).toBe(80);
    });

    /**
     * Anteponiendo el caracter x perminte saltear la prueba
     */
    xit("verificamos que la funcion 'damage' debe retornar 0 si recibe daño > 100",()=>{
        msg = "Soy una prueba unitaria salteada";
        console.log(msg);
        
        expect(j1.damage(600)).toBe(0);
    });
})