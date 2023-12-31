import { Injectable } from '@angular/core';
import { Observable , catchError, of, map} from 'rxjs';
import { Land } from './model/land';
import { LANDEN } from './mock-landen';
import { HttpClient , HttpHeaders} from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({
  'Content-Type': 'application/json'  })};

@Injectable({
  providedIn: 'root'
})
export class LandService {
  private landenUrl = 'api/landen';
  
  constructor(private http: HttpClient){}
    /*constructor() { }*/
  /*getLanden(): Promise<Land[]> {
    return Promise.resolve(LANDEN);
  }*/
  getLanden(): Observable<Land[]> {
    //return of(LANDEN);
    return this.http.get<Land[]>(this.landenUrl)
      .pipe(
        catchError(this.handleError('getLanden',[]))
      )
  }
  getTopLanden(top: number): Observable<Land[]>{
    //return of(LANDEN.sort((a,b) => b.inwoners).slice(0,top));
    return this.http.get<Land[]>(this.landenUrl)
      .pipe(
        map(landen => landen.sort(function (a,b) {
          return b.inwoners - a.inwoners; 
        }).slice(0,top))        
      )
  }
  getLand(id: number): Observable<Land | undefined> {
    //return of(LANDEN.find(land => land.id === id));
    const url =`${this.landenUrl}/${id}`;
    return this.http.get<Land>(url)
      .pipe(
        catchError(this.handleError<Land>(`getLand id=${id}`))
      );
  }
  updateLand(land: Land): Observable<any> {
    return this.http.put(this.landenUrl,land,httpOptions)
  }
  addLand(land: Land): Observable<any>{
    return this.http.post<Land>(this.landenUrl,land,httpOptions)
      .pipe(
        catchError(this.handleError<Land>('addLand'))
      );
  }
  handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(operation, error);
      return of(result as T)
    }
  }
}
