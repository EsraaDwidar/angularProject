import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

Observable
@Injectable({
  providedIn: 'root'
})
export class UserCardService {

  constructor(private _HttpClient:HttpClient) { }

  getuser(id: number):Observable<any>
  {
    return this._HttpClient.get(` https://reqres.in/api/users/${id}`);
  }
}

