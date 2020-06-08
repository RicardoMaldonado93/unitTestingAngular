import { Jugador } from "./class";

describe("Pruebas unitarias con 'class",()=>{

    let j1;

    it("verificamos que la funcion 'damage' debe retornar 80 si recibe 20 de daño",()=>{
        j1 = new Jugador();
        expect(j1.damage(20)).toBe(80);
    });

    it("verificamos que la funcion 'damage' debe retornar 50 si recibe 50 de daño",()=>{
        j1 = new Jugador();
        expect(j1.damage(50)).toBe(50);
    });

    it("verificamos que la funcion 'damage' debe retornar 0 si recibe daño > 100",()=>{
        j1 = new Jugador();
        expect(j1.damage(600)).toBe(0);
    });
});