import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { EventBindExampleComponent } from "../event-bind-example/event-bind-example.component";
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-component-input-example',
    standalone: true,
    templateUrl: './component-input-example.component.html',
    styleUrl: './component-input-example.component.css',
    imports: [ PersonTableComponent]
})
export class ComponentInputExampleComponent {
  person0: Person = 
{
    givenName: "Anastasios",
    surName:"Apostolou",
    age:29,
    email:"thoukis95@gmail.com",
    address:"dsadsa"
  };

  person1: Person = 
  {
    givenName: "john",
    surName:"doe",
    age:29,
    email:"john@gmail.com",
    address:"new York, USA"
  };

}
