import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes, Route } from "@angular/router";

// import {
//   AppComponent,
//   StringInterpolationComonent,
//   PropertyBindingComponent,
//   EventBindingComponent,
//   TwowayBindingComponent,
//   StuctDirectivesComponent,
//   ProductsListComponent,
//   ProductThumbnailComponent,
//   TempProductsComponent
// } from "./Components/components.index";

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
import { ProductsListComponent } from './Components/components.index';


// const routes:Routes = [
const routes: Route[] = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductsListComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  // declarations: [
  //   AppComponent,
  //   StringInterpolationComonent,
  //   PropertyBindingComponent,
  //   EventBindingComponent,
  //   TwowayBindingComponent,
  //   StuctDirectivesComponent,
  //   ProductsListComponent,
  //   ProductThumbnailComponent,
  //   ShortenPipe,
  //   ReplaceCharPipe,
  //   FilterPipe,
  //   BasicHighlightDirective,
  //   BetterHighlightDirective,
  //   UnlessDirective,
  //   TempProductsComponent
  // ], //Components,Directives,Pipes goes into Declaration Section
  declarations: [
    comps.AppComponent,
    comps.StringInterpolationComonent,
    comps.PropertyBindingComponent,
    comps.EventBindingComponent,
    comps.TwowayBindingComponent,
    comps.StuctDirectivesComponent,
    comps.ProductsListComponent,
    comps.ProductThumbnailComponent,
    ShortenPipe,
    ReplaceCharPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    comps.TempProductsComponent,
    comps.HeaderComponent,
    FooterComponent,
    DashboardComponent
  ], //Components,Directives,Pipes goes into Declaration Section
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggingService], // Services goes into Providers Section
  bootstrap: [comps.AppComponent]
})
export class AppModule { }
