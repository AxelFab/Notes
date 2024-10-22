import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    QuillModule.forRoot(),
    RouterModule.forRoot([]),
    FormsModule,
    NgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
