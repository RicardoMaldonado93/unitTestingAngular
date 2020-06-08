import { getRobots, getRobotByName, addRobot, deleteRobot } from "./array";

describe("Pruebas unitarias con 'array'", ()=>{
    it("verificamos que la funcion 'getRobots' nos retorne todos los registros", ()=>{
        let robots = getRobots();

        expect( robots.length ).toBeGreaterThanOrEqual(4);
    });

    it("verificamos que la funcion 'getRobotByName' nos retorne 'true' si se encuentra el robot que buscamos", ()=>{

        expect( getRobotByName("R2D2") ).toBeTruthy();
        
    });

    it("verificamos que la funcion 'getRobotByName' nos retorne 'false' si no se encuentra el robot que buscamos", ()=>{

        expect( getRobotByName("Iron Man") ).toBeFalsy();

    });

    it("verificamos que la funcion 'addRobot' agregue el robot que pasamos por parámetro", ()=>{
        let robot = "C3PO"; 

        expect( addRobot(robot).length ).toBeGreaterThanOrEqual(5);

    });

    it("verificamos que la funcion 'deleteRobot' elimine el robot que pasamos por parámetro", ()=>{
        let robot = "R2D2"; 

        expect( deleteRobot(robot).length ).toBeLessThan(4);

    });
})