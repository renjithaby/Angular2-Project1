import { Component, OnInit } from '@angular/core';

import { MainPageDataService } from '../main-page-data.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
    private data :any ;
  constructor(private mainPageDataService: MainPageDataService) { }

  ngOnInit() {
      this.getData();
  }

  getData():void{
    this.data = this.mainPageDataService.getSection2Data();
  }

}
