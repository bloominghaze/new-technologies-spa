import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Sidebar } from './components/sidebar/sidebar';
import { MainContent } from './components/main-content/main-content';
import { ItemsList } from './components/items-list/items-list';
import { ItemCard } from './components/item-card/item-card';
import { ItemDetails } from './components/item-details/item-details';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Sidebar,
    MainContent,
    ItemsList,
    ItemCard,
    ItemDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
