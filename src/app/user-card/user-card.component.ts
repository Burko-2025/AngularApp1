import { Component } from '@angular/core';
import { User } from '../user';
import { UserBioComponent} from '../user-bio/user-bio.component';
import { UserStatusComponent } from '../user-status/user-status.component';


@Component({
  selector: 'app-user-card',
  imports: [UserBioComponent, UserStatusComponent],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  user: User = {
    id: 1,
    name: 'John Doe',
    age: 30,
    picture: 'assets/images/placeholder.jpg',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    online: true
  };
}
