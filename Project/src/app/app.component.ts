import { Component,trigger, state, style, transition, animate,HostListener } from '@angular/core';
import {BrowserModule} from  '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(-100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class AppComponent {
  title = 'app works!';
    menuState:string = 'out';

    toggleMenuState(){
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if(event.target.innerWidth>768) {
            this.menuState = 'out';
        }
    }

}


// Things to do
/*
1* create services and send the values to the compoenent through json

2* split each component into further small components

3* use nghide for the empty bg and hide it if is for small device

4* define routers for the nav elements


*/
