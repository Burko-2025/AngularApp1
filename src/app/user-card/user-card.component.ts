import { Component } from '@angular/core';
import { User } from '../user';  // Import User interface/model
import { UserBioComponent } from '../user-bio/user-bio.component';
import { UserStatusComponent } from '../user-status/user-status.component';

@Component({
  selector: 'app-user-card',                    // HTML tag used to display this component
  imports: [UserBioComponent, UserStatusComponent], 
  // Required because this is a standalone component
  // Allows us to use <app-user-bio> and <app-user-status> inside the template

  templateUrl: './user-card.component.html',    // HTML file for this component
  styleUrls: ['./user-card.component.css']      // CSS styling for this component
})
export class UserCardComponent {

  // =========================
  // USER DATA MODEL
  // =========================

  // Strongly typed using the User interface
  // This object holds all data related to the user
  user: User = {
    id: 1,  // Unique identifier

    name: 'John Doe',  // User's full name

    age: 30,  // User's age

    picture: 'assets/images/placeholder.jpg',  
    // Path to profile picture inside assets folder

    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // User biography text (passed to child bio component)

    online: true  // Boolean indicating online status (used by status component)
  };

}
