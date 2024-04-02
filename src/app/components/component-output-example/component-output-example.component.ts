import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { Eperson, ManyPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
manyPerson = ManyPerson
onPersonClicked(person:Eperson){
  console.log(person);
  alert(this.personTemplate(person));
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
