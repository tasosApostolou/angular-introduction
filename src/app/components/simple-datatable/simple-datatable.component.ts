import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Eperson } from 'src/app/shared/interfaces/person';

import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {

@Input() data: Eperson[];
@Output() personClicked = new EventEmitter<Eperson>();

sortOrder = {
  givenName: 'none',
  surName:'none',
  age:'none',
  email:'none',
  education:'none'
}

sortData(sortKey:string){
  if(this.sortOrder[sortKey] === 'asc'){
    this.sortOrder[sortKey] = 'desc'
    this.data = sortBy(this.data,sortKey).reverse()
  }else{
    this.sortOrder[sortKey]='asc';
    this.data = sortBy(this.data,sortKey);
  }
  for(let key in this.sortOrder){
    if(key !== sortKey){
      this.sortOrder[key] = 'none'
    }
  }
}

sortSign(sortKey: string) {
  if (this.sortOrder[sortKey] === 'asc') {
    return '↑';
  } else if (this.sortOrder[sortKey] === 'desc') {
    return '↓';
  } else {
    return '';
  }
}

onPersonClicked(peson:Eperson){
  this.personClicked.emit(peson)
}

}