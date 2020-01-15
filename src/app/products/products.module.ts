import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ShortenPipe } from '../Pipes/shorten.pipe';
import { ReplaceCharPipe } from '../Pipes/replace-char.pipe';
import { FilterPipe } from '../Pipes/filter.pipe';
import { BasicHighlightDirective } from '../Directives/basicHighlight.directive';
import { BetterHighlightDirective } from '../Directives/better-highlight.directive';
import { UnlessDirective } from '../Directives/unless.directive';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const prodctRoutes:Routes=[
  {path:"products",component:ProductsListComponent},
  {path:"products/:id",component:ProductDetailsComponent},
  {path:"products/:id/edit",component:ProductEditComponent}
];

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    ReplaceCharPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(prodctRoutes)
  ]
})
export class ProductsModule { }
