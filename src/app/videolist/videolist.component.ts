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
        this.videoservice.getVideos(event.target.value)
        .subscribe((videos) => {
            this.videolistArray = videos.items;
        });
    }

  constructor( private videoservice : VideolistService  ) { }

  ngOnInit() {
      this.searchQuery = "casey neistat";
      this.videoservice.getVideos(this.searchQuery)
      .subscribe((videos) => {
          this.videolistArray = videos.items;
      });
  }

}
