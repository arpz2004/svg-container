import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicScalableSvgComponent } from './components/basic-scalable-svg/basic-scalable-svg.component';
import { TableWithSvgComponent } from './components/table-with-svg/table-with-svg.component';
import { OverflowTableWithSvgComponent } from './components/overflow-table-with-svg/overflow-table-with-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicScalableSvgComponent,
    TableWithSvgComponent,
    OverflowTableWithSvgComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
