import { Component, OnInit } from '@angular/core';
import { Technology } from '../../shared/models/technology.model';
import { DataService } from '../../shared/services/data';
@Component({
  selector: 'app-items-list',
  standalone: false,
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsList implements OnInit {

  searchText: string = '';

  technologies: Technology[] = [];


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.technologies = this.dataService.getItems();
  }

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
