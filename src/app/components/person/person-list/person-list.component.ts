import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PersonListComponent {
    constructor() {
    }
}
