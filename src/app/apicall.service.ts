import { Injectable } from '@angular/core';
import { APIdata } from './apidata'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APICallService {

  constructor(private http: HttpClient) { }

  getData(): Observable<APIdata> {
    return this.http.get<APIdata>("https://x17hs8niwh.execute-api.us-east-1.amazonaws.com/dev/demo/get-seekers");
  }


}
