import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ],
  styleUrls: [
    './register-page.component.css'
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.namePattern)
      ]
    ],
    surname: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.namePattern)
      ]
    ],
    nick: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.nickPattern),
        Validators.minLength(4)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailPattern)
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
    password2: [
      '',
      [
        Validators.required
      ]
    ]
  },
  {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  }
  );

  constructor (
    private router:Router,
    private fb:FormBuilder,
    private validatorsService: ValidatorsService,
  ) {}

  public isValidField(field:string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public onSubmit():void {
    console.log("submit");
    this.myForm.markAllAsTouched();
  }

  public getFieldError(field:string) :string | null {
    const errors = this.myForm.controls[field].errors || {}
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo no puede estar en blanco';
        case 'minlength':
          return `Este campo debe tener mínimo ${errors['minlength'].requiredLength} caracteres.`
        case 'notEqual':
          return 'Debe coincidir con la contraseña introducida' ;
        case 'pattern':
          return 'No tiene un formato adecuado'
      }
    }
    return null;
  }

}
