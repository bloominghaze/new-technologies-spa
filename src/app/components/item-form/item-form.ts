import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data';

@Component({
  selector: 'app-item-form',
  standalone: false,
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemForm implements OnInit {

  itemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: ['Software', Validators.required]
    });
  }

  goBack(): void {
    this.router.navigate(['/items']);
  }

  onSubmit(): void {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    this.dataService.addItem(this.itemForm.value);

    this.router.navigate(['/items']);
  }
}
