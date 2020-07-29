import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import { AppService } from './app.service';
import {FilterPipe} from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports: [
    // ...
    FilterPipe
  ]
})
export class AppModule { }
