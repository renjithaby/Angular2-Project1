import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slidemenu',
  templateUrl: './slidemenu.component.html',
  styleUrls: ['./slidemenu.component.css']
})
export class SlidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
    @Output() toggleMenu =  new EventEmitter();
    handleCloseBtnClick(){
        console.log("close btn clicked");
        this.toggleMenu.emit();
    }
}
