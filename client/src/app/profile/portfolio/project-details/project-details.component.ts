import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../portfolio.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Project,
    private elementRef: ElementRef,private renderer: Renderer2
  ) {}

  ngOnInit() {
    // console.log('data:', this.data);
    this.renderer.selectRootElement('a').blur();
  }

  openExternalLink(event: Event, url:string) {
    event.preventDefault(); // Prevent default behavior (scrolling)
    window.open(url, '_blank'); // Open external website in a new tab or window
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('a').blur();
  }

  currentSlide: number = 0;

  onSlideChange(event: Event) {
    console.log('event:', event);

    // this.currentSlide = event.value;
  }

  onLeft() {
    if (this.currentSlide != 0) {
      this.currentSlide -= 1;
    } else {
      this.currentSlide = this.data.images.length - 1;
    }
  }

  onRight() {
    if (this.currentSlide == this.data.images.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
