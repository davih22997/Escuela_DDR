import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';
import { UserValidator } from 'src/app/shared/validators/user-validator.service';
import { ValidatorsService } from 'src/app/shared/validators/validator.service';

import * as crypto from 'crypto-js';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ],
  styleUrls: [
    './register-page.component.css'
  ]
})
export class RegisterPageComponent implements OnInit {

  // VARIABLES
  // Public variables
  @Output()
  public usersEvent = new EventEmitter<User[]>();
  private users:User[] = [];

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
        Validators.pattern(this.validatorsService.surnamePattern)
      ]
    ],
    nick: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.nickPattern),
        Validators.minLength(4)
      ],
      [
        this.userValidator
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailPattern)
      ],
      [
        this.emailValidator
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

  // METHODS
  // Constructor
  constructor (
    private router:Router,
    private userValidator: UserValidator,
    private emailValidator: EmailValidator,
    private fb:FormBuilder,
    private uService: UsersService,
    private validatorsService: ValidatorsService,
    private snackbar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.uService.getUsers()
      .subscribe(users => {
        this.users = users
        this.usersEvent.emit(this.users);
      });
  }

  // Submit
  public onSubmit():void {
    this.myForm.markAllAsTouched();
    console.log(this.users);

    if (!this.myForm.valid)
      return;

    // If form is valid
    const user:User = <User> {
      id: this.myForm.get('nick')!.value,
      name: this.myForm.get('name')!.value,
      surname: this.myForm.get('surname')!.value,
      email: this.myForm.get('email')!.value,
      password: crypto.SHA512(this.myForm.get('password')!.value).toString(),
      admin:false
    }

    // We add the user
    this.addUser(user);
    // And reset form
    this.myForm.reset();
  }

  // Validation & checking errors
  public isValidField(field:string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
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
          return 'No tiene un formato adecuado';
        case 'userTaken':
          return 'Usuario ya registrado.'
        case 'emailTaken':
          return 'Email ya registrado.'
      }
    }
    return null;
  }

  // Adding data
  private addUser(user: User) {
    this.uService.addUser(user)
      .subscribe(user => {
        this.showSnackbar(`Usuario ${user.id} creado`)
      })
  }

  // Show message
  showSnackbar(message:string):void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    });
  }

}
