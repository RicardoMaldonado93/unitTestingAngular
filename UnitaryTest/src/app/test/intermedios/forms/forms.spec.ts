import { FormBuilder } from "@angular/forms";
import { LoginForm } from './forms';

describe("Pruebas unitarias con 'Forms'", () =>{
    let formulario: LoginForm;

    beforeEach( ()=> formulario = new LoginForm( new FormBuilder() ) );

    it("verificamos que debe de crear un formulario con dos campos",()=>{
        expect( formulario.form.contains('email')).toBeTruthy();
        expect( formulario.form.contains('password')).toBeTruthy();
    });

    it("verificamos que el email debe de ser obligatorio",()=>{
        const control = formulario.form.get('email');
        control.setValue('');

        expect( control.valid ).toBeFalsy();
    });

    it("verificamos que el email debe de ser valido",()=>{
        const control = formulario.form.get('email');
        control.setValue('unitaryTest@miemail.com');

        expect( control.valid ).toBeTruthy();
    });
})