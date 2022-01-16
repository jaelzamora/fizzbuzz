import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FizzbuzzComponent } from './fizzbuzz.component'
import { FizzbuzzRouteModule } from './fizzbuzz.route';

// MATERIAL
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FizzbuzzComponent
  ],
  imports: [
    CommonModule,
    FizzbuzzRouteModule,
    MatButtonModule
  ]
})
export class FizzbuzzModule { }
