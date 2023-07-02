import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Project } from '../portfolio.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig } from '@angular/platform-browser';

export class CustomHammerConfig extends HammerGestureConfig {
  override overrides = {
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
  };
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  providers: [{ provide: HammerGestureConfig, useClass: CustomHammerConfig }],
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') sliderRef!: ElementRef;
  slider!: HammerManager;
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Project,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private scrollStrategyOptions: ScrollStrategyOptions
  ) {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.slider = new Hammer.Manager(this.sliderRef.nativeElement);
    this.slider.add(
      new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL })
    );
    this.slider.on('swipeleft', () => this.onSwipeRight1(1));
    this.slider.on('swiperight', () => this.onSwipeLeft1(1));
  }
  onSwipeLeft1(index: number) {
    this.onLeft();
  }

  onSwipeRight1(index: number) {
    this.onRight();
  }

  updateSliderPosition() {
    const slideWidth = this.sliderRef.nativeElement.offsetWidth;
    const translateX = -slideWidth * this.currentSlide;
    this.sliderRef.nativeElement.style.transform = `translateX(${translateX}px)`;
  }

  openExternalLink(event: Event, url: string) {
    event.preventDefault(); // Prevent default behavior (scrolling)
    window.open(url, '_blank'); // Open external website in a new tab or window
  }

  currentSlide: number = 0;

  onLeft() {
    if (this.currentSlide != 0) {
      this.currentSlide -= 1;
    } else {
      this.currentSlide = this.data.images.length - 1;
    }
    this.updateSliderPosition();
  }

  onRight() {
    if (this.currentSlide == this.data.images.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
    this.updateSliderPosition();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
