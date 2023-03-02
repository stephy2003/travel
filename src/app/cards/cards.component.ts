import { Component } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
collections = data
}