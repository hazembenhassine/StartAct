import { Component, OnInit } from '@angular/core';
import {StartupService} from '../../../core/services/startup.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  isLoading: boolean;
  success: boolean;
  failed: boolean;

  messageForm = this.fb.group({
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    telephone: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    content: ['', [Validators.required]]
  });

  constructor(private api: StartupService,
              private fb: FormBuilder) { }

  ngOnInit() {

  }

  get form() {
    return this.messageForm.controls;
  }

  sendMessage() {
    if (this.messageForm.valid) {
      this.isLoading = true;
      this.messageForm.disable();
      this.api.postQuestion(this.messageForm.value).then(() => {
        this.success = true;
      }).catch(() => {
        this.failed = true;
      }).finally(() => {
        this.messageForm.enable();
        this.isLoading = false;
      });
    }
  }

  keepDigits() {
    this.messageForm.patchValue({telephone: this.messageForm.value.telephone.replace(/\D/g, '')});
  }

}
