import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss']
})
export class MyMenuComponent implements OnInit {
  myMenu:any[]=[];

  constructor(private data:DataShareService) { }

  ngOnInit(): void {
    this.data.currentMyMenu.subscribe(myMenu => this.myMenu = myMenu)
  }

}
