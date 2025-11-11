import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsList } from './components/items-list/items-list';
import { ItemDetails } from './components/item-details/item-details';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsList
  },
  {
    path: 'items/:id',
    component: ItemDetails
  },

  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
