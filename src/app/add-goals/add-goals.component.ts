import { Component } from '@angular/core';
import { AppService } from '../app.sevice';


@Component({
  selector: 'app-add-goals',
  templateUrl: './add-goals.component.html',
  styleUrls: ['./add-goals.component.scss']
})
export class AddGoalsComponent {
  searchText : String = "";
  goalTypes : any;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.goalTypes = this.appService.goalTypes;
  }

}

