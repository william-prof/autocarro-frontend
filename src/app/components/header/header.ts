import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('loginModal') loginModal!: LoginComponent;
  
  constructor(public authService: AuthService){}

  logout(){
    this.authService.logout();
  }

  openLoginModal(){
    this.loginModal.open();
  }

  openRegisterModal(){
    alert('Aqui vocês farão a modal de Registro');
  }

  onSwitchToLogin(): void {
    setTimeout(() => this.loginModal.open(), 100);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string | null {
    const user = this.authService.getCurrentUser();
    return user?.name ?? null;
  }

}
