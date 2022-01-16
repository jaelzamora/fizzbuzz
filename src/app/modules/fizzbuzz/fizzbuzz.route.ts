import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FizzbuzzComponent } from './fizzbuzz.component';

const routes: Routes = [
    { path: '', component: FizzbuzzComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FizzbuzzRouteModule { }
