import { Component, OnInit } from '@angular/core';
import { VideolistService } from '../videolist.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {

  videolistArray : any;
  private searchQuery : string;

  search(event)
    {
    
        console.log( this.videoservice.getVideos(event.target.value), "Observable");
        this.videoservice.getVideos(event.target.value)
        .subscribe((videos) => {
            this.videolistArray = videos.items;
        });
    }

  constructor( private videoservice : VideolistService  ) { }

  ngOnInit() {
      this.searchQuery = "";
      this.videoservice.getVideos(this.searchQuery)
      .subscribe((videos) => {
          console.log(videos, "Data")
          this.videolistArray = videos.items;
      });
  }

}
