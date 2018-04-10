import { TestBed, inject } from '@angular/core/testing';

import { WeatherPreviewService } from './weather-preview.service';

describe('WeatherPreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherPreviewService]
    });
  });

  it('should be created', inject([WeatherPreviewService], (service: WeatherPreviewService) => {
    expect(service).toBeTruthy();
  }));
});
