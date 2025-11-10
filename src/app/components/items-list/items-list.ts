import { Component, OnInit, OnDestroy } from '@angular/core';
import { Technology } from '../../shared/models/technology.model';
import { DataService } from '../../shared/services/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: false,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList implements OnInit, OnDestroy {

  searchText: string = '';
  technologies: Technology[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const sub = this.dataService.technologies$.subscribe((data) => {
      console.log('🌊 RxJS потік приніс нові дані:', data);
      this.technologies = data;
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearchChange(): void {
    this.dataService.search(this.searchText);
  }

  onTechnologySelected(technology: Technology): void {
    console.log('Подію отримано! Обрано технологію:', technology.name);
  }
}
