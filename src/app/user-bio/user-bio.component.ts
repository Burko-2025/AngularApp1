import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ViewChild, 
  ElementRef 
} from '@angular/core';

@Component({
  selector: 'app-user-bio',                 // HTML tag used to render this component
  standalone: true,                         // This is a standalone Angular component
  templateUrl: './user-bio.component.html', // HTML template file
  styleUrls: ['./user-bio.component.css']   // CSS styles for this component
})
export class UserBioComponent {

  // Receives the bio value from the parent component
  // The "!" tells TypeScript this will definitely be assigned
  @Input() bio!: string;

  // Sends updated bio value back to the parent component
  // Enables two-way binding: [(bio)]
  @Output() bioChange = new EventEmitter<string>();

  // Gets access to the textarea element in the template
  // #bioInput in the HTML connects to this
  @ViewChild('bioInput') bioInput!: ElementRef<HTMLTextAreaElement>;

  // =========================
  // BIO CHANGE HANDLER
  // =========================

  // Called every time the user types in the textarea
  onBioChange(value: string) {
    this.bioChange.emit(value);  // Send updated value to parent
    this.autoResize();           // Resize textarea to fit content
  }

  // =========================
  // AUTO-RESIZE FUNCTION
  // =========================

  // Automatically adjusts the textarea height
  autoResize() {

    // Safety check in case ViewChild is not ready yet
    if (!this.bioInput) return;

    const textarea = this.bioInput.nativeElement;

    // Reset height so it can shrink if text is deleted
    textarea.style.height = 'auto';

    // Set height to match the scroll height (content height)
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  // =========================
  // LIFECYCLE HOOKS
  // =========================

  // Runs after the component view is fully initialized
  // Ensures initial bio content is properly sized
  ngAfterViewInit() {
    this.autoResize();
  }

  // Runs when the component is created
  // Loads saved bio from localStorage (if it exists)
  ngOnInit() {
    const savedBio = localStorage.getItem('user-bio');

    if (savedBio) {
      this.bio = savedBio;
    }
  }

  // =========================
  // SAVE FUNCTION
  // =========================

  // Saves the current bio to localStorage
  saveBio() {
    localStorage.setItem('user-bio', this.bio);
    alert('Bio saved locally!');
  }
}

