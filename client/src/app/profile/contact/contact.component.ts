import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ContactFormRes } from '../profile-interface';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

const sendMsgEnabledText = 'Send Message';
const sendMsgDisabledText = 'Sending....';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  sendMessageForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });
  @ViewChild(FormGroupDirective)
  formDirective!: FormGroupDirective;
  submitBtnText: string = sendMsgEnabledText;
  allSubscription: any[] = [];
  submitted: boolean = false;
  sendMsgDisabledText: string;

  constructor(
    private profileService: ProfileService,
    private _snackBar: MatSnackBar
  ) {
    this.sendMessageForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
    this.sendMsgDisabledText = sendMsgDisabledText;
  }

  ngOnInit() {
    this.allSubscription = [];
  }

  resetForm(): void {
    this.submitted = false;
    this.sendMessageForm.reset();
    this.formDirective.resetForm();
    this.resetBtn();
  }

  resetBtn() {
    this.submitBtnText = sendMsgEnabledText;
  }

  sendMail() {
    this.submitted = true;
    this.submitBtnText = sendMsgDisabledText;
    this.allSubscription.push(
      this.profileService.sendEmail(this.sendMessageForm.value).subscribe({
        next: (response: ContactFormRes) => {
          if (response.code) {
            this._snackBar.open(response.message, 'Done');
          }
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
    this.allSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  onFieldTouched(key: string) {
    const inputControl = this.sendMessageForm.controls[key];
    if (
      !this.submitted &&
      inputControl.touched &&
      inputControl.errors &&
      Object.keys(inputControl.errors).length == 1 &&
      inputControl.errors['required']
    ) {
      inputControl.markAsPristine();
      inputControl.setErrors(null);
    }
  }
}
