import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];
  constructor( private _medicoService: MedicoService) { }

  ngOnInit() {
  }

  saludarMedico( nombre: string ){
    return `Hola ${nombre}`;
  }

  obtenerMedicos(){
    this._medicoService.getMedicos()
                  .subscribe( (medicos: any[]) => this.medicos = medicos )
  }
}
