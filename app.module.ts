import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource'; 
import { PersonRepository } from './person.repository';
import { FilterPhonePipe } from "./filterPhone.pipe";
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
declarations: [AppComponent,FilterPhonePipe],
imports: [BrowserModule, FormsModule,HttpClientModule,
    HttpModule,],
providers: [StaticDataSource, RestDataSource, PersonRepository],
bootstrap: [AppComponent]
})

export class AppModule { }