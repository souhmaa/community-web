import {NgModule} from '@angular/core';
import {PersonAddComponent} from './person-add.component';
import {RouterModule} from '@angular/router';


const routes = [
  {
    path: 'add',
    component: PersonAddComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  declarations: [
    PersonAddComponent
  ],
  exports: []
})
export class PersonAddModule {
}
