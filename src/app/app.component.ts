import { Component } from '@angular/core';
import { Land } from './model/land'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static readonly LANDEN: Land[] = [
    { id: 11, name: "België"},
    { id: 12, name: "Nederland"},
    { id: 13, name: "Engeland"},
    { id: 14, name: "Ierland"},
    { id: 15, name: "Frankrijk"},
    { id: 16, name: "Spanje"},
    { id: 17, name: "Portugal"},
    { id: 18, name: "Italië"},
    { id: 19, name: "Zwitserland"},
    { id: 20, name: "Duitsland"}
  ];
    
  title = 'Een lijstje van landen';
  land: Land = 
  {
    id: 1,
    name: 'Belgie'
  }
  
  landen = AppComponent.LANDEN;
  selectedLand: Land = null!;

  onSelect(land:Land):void{
    this.selectedLand=land;
  }

}
