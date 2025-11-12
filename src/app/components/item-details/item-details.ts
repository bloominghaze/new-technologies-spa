import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../shared/services/data';
import { Technology } from '../../shared/models/technology.model';

@Component({
  selector: 'app-item-details',
  standalone: false,
  templateUrl: './item-details.html',
  styleUrls: ['./item-details.css']
})
export class ItemDetails implements OnInit, OnDestroy {

  technology: Technology | undefined; // Тут буде наша технологія
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    const sub = this.dataService.getSingleItem(id).subscribe(data => {
      this.technology = data;
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['/items']); // Повертаємося на головний список
  }
}
