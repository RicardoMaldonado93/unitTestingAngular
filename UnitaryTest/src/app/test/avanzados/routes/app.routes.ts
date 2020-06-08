import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermedios/webPack/hospital.component';
import { MedicoComponent } from '../../intermedios/testBed/medico.component';
import { IncrementadorComponent } from '../../intermedios/integracion/incrementador.component';

export const routes:Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent },
]