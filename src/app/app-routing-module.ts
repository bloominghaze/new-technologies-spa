import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemForm } from './components/item-form/item-form';
import { ItemsList } from './components/items-list/items-list';
import { ItemDetails } from './components/item-details/item-details';
import { Login } from './components/login/login';
import { AuthGuard } from './shared/guards/auth-guard';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsList,
  },
  {
    path: 'items/new',
    component: ItemForm,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: Login },
  {
    path: 'items/:id',
    component: ItemDetails,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/items', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
