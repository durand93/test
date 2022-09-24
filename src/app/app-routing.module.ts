import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChoiceComponent} from "./choice/choice.component";
import {HomeComponent} from "./home/home.component";
import {AreaComponent} from "./area/area.component";
import {PerimeterComponent} from "./perimeter/perimeter.component";

const routes: Routes = [
  {
    path: 'calculationChoice/:name',
    component: ChoiceComponent,
  },
  {
    path: 'calculationChoice/:name', children: [
      {
        path: 'area', // child route path
        component: AreaComponent, // child route component that the router renders
      },
      {
        path: 'perimeter',
        component: PerimeterComponent, // another child route component that the router renders
      },
    ],
  },
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
