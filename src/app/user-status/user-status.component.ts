import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status',                    // HTML tag used to render this component
  standalone: true,                               // This is a standalone Angular component
  templateUrl: './user-status.component.html',    // HTML template file
  styleUrls: ['./user-status.component.css'],     // CSS styles for this component
  imports: [CommonModule]                         // Needed for Angular directives like ngClass
})

export class UserStatusComponent {

  // =========================
  // INPUT FROM PARENT
  // =========================

  // Receives the current online status from the parent component
  // The "!" tells TypeScript that this value will be provided
  @Input() online!: boolean;


  // =========================
  // OUTPUT TO PARENT
  // =========================

  // Emits changes back to the parent component
  // Enables two-way binding: [(online)]
  @Output() onlineChange = new EventEmitter<boolean>();


  // =========================
  // TOGGLE METHOD
  // =========================

  // Called when the user clicks the Toggle button
  toggleStatus() {

    // Flip the boolean value (true → false, false → true)
    this.online = !this.online;

    // Notify the parent component about the updated value
    this.onlineChange.emit(this.online);
  }
}
