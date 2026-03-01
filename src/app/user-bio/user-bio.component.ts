import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent {
  @Input() bio!: string;
  @Output() bioChange = new EventEmitter<string>();
  @ViewChild('bioInput') bioInput!: ElementRef<HTMLTextAreaElement>;

  // Emit changes as user types
  onBioChange(value: string) {
    this.bioChange.emit(value);
    this.autoResize();
  }

  // Auto resize method
  autoResize() {
    if (!this.bioInput) return;
    const textarea = this.bioInput.nativeElement;
    textarea.style.height = 'auto'; // reset height
    textarea.style.height = textarea.scrollHeight + 'px'; // expand to fit content
  }

  // Resize on component load so initial bio fits
  ngAfterViewInit() {
    this.autoResize();
  }
  saveBio() {
    // Save in local storage
    localStorage.setItem('user-bio', this.bio);
    alert('Bio saved locally!');
  }
  ngOnInit() {
  const savedBio = localStorage.getItem('user-bio');
  if (savedBio) this.bio = savedBio;
}
}

