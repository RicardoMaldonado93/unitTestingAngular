import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './test/intermedios/espias/medicos.component';
import { MedicoComponent } from './test/intermedios/testBed/medico.component';
import { HospitalComponent } from './test/intermedios/webPack/hospital.component';
import { IncrementadorComponent } from './test/intermedios/integracion/incrementador.component';
import { NavbarComponent } from './test/avanzados/navbar/navbar.component';
import { RouterMedicoComponent } from './test/avanzados/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MedicosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
