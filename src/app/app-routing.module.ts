import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employees/add', component: AddDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
