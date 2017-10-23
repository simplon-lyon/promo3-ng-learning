import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/*

*/
@Injectable()
export abstract class GenericService<T> {
  protected urlAPI:string = '';
  constructor(protected http:HttpClient) { }

  getAll():Observable<T[]> {
    return this.http.get<T[]>(this.urlAPI);
  }

  getById(id:number):Observable<T> {
    return this.http.get<T>(this.urlAPI+'/'+id);
  }

  add(entitiy:T):Observable<T> {
    return this.http.post<T>(this.urlAPI, entitiy);
  }

  delete(id:number):Observable<void> {
    return this.http.delete<void>(this.urlAPI+'/'+id);
  }

  update(id:number, entity:T):Observable<T> {
    return this.http.patch<T>(this.urlAPI+'/'+id,
     entity);
  }
  

  


}
