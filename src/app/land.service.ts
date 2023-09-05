import { Injectable } from '@angular/core';
import { Land } from './model/land';
import { LANDEN } from './mock-landen';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  /*constructor() { }*/
  getLanden(): Land[] {
    return LANDEN;
  }

}
