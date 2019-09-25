import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicScalableSvgComponent } from './components/basic-scalable-svg/basic-scalable-svg.component';
import { TableWithSvgComponent } from './components/table-with-svg/table-with-svg.component';
import { OverflowTableWithSvgComponent } from './components/overflow-table-with-svg/overflow-table-with-svg.component';

const routes: Routes = [
  { path: 'basic', component: BasicScalableSvgComponent },
  { path: 'table', component: TableWithSvgComponent },
  { path: 'overflow-table', component: OverflowTableWithSvgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
