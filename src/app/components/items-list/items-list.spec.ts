import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemsList } from './items-list'; // Твій клас
import { ItemCard } from '../item-card/item-card'; // Справжній дочірній

import { DataService } from '../../shared/services/data';
import { Shorten } from '../../shared/pipes/shorten-pipe';
import { Highlight } from '../../shared/directives/highlight';

// 1. Створюємо фейкові дані, які поверне наш фейковий сервіс
const MOCK_DATA = [
  { id: 1, name: 'Test Tech 1', description: 'Desc 1', category: 'AI', imageUrl: '' },
  { id: 2, name: 'Test Tech 2', description: 'Desc 2', category: 'HW', imageUrl: '' }
];

// 2. Створюємо фейковий сервіс
class MockDataService {
  technologies$ = of(MOCK_DATA); // Віддає фейкові дані як потік
  search(text: string) {} // Порожня функція
}

describe('ItemsList (Integration Test)', () => {
  let component: ItemsList;
  let fixture: ComponentFixture<ItemsList>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule, // Потрібен для [(ngModel)]
        RouterTestingModule // Потрібен для routerLink
      ],
      declarations: [
        ItemsList,
        ItemCard,    // 3. Використовуємо РЕАЛЬНІ компоненти
        Shorten,     // ... та їх РЕАЛЬНІ залежності
        Highlight
      ],
      providers: [
        // 4. "Підміняємо" справжній сервіс на наш фейковий
        { provide: DataService, useClass: MockDataService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemsList);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    // 5. Запускаємо ngOnInit (який підписується на потік | async)
    fixture.detectChanges();
  });

  // ЗАВДАННЯ 5: Тест взаємодії
  it('should render an <app-item-card> for each technology', () => {
    // 6. Знаходимо всі <app-item-card> у DOM
    const cards = compiled.querySelectorAll('app-item-card');

    // 7. Перевіряємо, що їх 2 (як у MOCK_DATA)
    expect(cards.length).toBe(2);
  });

  it('should pass correct data (@Input) to the first <app-item-card>', () => {
    // 8. Знаходимо перший <app-item-card> і перевіряємо його вміст
    const firstCard = compiled.querySelector('app-item-card');
    expect(firstCard?.textContent).toContain('Test Tech 1');
    expect(firstCard?.textContent).toContain('AI');
  });
});
