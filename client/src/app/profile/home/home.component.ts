import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() drawer: any;
  @Input() menuList: any[] = [];
  @Output() scrollToSectionEvent = new EventEmitter<any>();
  navbarClass: string = 'transparent-navbar';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('scrollPosition:', scrollPosition);

    if(scrollPosition>8){
      this.navbarClass = 'white-navbar';
    }else{
      this.navbarClass = 'transparent-navbar';
    }
    // console.log(this.navbarClass);
    
  }

  scrollToSection(sectionId: string) {
    this.scrollToSectionEvent.emit(sectionId);
  }
}
