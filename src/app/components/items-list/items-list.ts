import { Technology } from '../../shared/models/technology.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-items-list',
  standalone: false,
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  searchText: string = '';
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
  onTechnologySelected(technology: Technology): void {
    console.log('Подію отримано! Обрано технологію:', technology.name);
  }
  get filteredTechnologies(): Technology[] {
    if (!this.searchText) {
      return this.technologies;
    }
    return this.technologies.filter(tech =>
      tech.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
