import { Component, Input} from '@angular/core';
import { Technology } from '../../shared/models/technology.model';

@Component({
  selector: 'app-item-card',
  standalone: false,
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() technology!: Technology;

}
