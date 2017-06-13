import { Component } from '@angular/core';

enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test Anguar 4 Shop app';
  name = 'Some shop';
  description = 'Long text description';
  isAvailable: boolean = true;
  price = 22.3;
  category = CardSuit;
}
