import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class BaseService {
  public baseUrl = 'http://localhost:3000';

  constructor(
    public http: HttpClient
  ) {  }

  getReq(url: any) { //get
    return this.http.get<any>(this.baseUrlUpdate(url), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
      }),
    });
  }


  postReq(url: any, data: any) { //post
    return this.http.post<any>(this.baseUrlUpdate(url), data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
      }),
    });
  }

  putReq(url: any, data: any) { //put
    return this.http.put<any>(this.baseUrlUpdate(url), data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
      }),
    });
  }


  baseUrlUpdate(url: string): string {
    return (url.startsWith('/')) ? this.baseUrl + url : url;
  }


  }
