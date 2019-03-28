import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { ArrdemoComponent } from './arrdemo/arrdemo.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { SearchPipe } from './search.pipe';
import { HighlighterDirective } from './highlighter.directive';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo1Component,
    ArrdemoComponent,
    ProductComponentComponent,
    SearchPipe,
    HighlighterDirective,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
