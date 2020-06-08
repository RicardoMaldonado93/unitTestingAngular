import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterLink, RouterLinkWithHref, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe("Pruebas unitarias 'NavBar'", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se debe de crear el componente ', () => {
    expect(component).toBeTruthy();
  });

  it("debe de contener un link a la página de medicos", ()=>{
    const debugElement = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );
    
    let existe = false;

    debugElement.forEach( router => {
     
      if(router.attributes["routerLink"] == "/medicos")
        existe = true;
      });
    
    expect( existe ).toBeTruthy();
  });

});
