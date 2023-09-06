import { Component , OnInit} from '@angular/core';
import { Land } from '../model/land'
import { LandService } from '../land.service';

@Component({
  selector: 'app-landen',
  templateUrl: './landen.component.html', 
  styleUrls: ['./landen.component.css']
})
export class LandenComponent implements OnInit{
  static readonly LANDEN: Land[] = [
    { id: 11, name: "België" , inwoners: 11409 },
    { id: 12, name: "Nederland" , inwoners: 17017},
    { id: 13, name: "Engeland", inwoners: 65014},
    { id: 14, name: "Ierland", inwoners: 4952},
    { id: 15, name: "Frankrijk" , inwoners: 66836},
    { id: 16, name: "Spanje" , inwoners: 48563},
    { id: 17, name: "Portugal", inwoners: 10834},
    { id: 18, name: "Italië", inwoners: 62008},
    { id: 19, name: "Zwitserland", inwoners: 8287},
    { id: 20, name: "Duitsland", inwoners: 802723}
  ];
    
  title = 'Een lijstje van landen';
  land: Land = 
  {
    id: 1,
    name: 'Belgie',
    inwoners: 11409,
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
