import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Output()
  // public onDelete : EventEmitter<number> = new EventEmitter;
  @Output()
  public onDeleteById : EventEmitter<string> = new EventEmitter;

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDelete = Index value :number

  // public onDeleteCharacter(index:number):void {
  //   this.onDelete.emit(index);
  // }

  public onDeleteCharacterById(id:string | undefined):void {
    this.onDeleteById.emit(id);
  }

}
