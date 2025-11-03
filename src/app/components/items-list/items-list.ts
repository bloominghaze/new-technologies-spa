import { Technology } from '../../shared/models/technology.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-items-list',
  standalone: false,
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  technologies: Technology[] = [
    {
      id: 1,
      name: 'Generative AI',
      description: 'Системи ШІ, здатні генерувати текст, зображення та інший контент.',
      category: 'AI',
      imageUrl: 'assets/images/ai.png'
    },
    {
      id: 2,
      name: 'Quantum Computing',
      description: 'Використання квантово-механічних явищ для обчислень.',
      category: 'Hardware',
      imageUrl: 'assets/images/quantum.png'
    },
    {
      id: 3,
      name: 'CRISPR-Cas9',
      description: 'Технологія редагування геному для зміни ДНК.',
      category: 'Biotech',
      imageUrl: 'assets/images/crispr.png'
    }
  ];
}
