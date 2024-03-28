import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Tasos';

  person = {
    givenName: "Anastasios",
    surName:"Apostolou",
    age:29,
    email:"thoukis95@gmail.com"
  }
}
