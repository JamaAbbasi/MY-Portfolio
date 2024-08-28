import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contect',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contect.component.html',
  styleUrl: './contect.component.css'
})
export class ContectComponent {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // Handle the form submission, e.g., send data to a backend server
    } else {
      console.log('Form is not valid');
    }
  }
}

