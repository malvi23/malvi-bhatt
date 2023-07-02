import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

export interface Project {
  title: string;
  subTitle: string;
  url?: string;
  description: string;
  images: string[];
  imgExt: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects: any[] = [
    {
      title: 'Grubbrr',
      subTitle: 'Kiosk Software System for Restaurants',
      description:
        'This is a kiosk application for food ordering in restaurants. It basically eliminate lines, free up employees’s time, and give customers what they want with a custom-designed experience built on GRUBBRR’s self-service kiosks.',
      images: ['grubbrr'],
      imgExt: 'png',
      domain: 'E-commerce',
      technologies: ['angular'],
    },
    {
      title: 'EMS',
      subTitle: 'Environmental Monitoring System',
      description:
        'This application is an IOT project. It monitors environmental parameters like temperature, humidity, grain, pressure etc by collecting real-time data from sensors. User will be able to see real time sensor data in trend chart and can download report for sensor data.',
      images: ['EMS'],
      imgExt: 'jpg',
      domain: 'Environmental Monitoring System',
      technologies: ['angular'],
    },
    {
      title: 'Wellness',
      subTitle: 'Fitness Tracking Application',
      description:
        'Wellness is a health tracking application for web and mobile developed in angular and ionic frameworks which provides features like set goals, manage events, sync applications like google fit, fitbit etc.',
      images: ['wellness'],
      imgExt: 'png',
      domain: 'Fitness',
      technologies: ['angular', 'ionic'],
    },
    {
      title: 'Click-Eat',
      subTitle: 'Online food ordering and Book a table service',
      url: 'https://www.click-eat.co.uk/',
      description:
        'The application developed is unique for Restaurant owners, Customers, Sales and Business owner. It gives restaurants full control of the management of their business. A customer can search for a favorite restaurant, usually filtered via type of cuisine and choose from available items, and choose delivery or pick-up and can book a table via seating chart (Designed by restaurant) or time slots or button directly.',
      images: [
        'click-eat1',
        'click-eat2',
        'click-eat3',
        'click-eat4',
        'click-eat5',
        'click-eat6',
      ],
      imgExt: 'png',
      domain: 'Online Reservation',
      technologies: ['meanstack'],
    },
    {
      title: 'Motive8',
      subTitle: 'Gym induction management system',
      url: 'https://bookings.m8group.co.uk/',
      description:
        'This application is use for managing gym inductions. There are three roles - Admin, Customer and Trainer. Customer can book an induction of their location and make payments and refund policy is also provided on cancellation. Admin can manage payments, customers and inductions.',
      images: ['motive81', 'motive82', 'motive83', 'motive84', 'motive85'],
      imgExt: 'png',
      domain: 'Fitness',
      technologies: ['meanstack'],
    },
    {
      title: 'Itsmycab',
      subTitle: 'Operator panel for car rental service',
      description:
        'This project is an Operator Panel developed for Car Rentals Services. Operator can manage their all details i.e.Bookings, Cabs, Rates, Drivers, Garages.Functionalities provided by this panel: Login, Forgot Password & Reset Password, Dashboard for General overview, Manage Inventory --> Manage Cab, Manage Driver, Manage Garage, Manage Rates, Manage Bookings, We have implemented advanced front-end validations in all pages using Parsley (Javascript form validation library).We have also implemented Booking Calendar (shows booking date- wise for current month and upcoming months), Statistics Graphs, Google maps APIs (customize maps, load city wise areas).We have used Angularjs Framework to make it more user friendly and responsive.For optimizing pages, we used APIs that is developed in Laravel.',
      images: ['itsmycab1'],
      imgExt: 'jpg',
      domain: 'Online Reservation',
      technologies: ['angular', 'laravel'],
    },
  ];

  constructor(
    public dialog: MatDialog,
    private scrollStrategyOptions: ScrollStrategyOptions
  ) {}

  openDialog(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = project;
    // dialogConfig.scrollStrategy = this.scrollStrategyOptions.noop(); // Disable scrolling
    const dialogRef = this.dialog.open(ProjectDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
