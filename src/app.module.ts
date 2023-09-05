import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*import { AppComponent } from './app/landen/landen.component';*/
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LandDetailsComponent } from './app/land-details/land-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LandDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }