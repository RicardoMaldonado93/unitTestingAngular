import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class LoginForm{

    public form: FormGroup;

   
    constructor( fb: FormBuilder) {
        this.form = fb.group({
            email:['', [Validators.required, Validators.email]],
            password:['', Validators.required ]
        })
    }
}