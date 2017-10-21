import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
