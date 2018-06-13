import { TestBed, inject } from '@angular/core/testing';

import { SimplePagingService } from './simple-paging.service';

describe('SimplePagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimplePagingService]
    });
  });

  it('should be created', inject([SimplePagingService], (service: SimplePagingService) => {
    expect(service).toBeTruthy();
  }));
});
