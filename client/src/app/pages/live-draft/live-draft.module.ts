import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LiveDraftRoutingModule } from './live-draft-routing.module';
import { LiveDraftComponent } from "./live-draft.component";

import { HttpService } from 'src/app/services/http.service';

@NgModule({
  declarations: [LiveDraftComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    LiveDraftRoutingModule
  ],
  providers: [
    HttpService
  ]
})
export class LiveDraftModule { }
