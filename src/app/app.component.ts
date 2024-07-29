import { Component } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  student = {
    name: '',
    address: '',
    phone: '',
    dob: '',
    email: '',
    gender: ''
  };

  constructor(private formService: FormService) {}

  onSubmit() {
    this.formService.submitForm(this.student).subscribe(
      response => {
        console.log('Form submitted successfully:', response);
        
      },
      error => {
        console.error('Error submitting form:', error);
        
      }
    );
  }
}
