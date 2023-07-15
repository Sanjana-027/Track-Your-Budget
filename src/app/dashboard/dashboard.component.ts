import { Component } from '@angular/core';
import { AppService } from '../app.sevice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  goals: any;
  goalTypes: any;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.goals = this.appService.getAllGoals();
    const types = this.appService.goalTypes;
    this.goalTypes = [...types.commonGoals, ...types.otherGoals];
  }

  getGoalImg(goal: any) {
    const a = this.goalTypes.filter((i: any) => goal.goalTypeId == i.id)[0].image;
    return a;
  }

  getGoalColor(goal: any) {
    const a = this.goalTypes.filter((i: any) => goal.goalTypeId == i.id)[0].color;
    return a;
  }
}