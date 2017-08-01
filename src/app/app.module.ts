import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import {CollectablesService} from "./shared/collectables.service";
import { HeaderComponent } from './header.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CollectablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
