import { Component, ViewChild } from '@angular/core';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Modal],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('modalTeste') modalTeste!: Modal;

  showModal() {
    this.modalTeste.open();
    
  }

}
