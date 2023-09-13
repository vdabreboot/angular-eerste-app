import { Component , Input , Output, EventEmitter, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { Land } from '../model/land';
import { LandService } from '../land.service';

@Component({
  selector: 'app-land-details',
  templateUrl: './land-details.component.html',
  styleUrls: ['./land-details.component.css']
})
export class LandDetailsComponent implements OnInit{ 
  //@Input() land: Land = null!;  
  land: Land = null! ;
  //@Output() valueChange = new EventEmitter();
  votes = 0;
  constructor(private landService: LandService, private route: ActivatedRoute , private location: Location) {}
  onClick(){
    this.votes++;
    //this.valueChange.emit(this.votes);
  }
  ngOnInit(): void {
    this.getLand();
  }
  getLand(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.landService.getLand(id).subscribe(land => this.land = land!);
  }
  goBack(): void {
      this.location.back();
  }
  save(): void{
    this.landService.updateLand(this.land)
      .subscribe(() => this.goBack())
  }
}
