import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    id: '',
    name: '',
    address: '',
    phone: '',
    dob: '',
    email: '',
    gender: ''
  };

  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private httpClient: HttpClient) {}

  onSubmit() {
    console.log('Submitting form data:', this.formData);
    
    
    this.httpClient.post<any>('http://localhost:4000/api/data', this.formData)
      .subscribe(
        response => {
          this.successMessage = 'Data saved successfully!';
          this.errorMessage = null;
          console.log('Data saved successfully:', response);
        },
        (error: HttpErrorResponse) => {
          this.errorMessage = 'Error saving data: ' + error.message;
          this.successMessage = null;
          console.error('Error saving data:', error.message);
        }
      );
  }
}
