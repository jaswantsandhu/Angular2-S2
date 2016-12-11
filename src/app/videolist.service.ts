import { Injectable } from '@angular/core';


import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VideolistService {

     constructor (private http: Http) {}
     private videoURL = 'https://www.googleapis.com/youtube/v3/search';
     
     getVideos(search) {

        let params: URLSearchParams = new URLSearchParams();
        params.set("part", "snippet");
        params.set("key", "AIzaSyC7Lzx7d_0FqwA7Xa-BXd7RkvTRlQb_gLs");
        params.set("q", search);
        params.set("type", "video");

         return this.http.get(this.videoURL, { search : params })
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}
