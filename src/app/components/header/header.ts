import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('loginModal') loginModal!: LoginComponent;

  openLoginModal(){
    this.loginModal.open();
  }

  onSwitchToLogin(): void {
    setTimeout(() => this.loginModal.open(), 100);
  }

}
