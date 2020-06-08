/**
 * es una clase que contiene funciones que nos permite realizar pruebas de elementos de Angular
 */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe("Pruebas de integracion con 'component'", ()=>{
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( ()=>{
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers:[MedicoService],
            imports:[HttpClientModule ]
        });
    
        /**
         * Nos permite el acceso al componente y al DOM
         */
        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;

    });

    it("verificamos que debe de crearse el componente", ()=>{
        expect( component ).toBeTruthy();
    });

    it("verificamos que retorne el nombre del medico en la funcion 'saludarMedico'", ()=>{
        const nombre = "Pedro";
        const res = component.saludarMedico( nombre );

        expect( res ).toContain( nombre );
    });
})