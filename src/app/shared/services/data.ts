import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Technology } from '../models/technology.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private technologiesUrl = '/technologies';

  private technologiesSubject = new BehaviorSubject<Technology[]>([]);
  technologies$ = this.technologiesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadItems();
  }

  private loadItems(): void {
    this.http.get<Technology[]>(this.technologiesUrl)
      .pipe(
        catchError(err => {
          console.error('Помилка завантаження даних!', err);
          return EMPTY;
        })
      )
      .subscribe(data => {
        this.technologiesSubject.next(data);
      });
  }

  getItems(): Observable<Technology[]> {
    return this.technologies$;
  }

  search(text: string): void {
    const searchTerm = text.trim().toLowerCase();
    let url = this.technologiesUrl; // http://localhost:3000/technologies

    if (!searchTerm) {
      this.http.get<Technology[]>(url).subscribe(data => {
        this.technologiesSubject.next(data);
      });
      return;
    }

    this.http.get<Technology[]>(url).subscribe(allData => {
      const filtered = allData.filter(tech =>
        tech.name.toLowerCase().includes(searchTerm)
      );
      this.technologiesSubject.next(filtered);
    });
  }
  addItem(newItemData: { name: string, description: string, category: string }): void {

    const newItem: Omit<Technology, 'id'> = {
      name: newItemData.name,
      description: newItemData.description,
      category: newItemData.category,
      imageUrl: 'assets/images/placeholder.png'
    };

    this.http.post<Technology>(this.technologiesUrl, newItem)
      .subscribe(addedItem => {

        const currentItems = this.technologiesSubject.getValue();
        this.technologiesSubject.next([...currentItems, addedItem]);
      });
  }


  getSingleItem(id: number): Observable<Technology | undefined> {
    const url = `${this.technologiesUrl}/${id}`;
    return this.http.get<Technology>(url);
  }

}
