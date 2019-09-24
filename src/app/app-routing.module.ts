import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicScalableSvgComponent } from './components/basic-scalable-svg/basic-scalable-svg.component';
import { TableWithSvgComponent } from './components/table-with-svg/table-with-svg.component';

const routes: Routes = [
  { path: 'basic', component: BasicScalableSvgComponent },
  { path: 'table', component: TableWithSvgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
