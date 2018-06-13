import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SimplePagingComponent } from './simple-paging.component';
import { ItemListComponent } from './Components/item-list/item-list.component';
import { RxFormMonitorComponent } from './Components/rx-form-monitor/rx-form-monitor.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SimplePagingComponent,
    ItemListComponent,
    RxFormMonitorComponent
  ],
  exports: [
    SimplePagingComponent,
    RxFormMonitorComponent,
    ItemListComponent
  ]
})
export class SimplePagingModule { }
