import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SimplePagingModule } from 'projects/simple-paging/src/lib/simple-paging.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SimplePagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
