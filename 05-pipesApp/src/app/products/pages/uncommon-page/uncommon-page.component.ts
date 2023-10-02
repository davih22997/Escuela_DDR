import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

// i18n Select
public name: string = 'Fernando';
public gender: 'male' | 'female' = 'male';
public invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla'
}

changeClient():void {
  this.name = 'Melissa';
  this.gender = 'female';
}

// i18n Plural
public clients:string[] = [
  'Maria',
  'Pedro',
  'Fernando',
  'Hernando',
  'Eduardo',
  'Melissa',
  'Natalia'
]

public clientsMap = {
  '=0': 'no tenemos ningún cliente esperando.',
  '=1': 'tenemos # cliente esperando.',
  'other': 'tenemos # clientes esperando.'
}

deleteClient(): void {
  this.clients.shift();
}

// KeyValue Pipe
public person = {
  name: 'Fernando',
  age: 36,
  address: 'Ottawa, Canada'
}


}
