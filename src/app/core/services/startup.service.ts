import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient) { }

  private static handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  postQuestion(body: any): Promise<any> {
    return this.http.post(`${environment.api.backendURL}api/questions`, JSON.stringify(body))
      .toPromise().catch(StartupService.handleError);
  }

  getMentors(): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/mentors/`)
      .toPromise().catch(StartupService.handleError);
  }

  getAlbums(): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/albums/`)
      .toPromise().catch(StartupService.handleError);
  }

  getStartups(): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/startups`)
      .toPromise().catch(StartupService.handleError);
  }

  getKPIs(offset: number, limit: number): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/kpis?skip=${offset}&limit=${limit}`)
      .toPromise().catch(StartupService.handleError);
  }

  getSettings(): Promise<any> {
    return this.http.get(`${environment.api.backendURL}api/settings/`)
      .toPromise().catch(StartupService.handleError);
  }

}
