import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, find } from 'rxjs/operators';

@Injectable()
export class MedicosService {

  private URL:string = "...";

  constructor( public http: Http ) { }

  getMedicos() {
    return this.http.get(this.URL)
                .pipe(map( resp => resp['medicos'] ));
  }

  agregarMedico( medico: any ) {
    return this.http.post(this.URL, medico )
                .pipe(map( resp => resp['medico'] ));
  }

  borrarMedico( id: string ) {
    return this.http.delete(this.URL)
                .pipe(map( resp => resp['medico'] ));
  }

  obtenerUnMedico( medico : string ){
    return this.http.get(this.URL)
                    .pipe(find(resp => resp['medico'] ==  medico ));
  }
}
