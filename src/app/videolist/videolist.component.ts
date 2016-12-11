import { Component, OnInit } from '@angular/core';
import { VideolistService } from '../videolist.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {

  videolistArray : any;

  search()
    {
    }

  constructor( private videoservice : VideolistService  ) { }

  ngOnInit() {
      this.videoservice.getVideos()
      .subscribe((videos) => {
          this.videolistArray = videos.items;
      });
  }

}
