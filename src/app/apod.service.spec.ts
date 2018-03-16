import { TestBed, inject } from '@angular/core/testing';

import { ApodService } from './apod.service';

describe('ApodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApodService]
    });
  });

  it('should be created', inject([ApodService], (service: ApodService) => {
    expect(service).toBeTruthy();
  }));
});
