import { Component } from '@angular/core';
import { AppService } from '../app.sevice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  goals: any;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.goals = this.appService.getAllGoals();
  }
}
