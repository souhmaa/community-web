import {NgModule} from '@angular/core';
import {PersonEditComponent} from './person-edit.component';
import {RouterModule} from '@angular/router';


const routes = [
  {
    path: 'edit',
    component: PersonEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  declarations: [
    PersonEditComponent
  ],
  exports: []
})
export class PersonEditModule {
}
