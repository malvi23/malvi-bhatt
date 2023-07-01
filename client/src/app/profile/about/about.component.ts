import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { environemnt } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  downloadResume() {
    const filePath = environemnt.RESUME_FILEPATH; 

    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'Malvi Bhatt-Web Developer.pdf');
      });
  }
}
