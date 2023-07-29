import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/organisms/dashboard/dashboard.component';
import { LineGraphComponent } from './components/atoms/line-graph/line-graph.component';
import { PlaceholderComponent } from './components/organisms/placeholder/placeholder.component';

const routes: Routes = [
  {path: 'dashboard', redirectTo: '/', pathMatch:'full'},
  {path: '', component: DashboardComponent},
  {path: 'tools', component: LineGraphComponent},
  {path: '**', component: PlaceholderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
