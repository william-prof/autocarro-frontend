import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal';
import { AuthService, LoginRequest } from '../../services/auth';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() switchRegister = new EventEmitter<void>();

  loginData: LoginRequest = {
    email: '',
    password: '',
  }

  isLoading: boolean = false;
  errorMessage: string = '';


  constructor(private authService: AuthService){}
  
  open(): void {
    this.isOpen = true;
    this.resetForm();
  }

  close(): void {
    this.isOpen = false;
    this.closeModal.emit();
    this.resetForm();
  }

  onSubmit(): void {
    if(!this.loginData.email || !this.loginData.password){
      console.log('entrou')
      this.errorMessage = "Por favor, preencha todos os campos.";
      return;
    }


    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    })


  }

  resetForm(): void {
    this.errorMessage = '';
    this.isLoading = false;
    this.loginData = {
      email: '',
      password: '',      
    }


  }
}
