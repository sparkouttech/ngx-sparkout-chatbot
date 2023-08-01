import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxSparkoutChatbotService {

  public apiBaseURI: any;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Sends message
   * @param data
   * @returns message
   */
  public sendMessage(data:any): Observable<any> {
    return this.http.post(`${this.apiBaseURI}/answer`, {'question':data}).pipe(
      switchMap((response: any) => {
        console.log('response', response);
        // Return a new observable with the response
        return of(response.answer);
      }),
      catchError((err) => {
        console.log('error while sending message to server', err);
        return throwError(err);
      })
    );
  }

  /**
   * Sets base uri
   * @param baseURI
   */
  public setBaseURI(baseURI: string) {
    this.apiBaseURI = baseURI;
  }
}
