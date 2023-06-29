import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private profileService: ProfileService) {}
  downloadResume() {
    const filePath = '/assets/documents/Malvi Bhatt-UI Developer.pdf'; 

    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'Malvi Bhatt-Web Developer.pdf');
      });
  }
}
