import {collectablesmodel} from "./collectables.model";
export class CollectablesService{
  private collectables:collectablesmodel[]=[
    {description:"a book on angular2", type:"BOOK"},
    {description:"a mobile phone", type:"MOBILE"},
    {description:"an HP laptop", type:"LAPTOP"},
    {description:"a water bottle", type:"BOTTLE"}
  ];
  private collection:collectablesmodel[]=[];

  getcollectables()
    {
      return this.collectables;
}
  getcollection()
  {
    return this.collection;
  }
  addToCollection(item:collectablesmodel)
  {
    if (this.collection.indexOf(item)!=-1)
    {
      return;
    }
    this.collection.push(item);

  }
  removeFromCollection(item:collectablesmodel)
  {
    this.collection.splice(this.collection.indexOf(item),1)

  }
}
