import { Component, OnInit} from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-my-menu-stats',
  templateUrl: './my-menu-stats.component.html',
  styleUrls: ['./my-menu-stats.component.scss']
})
export class MyMenuStatsComponent implements OnInit{
  myVeganMenu:any[]=[];
  myRegularMenu:any[] = [];

  pricePerServing:number = 0;
  readyInMinutes:number = 0;
  healthScore:number = 0;

  constructor(private data:DataShareService) { }

  ngOnInit(): void {
    this.data.currentMyVeganMenu.subscribe(myVeganMenu => this.myVeganMenu = myVeganMenu);
    this.data.currentMyRegularMenu.subscribe(myRegularMenu => this.myRegularMenu = myRegularMenu);
  }

}
