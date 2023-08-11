import {Component} from "@angular/core";
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user: User = {
    name: {firstName: 'Casandra', lastName: 'Sucala', middleName: 'Romana'},
    birthday: new Date()
  }
}
