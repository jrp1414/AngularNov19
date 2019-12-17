import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {StringInterpolationComonent} from "./Components/stringInterpolation/stringInterpolation.component";
import { PropertyBindingComponent } from './Components/property-binding/property-binding.component';
import { EventBindingComponent } from './Components/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Components/twoway-binding/twoway-binding.component';
import { StuctDirectivesComponent } from './Components/stuct-directives/stuct-directives.component';
import { ProductsListComponent } from './Components/products/products-list/products-list.component';
import { ProductThumbnailComponent } from './Components/products/product-thumbnail/product-thumbnail.component';
import { ShortenPipe } from './Pipes/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComonent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StuctDirectivesComponent,
    ProductsListComponent,
    ProductThumbnailComponent,
    ShortenPipe
  ], //Components,Directives,Pipes goes into Declaration Section
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [], // Services goes into Providers Section
  bootstrap: [AppComponent]
})
export class AppModule { }
