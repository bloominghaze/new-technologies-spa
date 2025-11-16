import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCard } from './item-card'; // Твій клас ItemCard
import { Technology } from '../../shared/models/technology.model';
// Нам потрібен пайп, який використовує цей компонент
import { Shorten } from '../../shared/pipes/shorten-pipe'; // Твій шлях до файлу
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemCard', () => {
  let component: ItemCard;
  let fixture: ComponentFixture<ItemCard>;
  let compiled: HTMLElement; // "Живий" HTML-елемент

  // Фейкові дані для @Input()
  const mockTechnology: Technology = {
    id: 1,
    name: 'Generative AI',
    description: 'Дуже довгий опис, який має бути скорочений.',
    category: 'AI',
    imageUrl: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 1. Оголошуємо компонент ТА його залежності (пайп)
      declarations: [ItemCard, Shorten],
      imports: [RouterTestingModule] // Потрібен для [routerLink]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemCard);
    component = fixture.componentInstance;

    // 2. Встановлюємо вхідні дані (@Input)
    component.technology = mockTechnology;

    // 3. Запускаємо рендерінг
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ЗАВДАННЯ 3: Перевіряємо відображення
  it('should display the technology name in an H3 tag', () => {
    const h3 = compiled.querySelector('h3');
    expect(h3?.textContent).toContain('Generative AI');
  });

  it('should display the category', () => {
    const categorySpan = compiled.querySelector('.card-category');
    expect(categorySpan?.textContent).toContain('AI');
  });
});
