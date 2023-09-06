import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Land } from './model/land';
import { LANDEN } from './mock-landen';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  /*constructor() { }*/
  /*getLanden(): Promise<Land[]> {
    return Promise.resolve(LANDEN);
  }*/
  getLanden(): Observable<Land[]> {
    return of(LANDEN);
  }
  getTopLanden(top: number): Observable<Land[]>{
    return of(LANDEN.sort((a,b) => b.inwoners).slice(0,top));
  }
  getLand(id: number): Observable<Land | undefined> {
    return of(LANDEN.find(land => land.id === id));
  }
}
