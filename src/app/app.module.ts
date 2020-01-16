import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {ProductsModule} from "./products/products.module";
import { AppRoutingModule } from './app-routing.module';

import * as comps from "./Components/components.index";

import { ShortenPipe } from './Pipes/shorten.pipe';
import { ReplaceCharPipe } from './Pipes/replace-char.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { BasicHighlightDirective } from './Directives/basicHighlight.directive';
import { BetterHighlightDirective } from './Directives/better-highlight.directive';
import { UnlessDirective } from './Directives/unless.directive';
import { LoggingService } from './Services/logging.service';
import { ProductService } from './Services/product.service';
import { FooterComponent } from './Components/footer/footer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [
    comps.AppComponent,
    comps.StringInterpolationComonent,
    comps.PropertyBindingComponent,
    comps.EventBindingComponent,
    comps.TwowayBindingComponent,
    comps.StuctDirectivesComponent,
    comps.TempProductsComponent,
    comps.HeaderComponent,
    FooterComponent,
    DashboardComponent
  ], //Components,Directives,Pipes goes into Declaration Section
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    StudentsModule,
    AppRoutingModule        
  ],
  providers: [LoggingService], // Services goes into Providers Section
  bootstrap: [comps.AppComponent]
})
export class AppModule { }
