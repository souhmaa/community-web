import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PersonEditComponent {
    constructor() {
    }
}
