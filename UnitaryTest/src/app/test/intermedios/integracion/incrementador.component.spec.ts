import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';


describe('Pruebas de Integración', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('debe de mostrar la leyenda', () => {

        component.leyenda = "Progreso de carga";

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        
        expect( elem.innerHTML ).toContain("Progreso de carga");
    });

    it("debe de mostrar el valor del progreso", ()=>{

        component.cambiarValor( 5 );
        fixture.detectChanges();

        /**
         * Debido a que la deteccion de cambios puede durar un poco más que las pruebas unitarias
         * llamamos a la funcion 'whenStable' para que ésta espere a la deteccion de cambios para ejecutarse
         */
        fixture.whenStable().then(async()=>{
            const input = fixture.debugElement.query( By.css('input') );
            const elem = input.nativeElement;
            
            expect( elem.value ).toBe( '55' );

        })

        expect().nothing();
    });
    
    it("debe de incrementar/decrementar en 5, con un click en el boton", ()=>{
        /**
         *  Con queryAll nos trae todos los elementos del DOM
         */
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45);
        
        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50);

    });

    it("al clikear el boton el progreso debe cambiar", ()=>{
        /**
         *  Con queryAll nos trae todos los elementos del DOM
         */
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        const prog: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        
        botones[0].triggerEventHandler('click', null);
        
        fixture.detectChanges();

        expect( prog.innerHTML).toContain('45');

    });

    

});
