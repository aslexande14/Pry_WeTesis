import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: false,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  isOpen = false;
  message: string = '';
  
  toggleChat(){
    this.isOpen = !this.isOpen;

  }

  sendMessage(){
    const whatsappNumer = '+51957047170';
    const encodeMesasge = encodeURIComponent(this.message);
    window.open(`https://wa.me/${whatsappNumer}?text=${encodeMesasge}`, '_blank');

  }
}
