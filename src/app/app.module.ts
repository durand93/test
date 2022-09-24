import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './choice/choice.component';
import { HomeComponent } from './home/home.component';
import { PerimeterComponent } from './perimeter/perimeter.component';
import { AreaComponent } from './area/area.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PerimeterService} from "./services/permiter/perimeter.service";
import {AreaService} from "./services/area/area.service";
import {ConversionService} from "./services/conversion/conversion.service";

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    HomeComponent,
    PerimeterComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PerimeterService,AreaService,ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
