import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';
 
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {

  videoId : string;
  params : any;
  trustedHTML : SafeHtml;
  dangerousHTML : string;

  constructor( private route : ActivatedRoute, private sanitizer : DomSanitizer ) {}

  ngOnInit() {
      this.route.params.subscribe((params) => {
          this.params = params;
          this.dangerousHTML = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${this.params.id}" frameborder="0" allowfullscreen></iframe>`;
          this.trustedHTML = this.sanitizer.bypassSecurityTrustHtml(this.dangerousHTML);

      });

      

  }

}
