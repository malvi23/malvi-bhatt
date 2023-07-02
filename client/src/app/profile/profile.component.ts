import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  events: string[] = [];
  opened: boolean = false;
  showFiller = false;
  menuList: any[] = [
    {
      name: 'Home',
      id: 'home',
    },
    {
      name: 'About',
      id: 'about',
    },
    {
      name: 'Services',
      id: 'services',
    },
    {
      name: 'Portfolio',
      id: 'portfolio',
    },
    {
      name: 'Contact me',
      id: 'contact',
    },
  ];

  socialLinks:any[] = [
    {
      name:'linkedin',
      icon: 'assets/imgs/icons/linkedin.png',
      link:'https://www.linkedin.com/in/malvi-bhatt/'
    },
    {
      name:'github',
      icon: 'assets/imgs/icons/github.png',
      link:'https://github.com/malvi23'
    }
  ]
  @ViewChild('drawer') drawer!: MatSidenav;
  @ViewChild('home') home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  sectionMap: { [key: string]: ElementRef } = {};

  ngAfterViewInit() {
    this.sectionMap = {
      home: this.home,
      about: this.about,
      services: this.services,
      portfolio: this.portfolio,
      contact: this.contact,
    };
  }
  closeSideNav() {
    this.drawer.close();
  }

  scrollToDiv(section: string): void {
    const targetElement = this.sectionMap[section];
    const margin = 20;
    const topOffset =
      targetElement.nativeElement.getBoundingClientRect().top +
      window.pageYOffset -
      margin;

    window.scrollTo({ top: topOffset, behavior: 'smooth' });

    // targetElement.nativeElement.scrollIntoView({
    //   top: topOffset,
    //   behavior: 'smooth',
    // });
    this.closeSideNav();
  }

  openSocialLink(event: Event, url: string) {
    event.preventDefault(); // Prevent default behavior (scrolling)
    window.open(url, '_blank');
  }
}
