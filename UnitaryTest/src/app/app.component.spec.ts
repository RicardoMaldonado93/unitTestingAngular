import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  let app: AppComponent;
  let fixture : ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
  }));

  it('verificamos que se crea la App', () => {
      expect(app).toBeTruthy();
  });

  it("varificamos que la App contenga un router-outlet",()=>{
      const debugElement = fixture.debugElement.query( By.directive( RouterOutlet ) );

      expect( debugElement ).not.toBeNull();
  });


});
