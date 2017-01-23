import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

import { Routes, RouterModule } from '@angular/router';
import { VideolistComponent } from './videolist/videolist.component';
import { VideolistService } from "./videolist.service";
import { MaterialModule } from '@angular/material';
import { TitlePipe } from './title.pipe';

const routes: Routes = [
        { path: '', component: VideolistComponent },
        { path: 'video/:id', component: VideoplayerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VideoplayerComponent,
    VideolistComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: false }),
    MaterialModule.forRoot() 
  ],
  providers: [VideolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
