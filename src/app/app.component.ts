import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Tasos';
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
  }

}
