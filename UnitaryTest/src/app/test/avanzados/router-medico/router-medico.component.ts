import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: []
})
export class RouterMedicoComponent implements OnInit {

  public id: string;

  constructor( private _router: Router, private _activateRoute: ActivatedRoute ) { }

  ngOnInit() {
    this._activateRoute.params.subscribe( params => {
      this.id = params['id'];
    } )
  }

  guardarMedico(){
    this._router.navigate(['medicos', '123']);
  }

}
