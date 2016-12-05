import { Component, OnInit } from '@angular/core';
import { MainPageDataService } from '../main-page-data.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {
  private data :any ;
  constructor(private mainPageDataService: MainPageDataService) { }

  ngOnInit() {
      this.getData();
  }

  getData():void{
    this.data = this.mainPageDataService.getSection5Data();
  }

}
