import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

const routes: Routes = [
   { path: 'video', component: VideoplayerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VideoplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
