import { PNFComponent } from './pnf/pnf.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'pnf',component:PNFComponent},
  {path:'',redirectTo:'pnf',component:PNFComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
