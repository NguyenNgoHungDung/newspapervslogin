import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformRoutingModule } from './inform-routing.module';
import { InformComponent } from './inform.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    InformComponent
  ],
  imports: [
    CommonModule,
    InformRoutingModule,
    MatProgressBarModule,
  ]
})
export class InformModule { }
