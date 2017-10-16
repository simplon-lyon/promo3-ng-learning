import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*

*/
@Injectable()
export abstract class GenericService<T> {
  protected urlAPI:string = '';
  constructor(protected http:HttpClient) { }

  getAll():Promise<T[]> {
    return this.http.get<T[]>(this.urlAPI).toPromise();
  }

  getById(id:number):Promise<T> {
    return this.http.get<T>(this.urlAPI+'/'+id).toPromise();
  }

  add(entitiy:T):Promise<T> {
    return this.http.post<T>(this.urlAPI, entitiy).toPromise();
  }

  delete(id:number):Promise<void> {
    return this.http.delete<void>(this.urlAPI+'/'+id).toPromise();
  }

  update(id:number, entity:T):Promise<T> {
    return this.http.patch<T>(this.urlAPI+'/'+id,
     entity).toPromise();
  }
  

  


}
