import { Component, OnInit } from '@angular/core';
import { MainPageDataService } from '../main-page-data.service';
@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.css']
})
export class Section6Component implements OnInit {
  private data :any ;
  constructor(private mainPageDataService: MainPageDataService) { }

  ngOnInit() {
      this.getData();
  }

  getData():void{
    this.data = this.mainPageDataService.getSection6Data();
  }

}
