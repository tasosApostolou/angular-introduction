import { Component, Input } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/interfaces/person';
// import { ManyPerson } from 'src/app/shared/interfaces/person';
@Component({
  selector: 'app-simply-datatable-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './simply-datatable-example.component.html',
  styleUrl: './simply-datatable-example.component.css'
})
export class SimplyDatatableExampleComponent {
manyperson = ManyPerson;
}
