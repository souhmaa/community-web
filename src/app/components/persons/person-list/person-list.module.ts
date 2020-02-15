import {NgModule} from '@angular/core';
import {PersonListComponent} from './person-list.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: 'list',
    component: PersonListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PersonListComponent
  ]
})
export class PersonListModule { }

