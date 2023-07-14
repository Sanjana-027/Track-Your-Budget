import { Component } from '@angular/core';
import { AppService } from '../app.sevice';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss']
})
export class GoalDetailsComponent {

  currentGoal = { "id": 0, "goalTypeId": 0, "title": "", "goalTitle": "", "totalAmount": "", "amountSaved": "" };

  constructor(private appService: AppService) {}

  ngOnInit() {}

}
