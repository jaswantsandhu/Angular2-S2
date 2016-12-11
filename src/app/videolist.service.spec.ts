/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideolistService } from './videolist.service';

describe('VideolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideolistService]
    });
  });

  it('should ...', inject([VideolistService], (service: VideolistService) => {
    expect(service).toBeTruthy();
  }));
});
