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

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComonent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StuctDirectivesComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
