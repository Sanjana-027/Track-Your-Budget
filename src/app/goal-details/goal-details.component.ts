import { Component } from '@angular/core';
import { AppService } from '../app.sevice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss']
})
export class GoalDetailsComponent {
  goalType:any;
  currentGoal = { "id": 0, "goalTypeId": 0, "title": "", "goalTitle": "", "totalAmount": "", "amountSaved": "0" };

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.route.params.subscribe((res: any) => {
      const goals = this.appService.goalTypes;
      this.goalType = [...goals.commonGoals, ...goals.otherGoals].filter(g => g.id == res.id)[0];
      
    })
    const editId = this.route.snapshot.queryParamMap.get("id");
    if (editId)
      this.fetchAndUpdate(editId);
  }

  ngOnInit() {}

  saveGoal() {
    this.currentGoal.goalTypeId = this.goalType.id;
    this.currentGoal.title = this.goalType.title;
    this.appService.addGoal(this.currentGoal);
    
  }

  fetchAndUpdate(id: any) {
    this.currentGoal = this.appService.getAllGoals().filter(res => res.id == id)[0];
  }

}