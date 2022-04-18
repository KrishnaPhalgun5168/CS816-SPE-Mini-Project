import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  ip: string = 'http://3.109.123.124/';

  constructor(private http: HttpClient) {}

  async elkStackData(response: any) {
    const body = response;
    await this.http
      .post(this.ip + '/calcualtor_functions/_doc/', body)
      .toPromise()
      .then((response) => {
        console.log(response);
      });
  }
}
