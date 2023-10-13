import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxSparkoutChatbotService {

  public accessToken: any;
  public apiError: any;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Sends message
   * @param data
   * @returns message
   */
  public sendMessage(data: any): Observable<any> {
    const headers = { 'Authorization': `Bearer ${this.accessToken}` }
    return this.http.post(`https://api.seaswap.co/answer`, { 'question': data }, { headers }).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.answer);
      }),
      catchError((err) => {
        this.apiError = err.detail;
        console.log('error while sending message to server', err);
        return throwError(err);
      })
    );
  }

  /**
   * Sets access token
   * @param accessToken
   */
  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }
}
