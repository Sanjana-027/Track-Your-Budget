import { Injectable } from '@angular/core';
import { Goal } from './model/goals';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    allGoals: Goal[] = [
        { "id": 1, "goalTypeId": 4, "title": "Travel", "goalTitle": "Mountain Trip", "totalAmount": "10000", "amountSaved": "340" },
        { "id": 2, "goalTypeId": 1, "title": "Property", "goalTitle": "New House", "totalAmount": "100000", "amountSaved": "56550" }
    ];

    goalTypes = {
        commonGoals: [
            { id: "1", title: "Property", goalTitle: "New House", image: "assets/svg-icons/property.jpg", color: "#5f7622" },
            { id: "2", title: "Wedding", goalTitle: "Wedding Day", image: "assets/svg-icons/wedding.svg", color: "#ff5555" },
            { id: "3", title: "Transport", goalTitle: "New Bike", image: "assets/svg-icons/bike.jpg", color: "#d36b2f" },
            { id: "4", title: "Travel", goalTitle: "Mountain Trip", image: "assets/svg-icons/mountain.svg", color: "#3d953c" },
        ],
        otherGoals: [
            { id: "5", title: "Travel", goalTitle: "Hiking Trip", image: "assets/svg-icons/hiking.jpg", color: "#173148" },
            { id: "6", title: "Transport", goalTitle: "New Car", image: "assets/svg-icons/car.svg", color: "#807237" },
        ]
    };

    getAllGoals() {
        var temp = this.loadFromLocalStorage();
        if (temp) {
            this.allGoals = temp;
        }
        return this.allGoals;

    }

    addGoal(currGoal: Goal) {
        currGoal.id = this.allGoals.length + 1;
        this.allGoals.push(currGoal);
        this.saveInLocalStorage();

    }

    editGoal() {
        this.saveInLocalStorage();
    }


    saveInLocalStorage() {
        localStorage.setItem("savedGoals", JSON.stringify(this.allGoals));
    }
    loadFromLocalStorage() {
        var a: any = localStorage.getItem("savedGoals");
        return JSON.parse(a);
    }
}
