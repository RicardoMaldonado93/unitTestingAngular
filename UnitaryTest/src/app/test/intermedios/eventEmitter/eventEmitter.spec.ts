import { Player } from "./eventEmitter";

describe("Pruebas unitarias con 'EventEmitter'",()=>{
    let player: Player;

    beforeEach( ()=> player = new Player() );

    it("debe emitir un evento cuando recibe daño", ()=>{
        let nuevoHp = 0;

        player.hpchange.subscribe(hp =>{
            nuevoHp = hp;
        });
        
        player.damageRecived(1000);

        expect(nuevoHp).toBe(0);
    });

    it("debe emitir un evento cuando recibe daño y el HP es menos de 100", ()=>{
        let nuevoHp = 0;

        player.hpchange.subscribe(hp =>{
            nuevoHp = hp;
        });
        
        player.damageRecived(50);

        expect(nuevoHp).toBe(50);
    });
});