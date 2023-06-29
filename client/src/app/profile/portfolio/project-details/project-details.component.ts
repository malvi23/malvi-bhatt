import { Component, Inject } from '@angular/core';
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
    public data: Project
  ) {}

  currentSlide: number = 0;

  onSlideChange(event: Event) {
    console.log('event:', event);

    // this.currentSlide = event.value;
  }

  onLeft() {
    if (this.currentSlide != 0) {
      this.currentSlide -= 1;
    }else{
      this.currentSlide = this.data.images.length - 1
    }
  }

  onRight() {
    if (this.currentSlide == this.data.images.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
  }

  ngOnInit() {
    // console.log('data:', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
