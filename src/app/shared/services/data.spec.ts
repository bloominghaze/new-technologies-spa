import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data';
import { Technology } from '../models/technology.model';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);

    // 1. "ЛОВИМО" ЗАПИТ З КОНСТРУКТОРА
    // Це виправляє помилки "Expected no open requests"
    const req = httpMock.expectOne('/technologies');
    req.flush([]); // Відповідаємо порожнім масивом
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a single item via GET', () => {
    const mockItem: Technology = {
      id: 1, name: 'Test Tech', description: 'Test Desc', category: 'AI', imageUrl: ''
    };

    service.getSingleItem(1).subscribe(item => {
      expect(item).toEqual(mockItem);
    });

    const req = httpMock.expectOne('/technologies/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockItem);
  });
});
