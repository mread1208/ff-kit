import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getFFDraftData(): Observable<{}> {
    return this.httpClient.get("https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/1241838?view=mDraftDetail")
  }

  getLeagueData(seasonId = "2022"): Observable<{}> {
    return this.httpClient.get(`${environment.ffkitApi}/league?seasonId=${seasonId}`);
  }
}
