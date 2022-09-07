import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutdetailsComponent } from './layoutdetails/layoutdetails.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
 {path:'home', component: HomeComponent},
 {path:'layout', component: LayoutComponent},
 {path:'layout/:id',component:LayoutdetailsComponent},
 {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'**',component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
