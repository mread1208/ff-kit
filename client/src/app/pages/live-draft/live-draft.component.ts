import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-live-draft',
  templateUrl: './live-draft.component.html',
  styleUrls: ['./live-draft.component.scss']
})
export class LiveDraftComponent implements OnInit {

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
