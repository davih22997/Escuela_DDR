import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  styles: [
  ],
})
export class UsersTableComponent {

  @Output()
  public example:string = "Pepe";



  public productForm = new FormGroup({
    reference: new FormControl(),
    quantity: new FormControl()
  });

  public formData = new FormGroup({
    user: new FormControl(),
    password: new FormControl()
  });

  componentproperty:any;
  emailid:any;
  formdata:any;
  constructor() { }
  ngOnInit() {
     this.formdata = new FormGroup({
        emailid: new FormControl(""),
        passwd: new FormControl("")
     });
  }

  onClickSubmit2(data:any) {this.emailid = data.emailid;}

  onClickSubmit(data:any) {
    console.log(data)
  }

}
