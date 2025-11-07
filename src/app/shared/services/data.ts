import { Injectable } from '@angular/core';
import { Technology } from '../models/technology.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private technologies: Technology[] = [
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

  constructor() { }

  getItems(): Technology[] {
    console.log('⚡ DataService: данные успешно запрошены компонентом!');
    return this.technologies;
  }
}
