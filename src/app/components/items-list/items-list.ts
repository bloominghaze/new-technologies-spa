import { Component } from '@angular/core';
import { Technology } from '../../shared/models/technology.model';
import { DataService } from '../../shared/services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: false,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList {

  searchText: string = '';

  public technologies$: Observable<Technology[]>;

  constructor(private dataService: DataService) {
    this.technologies$ = this.dataService.technologies$;
  }

  onSearchChange(): void {
    this.dataService.search(this.searchText);
  }

  onTechnologySelected(technology: Technology): void {
    console.log('Подію отримано! Обрано технологію:', technology.name);
  }
}
