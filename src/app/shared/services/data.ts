import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Technology } from '../models/technology.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allTechnologies: Technology[] = [
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

  private technologiesSubject = new BehaviorSubject<Technology[]>(this.allTechnologies);

  technologies$ = this.technologiesSubject.asObservable();

  constructor() { }

  getItems(): Observable<Technology[]> {
    return this.technologies$;
  }

  search(text: string): void {
    if (!text.trim()) {
      this.technologiesSubject.next(this.allTechnologies);
      return;
    }
    const filtered = this.allTechnologies.filter(tech =>
      tech.name.toLowerCase().includes(text.toLowerCase())
    );
    this.technologiesSubject.next(filtered);

  }
  getSingleItem(id: number): Observable<Technology | undefined> {
    const item = this.allTechnologies.find(t => t.id === id);
    return of(item);
  }
  addItem(newItemData: { name: string, description: string, category: string }): void {

    const newId = Math.max(...this.allTechnologies.map(t => t.id)) + 1;

    const newItem: Technology = {
      id: newId,
      name: newItemData.name,
      description: newItemData.description,
      category: newItemData.category,
      imageUrl: 'assets/images/placeholder.png'
    };

    this.allTechnologies.push(newItem);

    this.technologiesSubject.next(this.allTechnologies);
  }
}
