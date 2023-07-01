import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ContactFormRes } from '../profile-interface';
import { Subscription } from 'rxjs';

const sendMsgEnabledText = 'Send Message';
const ssendMsgDisabledText = 'Sending....';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  sendMessageForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  @ViewChild(FormGroupDirective)
  formDirective!: FormGroupDirective;
  submitBtnText: string = sendMsgEnabledText;
  allSubscription: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.allSubscription = [];
  }

  resetForm(): void {
    this.sendMessageForm.reset();
    this.formDirective.resetForm();
    this.resetBtn();
  }

  resetBtn() {
    this.submitBtnText = sendMsgEnabledText;
  }

  sendMail() {
    this.submitBtnText = ssendMsgDisabledText;
    this.allSubscription.push(
      this.profileService.sendEmail(this.sendMessageForm.value).subscribe({
        next: (response: ContactFormRes) => {
          this.resetForm();
        },
        error: (error: any) => {
          console.error(error);
          this.resetBtn();
        },
      })
    );
  }

  ngOnDestroy() {
    this.allSubscription.forEach((subscription:Subscription)=>{
      subscription.unsubscribe();
    })
  }
}
