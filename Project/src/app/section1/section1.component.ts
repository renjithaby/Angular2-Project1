import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


    @Output() toggleMenu =  new EventEmitter();
    toggleMenuBtnClick(){
        console.log("clicked th emenu");
        this.toggleMenu.emit();
    }

}
