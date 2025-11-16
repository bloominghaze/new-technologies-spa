import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ItemDetails } from './item-details';
import { DataService } from '../../shared/services/data';

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => '1'
    }
  }
};

class MockDataService {
  getSingleItem(id: number) {
    return of({ id: 1, name: 'Test', description: 'Desc', category: 'AI', imageUrl: '' });
  }
}

describe('ItemDetails', () => {
  let component: ItemDetails;
  let fixture: ComponentFixture<ItemDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetails],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
