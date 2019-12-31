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
import { ReplaceCharPipe } from './Pipes/replace-char.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { BasicHighlightDirective } from './Directives/basicHighlight.directive';
import { BetterHighlightDirective } from './Directives/better-highlight.directive';
import { UnlessDirective } from './Directives/unless.directive';
import { TempProductsComponent } from './Components/temp-products/temp-products.component';
import { LoggingService } from './Services/logging.service';

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
    ShortenPipe,
    ReplaceCharPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent
  ], //Components,Directives,Pipes goes into Declaration Section
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService], // Services goes into Providers Section
  bootstrap: [AppComponent]
})
export class AppModule { }
