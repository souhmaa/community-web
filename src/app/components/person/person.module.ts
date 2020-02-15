import {NgModule} from '@angular/core';
import {PersonListModule} from './person-list/person-list.module';
import {PersonAddModule} from './person-add/person-add.module';
import {PersonEditModule} from './person-edit/person-edit.module';

@NgModule({
  imports: [
    PersonListModule,
    PersonAddModule,
    PersonEditModule
  ]
})
export class PersonModule {
}
