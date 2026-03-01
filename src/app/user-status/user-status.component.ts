import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status',
  standalone: true,
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css'],
  imports: [CommonModule]
})

export class UserStatusComponent {
  @Input() online!: boolean; // current status
  @Output() onlineChange = new EventEmitter<boolean>(); // notify parent

  toggleStatus() {
    this.online = !this.online;
    this.onlineChange.emit(this.online);
  }
}
