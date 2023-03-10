import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public leagueData: any = {};
  public leagueTeamsData: any = {};

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getLeagueData().subscribe((data: any) => {
      this.leagueData = data;
    });
    this.httpService.getTeamsData().subscribe((data: any) => {
      this.leagueTeamsData = data;
    });
  }

}
