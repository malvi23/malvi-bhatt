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
      description: "The Shiba Inu is the smallest of the six original and distinct spit breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title:"Fullstack Development",
      imgUrl: "assets/imgs/fullstack.png",
      description: "The Shiba Inu is the smallest of the six original and distinct spit breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    }
  ];
}
