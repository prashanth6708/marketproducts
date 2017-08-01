import { Component, OnInit } from '@angular/core';
import {CollectablesService} from "../shared/collectables.service";
import {collectablesmodel} from "../shared/collectables.model";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  collectables:collectablesmodel[]=[];

  onAddToCollection(item:collectablesmodel)
  {
    this.collectablesservice.addToCollection(item);

  }
  constructor(private collectablesservice:CollectablesService) {
  }
  ngOnInit() {
    this.collectables=this.collectablesservice.getcollectables();
  }
}
