import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';        // Needed if you use Angular routing
import { UserCardComponent } from './user-card/user-card.component'; // Import the main user card component

@Component({
  selector: 'app-root',                             // Root component HTML tag
  imports: [RouterOutlet, UserCardComponent],      // Standalone component imports
  templateUrl: './app.component.html',             // HTML template for the root component
  styleUrls: ['./app.component.css']               // CSS styles for the root component
})
export class AppComponent {

  // =========================
  // COMPONENT STATE
  // =========================

  // Title of the app (not used for rendering here, but can be displayed in template)
  title = 'AngularApp1';
}