import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services: any[] = [
    {
      title:"Frontend Development",
      imgUrl: "assets/imgs/frontend.png",
      description: "As a front-end developer, I specialize in creating engaging user interfaces and seamless user experiences. Using HTML, CSS, and JavaScript, I bring designs to life, ensuring they are visually appealing, responsive, and accessible across different devices and browsers."
    },
    {
      title:"Fullstack Development",
      imgUrl: "assets/imgs/fullstack.png",
      description: "I am a full-stack developer capable of handling all aspects of web development. From designing user interfaces to developing server-side logic and managing databases, I create end-to-end solutions that encompass both the client and server sides of web applications."
    }
  ];
}
