import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxSparkoutChatbotService {

  public accessToken: any;

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Sends message
   * @param data
   * @returns message
   */
  public sendMessage(data: any): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.accessToken}` }
    return this.http.post(`https://api.seaswap.co/answer`, { 'question': data }, { headers }).pipe(
      switchMap((response: any) => of(response.answer))
    )
  }



  /**
   * Sets access token
   * @param accessToken
   */
  public setAccessToken(accessToken: string) {
    console.log('access token set function', accessToken);
    this.accessToken = accessToken;
  }
}
