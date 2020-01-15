import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { DashboardComponent } from './Components/dashboard/dashboard.component';


const routes: Routes = [
  // firsy
  { path: "home", component: DashboardComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  // { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]  
})
export class AppRoutingModule { }
