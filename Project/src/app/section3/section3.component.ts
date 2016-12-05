import { Component, OnInit } from '@angular/core';
import { MainPageDataService } from '../main-page-data.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {
  private data :any ;
  constructor(private mainPageDataService: MainPageDataService) { }

  ngOnInit() {
      this.getData();
  }
  getData():void{
    this.data = this.mainPageDataService.getSection3Data();
  }
}
