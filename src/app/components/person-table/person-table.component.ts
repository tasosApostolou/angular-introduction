import { Component, Input } from '@angular/core';
import { Eperson, Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() person: Person | Eperson | undefined;
  isPerson(){
return this.person && 'address' in this.person;
  }
  
  isEperson(){
    return this.person && 'education' in this.person;

  }
}
