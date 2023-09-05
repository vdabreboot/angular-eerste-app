import { Component , OnInit} from '@angular/core';
import { Land } from './model/land'
import { LandService } from './land.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
  
  landen: Land[] = null!;
  selectedLand: Land = null!;
  totalVotes: number = 0;  
  constructor(private landService: LandService) {}
  onSelect(land:Land):void{
    this.selectedLand=land;
  }
  onValueChange(event: number){
    this.totalVotes = event;
  }
  ngOnInit(): void {
    //this.landService.getLanden().then(landen => this.landen=landen);
    this.landService.getLanden().subscribe(landen => this.landen = landen);
  }
}
