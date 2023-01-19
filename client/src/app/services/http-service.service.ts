import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getFFDraftData(): Observable<{}> {
    // return this.httpClient.get("https://fantasy.espn.com/apis/v3/games/ffl/seasons/2022/segments/0/leagues/739028788?view=mDraftDetail")
    return this.httpClient.get("https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/1241838?view=mDraftDetail")
    // return this.httpClient.get("http://localhost:4200/assets/mock-data-public.json")
  }
}
