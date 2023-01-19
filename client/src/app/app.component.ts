import { Component, OnInit } from '@angular/core';

import { HttpService } from './services/http-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public draftData: any;

  // https://cran.r-project.org/web/packages/ffscrapr/vignettes/espn_getendpoint.html
  // https://www.reddit.com/r/fantasyfootball/comments/d6uf1p/espn_v3_api_endpoints/

  // Draft Details
  // https://fantasy.espn.com/apis/v3/games/ffl/seasons/2022/segments/0/leagues/${leagueID}?view=mDraftDetail

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getFFDraftData().subscribe((data: any) => {
      this.draftData = data;
    });
  }
}
