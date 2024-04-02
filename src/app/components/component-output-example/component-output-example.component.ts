import { Component, Inject } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { Eperson, ManyPerson } from 'src/app/shared/interfaces/person';
import {
  MatDialog,  MAT_DIALOG_DATA,  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
// import { Dialog } from '@angular/cdk/dialog';
import { PersonTableComponent } from '../person-table/person-table.component';

import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule,
} from '@angular/cdk/dialog';


@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent, DialogModule],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {

  constructor(public dialog:Dialog){}

manyPerson = ManyPerson
onPersonClicked(person:Eperson){
  // console.log(person);
  // alert(this.personTemplate(person));
  this.dialog.open(PersonDialogComponent,{
    data:person,
  });
}

personTemplate(person:Eperson){
  return `
  Person Details

  Firstname: ${person.givenName}
  Lastname: ${person.surName}
  Age: ${person.age}
  `
}
}
@Component({
  imports:[PersonTableComponent],
  standalone:true,
  template: `
  <app-person-table [person]="person"></app-person-table>
  <button class = "btn btn-primary btn-sm" (click)="dialogRef.close()">Close</button>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        max-width: 500px;
      }
    `,
  ],
})
class PersonDialogComponent{
  // constructor(
  //   public dialogRef: MatDialogRef<PersonDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public person:Eperson,
  // ){}

  constructor(
    public dialogRef: DialogRef<PersonDialogComponent>,
    @Inject(DIALOG_DATA) public person: Eperson,
  ) {}

}