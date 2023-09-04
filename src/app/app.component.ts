import { Component } from '@angular/core';
import { Land } from './model/land'

@Component({
  selector: 'app-root',
  /*#templateUrl: './app.component.html',*/
  template: `
    <h1> {{title}}</h1>
    <h2>Details van {{land.name}}</h2>
    <div><label>id: <label>{{land.id}}<div>
    <div><label>naam: </label>{{land.name}}<div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Een lijstje van landen';
  land: Land = 
  {
    id: 1,
    name: 'Belgie'
  }
}
