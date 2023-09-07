import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LandDetailsComponent } from './app/land-details/land-details.component';
import { LandService } from './app/land.service';
import { LandenComponent } from './app/landen/landen.component';
import { TopInwonersComponent } from './app/top-inwoners/top-inwoners.component'
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LandDetailsComponent,
    LandenComponent,
    TopInwonersComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, 
  ],
  providers: [LandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
