import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

class FakeRouter {
  navigate( params ){}
}

class FakeActivatedRoute{
  /**
   * Subject permite insertar valores a un observable
   */
  private subject = new Subject();

  push( valor ){
    this.subject.next(valor);
  }

  get params(){
    return this.subject.asObservable();
  }

}


describe("Pruebas con 'RouterMedicoComponent'", () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("debe de redireccionar a medico cuando se guarde", ()=>{
    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith(['medicos','123']);
  });

  it("debe de colocar el id = nuevo", ()=>{
    component = fixture.componentInstance;
    const activatedRoute:FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({ id: 'nuevo' });

    expect( component.id ).toBe('nuevo');
  });

});
