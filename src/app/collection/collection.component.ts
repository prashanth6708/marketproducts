import { Component, OnInit } from '@angular/core';
import {collectablesmodel} from "../shared/collectables.model";
import {CollectablesService} from "../shared/collectables.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  collectedItems:collectablesmodel[]=[];

  onRemoveFromCollection(item:collectablesmodel){

    this.collectableservice.removeFromCollection(item);
  }

  constructor(private collectableservice:CollectablesService) { }
  ngOnInit() {
    this.collectedItems=this.collectableservice.getcollection();
  }
}
