import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddGoalsComponent } from './add-goals/add-goals.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "add-goals", component: AddGoalsComponent },
  { path: "goal-details/:id", component: GoalDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

