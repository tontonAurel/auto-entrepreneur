import {Component} from 'angular2/core';
import {DetailComponent} from './detail.component';

@Component({
    selector: 'my-app',
    templateUrl: '/templates/app.html',
    directives: [DetailComponent],
    styles: [`
        ul li {
            padding:0;
        }
        ul li div {
            box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
            width:80%;
            height:200px;
            margin:auto;
        }
    `]
})
export class AppComponent { }
