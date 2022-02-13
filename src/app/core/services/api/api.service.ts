import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.serverUrl;

  constructor(public http: HttpClient) { }

  _get(endpoint: string, params?: any, reqOpts?: any, baseUrl?: string) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    const uri = baseUrl ? baseUrl : this.url;
    return this.http.get(`${uri}/${endpoint}`, reqOpts);
  }

  _post(endpoint: string, body: any, reqOpts?: any, baseUrl?: string) {
    const uri = baseUrl ? baseUrl : this.url;
    return this.http.post(`${uri}/${endpoint}`, body, reqOpts);
  }

  _put(endpoint: string, body: any, reqOpts?: any, baseUrl?: string) {
    const uri = baseUrl ? baseUrl : this.url;
    return this.http.put(`${uri}/${endpoint}`, body, reqOpts);
  }

  _patch(endpoint: string, body: any, reqOpts?: any, baseUrl?: string) {
    const uri = baseUrl ? baseUrl : this.url;
    return this.http.patch(`${uri}/${endpoint}`, body, reqOpts);
  }

  _delete(endpoint: string, reqOpts?: any, baseUrl?: string) {
    const uri = baseUrl ? baseUrl : this.url;
    return this.http.delete(`${uri}/${endpoint}`, reqOpts);
  }
}
