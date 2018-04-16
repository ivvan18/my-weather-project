import { TestBed, inject } from '@angular/core/testing';

import { PreviewSearchService } from './preview-search.service';

describe('PreviewSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreviewSearchService]
    });
  });

  it('should be created', inject([PreviewSearchService], (service: PreviewSearchService) => {
    expect(service).toBeTruthy();
  }));
});
