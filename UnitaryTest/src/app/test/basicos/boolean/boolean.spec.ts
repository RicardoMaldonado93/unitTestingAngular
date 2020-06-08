import { loginUser } from "./boolean";

describe("Pruebas unitarias con 'boolean'", ()=>{
    let user;

    it("verificamos que el usuario registrado pueda ingresar",()=>{
        user = "usuarioRegistrado";

        expect( loginUser(user) ).toBeTruthy();
    });

    it("verificamos que el usuario que no esta registrado sea rechazado",()=>{
        user = "soyOtroUsuario";

        expect( loginUser(user) ).toBeFalsy();
    });

    it("verificamos que el usuario ingresado sea en el formato valido",()=>{
        user = null;

        expect( loginUser(user) ).toBe("usuario invalido")
    });
});