import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveDraftComponent } from './live-draft.component';


const routes: Routes = [
  {
    path: '',
    component: LiveDraftComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveDraftRoutingModule { }
