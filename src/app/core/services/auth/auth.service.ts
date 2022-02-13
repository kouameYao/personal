import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ApiService } from '../api/api.service';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = 'login'
  constructor(private api: ApiService) {}

  /**
   * 
   * @param data
   */
  login(data: any): Observable<any> {
    return this.api._post(`${this.endpoint}`, data).pipe(
      map((response: any) => response),
      catchError((err: any) => throwError(err))
    );
  }

  /**
   * 
   * @param credentials 
   */
  storeToken(credentials: any) {
    localStorage.setItem('usersCredentials', JSON.stringify({credentials}))
  }

  /**
   * @returns {any}
   */
   get credentials() {
     return;
    // return JSON.parse(localStorage.getItem('akilCabCredentials'));
  }

}
